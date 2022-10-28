const Rest = require('express')

const instance = Rest()

const addRoute = (routes) => {
    routes.map((route) => {
        route.map((_) => {
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