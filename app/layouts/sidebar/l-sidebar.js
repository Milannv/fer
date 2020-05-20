"use strict";
import './style.css'

export class SidebarLayout extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    render() {
        //language=HTML
        return `
            <nav class="sidebar">
                <legend>
                    Filters
                </legend>
                <legend>
                    Something else here
                </legend>
            </nav>
        `;
    }
}

customElements.define('l-sidebar', SidebarLayout);