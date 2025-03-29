const { Product, Category } = require("../db/database/models");

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

  agregar: (req, res) => {
    return res.render("productos/productsCrear", {
      categorias,
    });
  }, //crear el producto atraves del formulario

  detalle: async (req, res) => {
    try {
      const [product, categories] = await Promise.all([
        Product.findByPk(req.params.id),
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
      const { nombre, descripcion, piezas, precio, categoria } = req.body;

      const nuevoProducto = {
        id: products[products.length - 1].id + 1,
        nombre: nombre.trim(),
        descripcion: descripcion.trim(),
        piezas: +piezas,
        precio: +precio,
        imagen: "default-image.png",
        categoria,
      };

      await products.create(nuevoProducto);

      return res.redirect("/productos/detalle/" + nuevoProducto.id);
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
