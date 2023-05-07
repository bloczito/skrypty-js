const express = require('express');
const CATEGORY = require("../core/categories");
const router = express.Router();


router.get('/', (req, res) => {
    res.send(CATEGORY);
});

router.get('/:value', (req, res) => {
    const value = req.params.value;
    const category = CATEGORY.find(category => category.value === value);

    if (!category) {
        res.status(404);
        return res.send("Category not found");
    }

    return res.send(category);
});

router.post('/', (req, res) => {
    const value = req.body.value;
    const label = req.body.label;

    if (!value || !label) {
        res.status(400);
        return res.send("Value and label fields are required");
    }

    const category = CATEGORY.find(category => category.value === value);

    if (category) {
        res.status(400);
        return res.send("Category with given value already exists");
    }

    const newCategory = { value, label }

    CATEGORY.push(newCategory);

    return res.send(newCategory);
});

router.put('/:value', (req, res) => {

    // Check if body contains value and label fields
    const value = req.params.value;
    const label = req.body.label;

    if (!value || !label) {
        res.status(400);
        return res.send("Label field is required");
    }

    // Check if category with given value already exists
    const category = CATEGORY.find(category => category.value === value);

    if (!category) {
        res.status(400);
        return res.send("Category with given not found");
    }

    // Update category
    category.label = label;

    res.status(200);
    return res.send(category);
});

router.delete('/:value', (req, res) => {
   const categoryValue = req.params.value;

    const category = CATEGORY.find(category => category.value === categoryValue);

    if (!category) {
        res.status(404);
        return res.send("Category not found");
    }

    // Remove category from CATEGORY array
    CATEGORY.splice(CATEGORY.indexOf(category), 1);
    return res.send("Deleted");
});

module.exports = router;
