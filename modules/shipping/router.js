const Shipping = require('./shipping.controller');

const route = [
    {
        route: '/',
        method: 'get',
        controller: Shipping.worker
    },
]
module.exports = {
    route
}