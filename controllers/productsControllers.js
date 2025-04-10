<<<<<<< HEAD
const { Product , Imagen } = require('../db/database/models');

const productsControllers =
{
=======
const { Product, Category, Ingredient, Section, ProductIngredient } = require("../db/database/models");
>>>>>>> 6b344dfae3b31c1d4029edbcecf822fbd7bf128d

const productsControllers = {
  products: async (req, res) => {
    try {
      let roll = await Product.findAll({ where: { categoryId: 2 } });
      let niguiri = await Product.findAll({ where: { categoryId: 1 } });

      return res.render("productos/productos", {
        niguiri,
<<<<<<< HEAD
        roll,Imagen
      })
    }
    catch (error) {
      console.log(error)
=======
        roll,
      });
    } catch (error) {
      console.log(error);
>>>>>>> 6b344dfae3b31c1d4029edbcecf822fbd7bf128d
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
    const id = req.params.id;
    try {
<<<<<<< HEAD
      const product = await Product.findByPk(id, {include:[{model: Imagen, as:'images'}]});

      const imagen = product.images ? product.images.nombre : "default-image.png";
      return res.render('productos/productosDetalles', {
        imagen,
        ...product.dataValues,
      
=======
      const [product, categories] = await Promise.all([
        Product.findByPk(req.params.id,{
          include : ['ingredients']
        }),
        Category.findAll()
      ]) 

      return res.render("productos/productosDetalles", {
        ...product.dataValues,
        categories,
>>>>>>> 6b344dfae3b31c1d4029edbcecf822fbd7bf128d
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

      const [categories, sections, ingredientsDB, product] = await Promise.all([
        Category.findAll(),
        Section.findAll(),
        Ingredient.findAll(),
        Product.findByPk(id,{
          include : ['ingredients']
        })
      ]) 

      return res.render("productos/productosEditar", {
        ...product.dataValues,
        categories,
        sections,
        ingredientsDB
      });
    } catch (error) {
      console.log(error);
    }
  }, //editar producto parte de administrador
  update: async (req, res) => {
    try {
      const { name, description, pieces, price, categoryId, sectionId, ingredients } = req.body;
      
      const product = await Product.findByPk(req.params.id)
      
      await Product.update(
        {
          name : name.trim(),
          description : description.trim(),
          pieces,
          price,
          categoryId,
          sectionId,
          image : req.file ? req.file.filename : product.image
        },{
          where : {
            id : req.params.id
          }
        }
      )

      if(ingredients){
        const ingredientsIds = Array.isArray(ingredients) ? ingredients : [ingredients]
       await product.setIngredients(ingredientsIds);
      }
      return res.redirect("/adm/products");


    } catch (error) {
      console.log(error);
    }

  }, // donde guarda el archivo
  borrar: async (req, res) => {
    const { id } = req.params;
    try {

      await ProductIngredient.destroy({
        where : {
          productId : id
        }
      })

      await Product.destroy({
        where: { id: +id },
      });

      return res.redirect("/adm/products");

    } catch (error) {
      console.log(error);
    } //borrar el producto
  },
};

module.exports = productsControllers;
