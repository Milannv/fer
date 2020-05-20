import {RouterHandler} from "./router/router-handler";
import {Core} from './registry/core';
import './styles/style.css';
import './styles/layout.css';
import {Http} from "./http/http";

class App {
    /**
     * Order is important
     */
    constructor() {
        const router = new RouterHandler();
        new Core();
        new Http();
        router.init();
    }
}

new App();
