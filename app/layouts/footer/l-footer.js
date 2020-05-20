"use strict";
import './style.css';

export class FooterLayout extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    render() {
        // language=HTML
        return `
            <footer>
                <span>&copy; 2020</span>
            </footer>
        `;
    }


}

customElements.define('l-footer', FooterLayout);