"use strict";
import Navigo from "navigo";
import feRoutes from './routes';
import {isAuthorised} from './../auth/auth';
import {HomePage} from "../pages/home/Home";
import {PageNotFound} from "../pages/other/PageNotFound";

export class RouterHandler {
    constructor() {
        if (!RouterHandler.instance) {
            RouterHandler.instance = this;
        } else {
            throw new Error("Already initialised: use getInstance()");
        }

        let root = null;
        let useHash = true;
        let hash = "#";
        this.router = new Navigo(root, useHash, hash);
        return RouterHandler.instance;
    }

    static get getInstance() {
        return RouterHandler.instance;
    }

    /**
     * Injects the found routing contents into the DOM (app/index.html)
     * @param component
     */
    static inject(component) {
        const outlet = document.querySelector("router-output");
        while (outlet.firstChild) {
            outlet.removeChild(outlet.firstChild);
        }
        outlet.appendChild(component);
    }

    /**
     * Setup and register the available routes.
     */
    init() {
        // Register custom routes
        feRoutes.forEach((route) => {
            this.router
                .on(
                    route.path,
                    (params, query) => {
                        const queryObject = query
                            ? JSON.parse(
                                '{"' + query.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
                                function (key, value) {
                                    return key === "" ? value : decodeURIComponent(value);
                                }
                            )
                            : {};

                        // Resolve the component and initialise it
                        RouterHandler.inject(
                            new route.resolve({
                                ...params,
                                ...queryObject,
                            })
                        );
                    },
                    {
                        // Any actions to do before we should execute the route
                        before: (done, params) => {
                            if (!route.secured || (route.secured && isAuthorised(route.resolve))) { // dumb example: pass page name to authorise method
                                done();
                            } else {
                                // Fixme: seems to be some kind of loop here messing up the browser history
                                this.router.navigate("/unauthorised"); // deliberately show this page instead of taking you to the login page
                                done(false);
                            }
                        },
                    }
                )
                .resolve();
        });

        // Default routes
        this.router
            .on(() => {
                RouterHandler.inject(
                    new HomePage()
                );
            })
            .resolve(); // important: otherwise the link does not work when loading the page directly (i.e. not navigating to it using the router instance)

        this.router
            .notFound(() => {
                RouterHandler.inject(
                    new PageNotFound()
                );
            })
            .resolve();
    }
}

RouterHandler.instance = null;