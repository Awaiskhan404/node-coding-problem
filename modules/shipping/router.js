const Shipping = require('./shipping.controller');

const route = [
    {
        route: '/',
        method: 'get',
        controller: Shipping.getworker
    },
    {
        route: '/',
        method: 'post',
        controller: Shipping.postworker
    },
]
module.exports = {
    route
}