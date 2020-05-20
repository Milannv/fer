"use strict";
import {RouterHandler} from "../../router/router-handler";

export class UserPage extends HTMLElement {
    constructor() {
        super();

        // Example to show how to access route params. Clearly, the name should originate from store as opposed
        // to relying on route params.
        this.route = RouterHandler.getInstance.router._lastRouteResolved;

        if (this.route.query.length) {
            alert(`Query params: ${this.route.query}`)
        }
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    render() {
        return `
            <h1>Hi, ${this.route.params.name}</h1>
`;
    }

}

customElements.define('user-page', UserPage);