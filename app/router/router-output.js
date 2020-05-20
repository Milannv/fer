"use strict";

export class RouterOutput extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    render() {
        return `<span>Loading ...</span>`;
    }
}


