const ProductController = require('../controllers/products.controllers')

const routes = (app) => {
    app.get("/api", ProductController.testRoute);
    app.get("/api/products", ProductController.getAll);
    app.post("/api/products", ProductController.create);
    app.get("/api/products/:id", ProductController.getOne);    
    app.put("/api/products/:id", ProductController.update);
    app.delete("/api/products/:id", ProductController.delete);
};

module.exports = routes