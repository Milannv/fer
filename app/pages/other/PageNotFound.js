"use strict";

export class PageNotFound extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return [];
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    render() {
        return `<h1>[404] Page not found</h1>`;
    }

}

customElements.define('page-not-found', PageNotFound);
