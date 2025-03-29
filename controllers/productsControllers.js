const { Product, Category, Ingredient, Section, ProductIngredient } = require("../db/database/models");

const productsControllers = {
  products: async (req, res) => {
    try {
      let roll = await Product.findAll({ where: { categoryId: 2 } });
      let niguiri = await Product.findAll({ where: { categoryId: 1 } });

      return res.render("productos/productos", {
        niguiri,
        roll,
      });
    } catch (error) {
      console.log(error);
    }
  },

  agregar: async (req, res) => {

    try {
      const [categories, sections, ingredients] = await Promise.all([
        Category.findAll(),
        Section.findAll(),
        Ingredient.findAll()
      ]) 

      return res.render("productos/productsCrear", {
        categories,
        sections,
        ingredients
      });
    } catch (error) {
      console.log(error)
    }

  }, //crear el producto atraves del formulario

  detalle: async (req, res) => {
    try {
      const [product, categories] = await Promise.all([
        Product.findByPk(req.params.id,{
          include : ['ingredients']
        }),
        Category.findAll()
      ]) 

      return res.render("productos/productosDetalles", {
        ...product.dataValues,
        categories,
      });
    } catch (error) {
      console.log(error);
    }
  }, //detalle del producto la parte que se ve solo

  crear: async (req, res) => {
    try {

      const { name, description, pieces, price, categoryId, sectionId, ingredients } = req.body;

      const product = await Product.create({
        name : name.trim(),
        description : description.trim(),
        pieces,
        price,
        categoryId,
        sectionId,
        image : req.file ? req.file.filename : null
      })

      if(ingredients){

        const ingredientsArray = Array.isArray(ingredients) ? ingredients : [ingredients]
        await Promise.all(
          ingredientsArray.map(async (ingredient) => {
            return await ProductIngredient.create({
              productId: product.id,
              ingredientId: ingredient
            });
          })
        );
      }
      
      return res.redirect("/adm/products");
    } catch (error) {
      console.log(error);
    }
  }, //guardar producto parte de administrador

  editar: async (req, res) => {
    const { id } = req.params;
    try {
      const product = products.findByPk({ id });

      return res.render("productos/productosEditar", {
        categorias,
        ...product,
      });
    } catch (error) {
      console.log(error);
    }
  }, //editar producto parte de administrador
  update: async (req, res) => {
    try {
      const { nombre, descripcion, piezas, precio, categoria } = req.body;

      const productosModificados = await products.findAll((product) => {
        if (product.id === +req.params.id) {
          product.nombre = nombre.trim();
          product.descripcion = descripcion.trim();
          product.piezas = +piezas;
          product.precio = +precio;
          product.categoria = categoria;
        }
        return products;
      });

      await products.update(productosModificados, {
        where: { id: +req.params.id },
      });

      return res.redirect("admin");
    } catch (error) {
      console.log(error);
    }
    {
    }
  }, // donde guarda el archivo
  borrar: async (req, res) => {
    const { id } = req.params;
    try {
      const productosModificados = products.filterOne({ where: { id: +id } });

      await products.destroy({
        where: { id: +id },
      });

      return res.send(productosModificados);
    } catch (error) {
      console.log(error);
    } //borrar el producto
  },
};

module.exports = productsControllers;
