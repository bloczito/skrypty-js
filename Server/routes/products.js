const express = require('express');
const CATEGORIES = require("../core/categories");
const PRODUCTS = require("../core/products");
const {getMaxId, isNotEmptyAndBlank, shuffleArray} = require("../core/utils");
const router = express.Router();



router.get('/', (req, res) => {

    const queryCategory = req.query.category;

    if (queryCategory) {
        const category = CATEGORIES.find(category => category.value === queryCategory);

        if (!category) {
            res.status(400);
            return res.send("Invalid category");
        }

        return res.send(PRODUCTS.filter(product => product.category === category.value));
    } else {

        return res.send(shuffleArray(PRODUCTS));
    }




});

router.post('/', (req, res) => {
    const {name, price, category, image, description} = req.body;

    if (!isNotEmptyAndBlank(name) ||
        !price ||
        !category ||
        !isNotEmptyAndBlank(image)
    ) {
        res.status(400);
        return res.send("Invalid body: name, price, category and image are required");
    }

    console.log(price, name, category, image, description)

    const savedCategory = CATEGORIES.find(({value}) => value === category);

    if (!savedCategory) {
        res.status(400);
        return res.send("Invalid category");
    }

    const parsedPrice = Number(price);

    if (isNaN(parsedPrice)) {
        res.status(400);
        return res.send("Price must be a number");
    }

    if (parsedPrice <= 0) {
        res.status(400);
        return res.send("Price must be greater than 0");
    }

    const newProduct = {
        id: getMaxId(PRODUCTS) + 1,
        name,
        price,
        category,
        description,
        image,
    };

    PRODUCTS.push(newProduct);

    return res.send(newProduct);
});

router.get('/:id', (req, res) => {
   const id = parseInt(req.params.id);
   const product = PRODUCTS.find(product => product.id === id);

   if (!product) {
         res.status(404);
         res.send("Product not found");
   }

   res.send(product);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const product = PRODUCTS.find(product => product.id === id);

    if (!product) {
        res.status(404);
        return res.send("Product not found");
    }

    const {name, price, category, image, description} = req.body;

    if (name && !isNotEmptyAndBlank(name)) {
        res.status(400);
        return res.send("Invalid body: name must not be empty");
    }

    if (price && (isNaN(Number(price)) || Number(price) <= 0)) {
        res.status(400);
        return res.send("Invalid body: price must be a number greater than 0");
    }

    if (category) {
        const savedCategory = CATEGORIES.find(({value}) => value === category);

        if (!savedCategory) {
            res.status(400);
            return res.send("Invalid category");
        }
    }

    if (image && !isNotEmptyAndBlank(image)) {
        res.status(400);
        return res.send("Invalid body: image must not be empty");
    }


    if (name) { product.name = name; }

    if (price) { product.price = Number(price); }

    if (category) {
        const savedCategory = CATEGORIES.find(({value}) => value === category);

        if (savedCategory) {
            product.category = savedCategory.value;
        }
    }

    if (image) { product.image = image; }

    if (description) { product.description = description; }

    res.send(product);
});

router.delete('/:id', (req, res) => {
   const id = Number(req.params.id);

   if (isNaN(id)) {
         res.status(400);
         return res.send("Invalid id");
   }

   const productIndex = PRODUCTS.findIndex(product => product.id === id);

    if (productIndex === -1) {
        res.status(404);
        return res.send("Product not found");
    }

    PRODUCTS.splice(productIndex, 1);

    return res.send("Product deleted");
});

module.exports = router;
