const Rest = require('express')

const instance = Rest()
instance.use(Rest.json());
const addRoute = (routes) => {
    routes.map((route) => {
        return route.map((_) => {
            return instance[_.method](
                _.route,
                (request, response) => {
                    return response.json(_.controller(request))
                }
            )
        })
    })
}
instance.listen(3000, () => {
    console.log('Serve is running on port 3000!')
})

module.exports = {
    addRoute
}