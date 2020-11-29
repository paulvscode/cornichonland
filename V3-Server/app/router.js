const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/products', (req, res) => {
    res.render('products')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

// router.get('*', (req, res) => {
//     res.send('<p>Page non trouvée</p>', 404);
// });

module.exports = router;