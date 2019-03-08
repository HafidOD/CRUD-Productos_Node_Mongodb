const express = require('express');
const router = express.Router();

const Product = require('../models/products');

router.get('/', async (req, res) => {
    const productos = await Product.find();
    res.render('index',{
        productos
    });
});

router.post('/add', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.redirect('/');
});

router.get('/delete/:id', async(req, res) => {
    const { id } = req.params;
    await Product.remove({_id: id});
    res.redirect('/');
});


router.get('/edit/:id', async (req, res, next) => {
    const { id } = req.params;
    const pro = await Product.findById(id);
    res.render('edit', { 
        pro });
});

router.post('/update/:id', async (req, res) => {
    const { id } = req.params;
    await Product.update({_id: id}, req.body);
    res.redirect('/');
});
module.exports = router;