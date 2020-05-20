"use strict";
import './style.css';

/**
 * Contrived example to show that the route can't be loaded because it is protected.
 */
export class Unauthorised extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    render() {
        return `
        <div class="unauthorised-blink-animation">
            <h1>Trespassers won't be tolerated.</h1>
            <p>It's better that you make a U-turn here...</p>
        </div>
`;
    }

}

customElements.define('page-unauthorised', Unauthorised);
