
//used when we dont find the routes

const notFoundMiddleware = (req,res) =>
 res.status(404).send('Route does not exist!')


 export default notFoundMiddleware