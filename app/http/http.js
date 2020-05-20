export class Http {
    constructor() {
        if (!Http.inst) {
            Http.inst = this;
        } else {
            throw new Error("Already intialised: use instance().");
        }

        return Http.inst;
    }

    static get instance() {
        return Http.inst;
    }

    doGet(path, authentication) {
        const headers = {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
        };

        if (authentication === true) {
            // Obtain auth data and inject token type and token into request headers.
            // headers["Authorization"] = auth.token_type + " " + auth.access_token;
        }
        return fetch(process.env.BASE_URL + path, {
            headers: headers,
        });
    }
}

Http.inst = null;