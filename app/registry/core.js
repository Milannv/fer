import {layoutComponents} from "../layouts/layout-registry"; // exposes the layout to app/index.html

export class Core {
    constructor() {
        if (!Core.inst) {
            Core.inst = this;
        } else {
            throw new Error("Already initialised: use instance()");
        }

        return Core.inst;
    }

    static get instance() {
        return Core.inst;
    }
}
Core.inst = null;

const components = [
    ...layoutComponents,
];
