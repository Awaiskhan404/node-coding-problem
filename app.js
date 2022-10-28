const server = require('./instance.server')
const Shipping = require('./modules/shipping/router');
const modules = require('./modules/index');
const Router = require('./server.router');
/* Add routes to the server here
first parameter is the route, second parameter is the controller function of the route */

const router = new Router(modules);
server.addRoute(router.LoadRoutes());