"use strict";

class Router {
    constructor() {
        this.staticRoutes = {};
        this.dynamicRoutes = {};
    }

    /* sets static routes to check for */
    addStaticRoute(route, callback) {
        this.staticRoutes[route] = callback;
    }

    /* sets dynamic routes to check for */
    addDynamicRoute(route, callback) {
        this.dynamicRoutes[route] = callback;
    }

    async getResponse(req, data) {
        let output = "";
        let url = req.url;
        
        /* route request */
        if (url in this.staticRoutes) {
            output = await this.staticRoutes[url](req, data);
        } else {
            for (let key in this.dynamicRoutes) {
                if (url.includes(key)) {
                    output = await this.dynamicRoutes[key](req, data);
                }
            }
        }

        /* route doesn't exist or response is not properly set up */
        if (output === "") {
            logger.logError("[UNHANDLED][" + req.method + " " + url + "] request data: " + json.stringify(data));
            throw {"code": 404, "message": "UNHANDLED RESPONSE"};
        }
    
        return output;
    }
}

module.exports.router = new Router();