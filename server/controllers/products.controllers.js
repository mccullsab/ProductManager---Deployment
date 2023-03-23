const Product = require('../models/products.models')

const controller = {
    testRoute: (req, res) => {
        res.send("Our express api server is now sending this over to the browser");
    },

    getAll: (req, res) => {
        Product.find()
            .then((allProducts) => {
                res.json({ products: allProducts });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    },

    create: (req, res) => {
        Product.create(req.body)
            .then((newlyCreatedProduct) => {
                res.json({ product: newlyCreatedProduct });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    },

    getOne: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then((oneProduct) => {
                res.json({ product: oneProduct });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    },

    update: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { 
            new: true,
            runValidators: true
        })
            .then((updatedProduct) => {
                res.json({ product: updatedProduct });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    },

    delete: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.json({ result });
            })
            .catch((err) =>
                res.status(500).json({ message: "whoops - something is not working", error: err })
            );
    }
}

module.exports = controller