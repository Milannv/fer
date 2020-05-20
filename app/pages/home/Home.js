"use strict";
import './style.css'

export class HomePage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    render() {
        //language=HTML
        return `
            <div class="home">
                <h1>Home</h1>
                <p>This is a demo app that leverages frontend routing.</p>
                <ul>
                    <li><a href="#/secret">Go to the unauthorised page</a></li>
                    <li><a href="#/secret-authorised">Go to the secret page</a></li>
                    <li><a href="#/user/John/1">Parameterised route</a></li>
                    <li><a href="#/user/John/1?q=abc">Parameterised route w/ query param</a></li>
                </ul>
            </div>
        `;
    }
}

customElements.define('home-page', HomePage);