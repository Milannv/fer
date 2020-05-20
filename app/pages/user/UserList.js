"use strict";
import {Http} from '../../http/http';

export class UserListPage extends HTMLElement {
    constructor() {
        super();

        this.userList = [];
        this.isFetching = true;
    }

    _loadUserList() {
        Http.instance
            .doGet('/users/')
            .then((response) => {
                this.userList = response.data
            })
            .catch(() => {
                console.error('Could not fetch user list')
            })
            .finally(() => {
                this.isFetching = false;
            })
    }

    connectedCallback() {
        this.innerHTML = this.render();

        this._loadUserList();
    }

    render() {
        // Note: Use a webcomponent to show the user list and user entries here
        return `<h1>Show user list</h1>${this.isFetching ? `
    Fetching data..` : `
    ${this.userList.length ? `${this.userList.length} users found`: `No users found`}`}`;
    }

}

customElements.define('user-list-page', UserListPage);
