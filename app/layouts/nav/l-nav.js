"use strict";
import './style.css'

export class NavigationLayout extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    render() {
        //language=HTML
        return `
            <nav class="main-nav">
                <ul>
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/users">Users</a></li>
                </ul>
                <ul class="right">
                    <li><a href="#/login" aria-disabled="true">Sign in</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('l-nav', NavigationLayout);