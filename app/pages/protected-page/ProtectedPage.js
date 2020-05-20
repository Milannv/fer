"use strict";

export class ProtectedPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    render() {
        return `
            <h1>Protected page</h1>
            <p>Dumb example, let's assume our token has been validated and that we are authorised.</p>
`;
    }

}

customElements.define('protected-page', ProtectedPage);