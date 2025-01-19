
const fs = require('fs');

const productsController = {
    all : (req, res) => {
        const products =JSON.parse(fs.readFileSync('db/sushi.json', 'utf-8'));
        res.render("producto/productos",{title : 'Tipo de sushi'})
}
}