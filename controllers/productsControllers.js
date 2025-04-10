const { Product , Imagen } = require('../db/database/models');

const productsControllers =
{

  products: async (req, res) => {
    try {
      let roll = await Product.findAll({ where: { categoriaId: 1 } });
      let niguiri = await Product.findAll({ where: { categoriaId: 2 } });

      console.log("roll: ",roll)
      console.log("niguiri: ",niguiri)
      return res.render("productos/productos", {
        niguiri,
        roll,Imagen
      })
    }
    catch (error) {
      console.log(error)
    }
  },

  agregar: (req, res) => {
    return res.render("productos/productsCrear", {
      product,
      categorias
    })
  }, //crear el producto atraves del formulario


  detalle: async (req, res) => {
    const id = req.params.id;
    try {
      const product = await Product.findByPk(id, {include:[{model: Imagen, as:'images'}]});

      const imagen = product.images ? product.images.nombre : "default-image.png";
      return res.render('productos/productosDetalles', {
        imagen,
        ...product.dataValues,
      
      });
    }
    catch (error) {
      console.log(error)
    }
  }, //detalle del producto la parte que se ve solo

  crear: async (req, res) => {
    try {
      const { nombre, descripcion, piezas, precio, categoria } = req.body

      const nuevoProducto = {
        id: products[products.length - 1].id + 1,
        nombre: nombre.trim(),
        descripcion: descripcion.trim(),
        piezas: +piezas,
        precio: +precio,
        imagen: "default-image.png",
        categoria
      }

      await products.create(nuevoProducto)


      return res.redirect('/productos/detalle/' + nuevoProducto.id)
    }
    catch (error) {
      console.log(error)
    }


  }, //guardar producto parte de administrador

  editar: async (req, res) => {
    const { id } = req.params
    try {

      const product = products.findByPk({ id })

      return res.render('productos/productosEditar', {
        categorias,
        ...product
      })
    }
    catch (error) {
      console.log(error)
    }
  },  //editar producto parte de administrador
  update: async (req, res) => {
    try {

      const { nombre, descripcion, piezas, precio, categoria } = req.body

      const productosModificados = await products.findAll(product => {
        if (product.id === +req.params.id) {
          product.nombre = nombre.trim();
          product.descripcion = descripcion.trim();
          product.piezas = +piezas;
          product.precio = +precio;
          product.categoria = categoria;
        }
        return products;
      })

      await products.update(productosModificados, {
        where: { id: +req.params.id }
      })

      return res.redirect('admin')
    }
    catch (error) {
      console.log(error)
    }
    {

    }
  }, // donde guarda el archivo
  borrar: async (req, res) => {
    const { id } = req.params;
    try {
      const productosModificados = products.filterOne({ where: { id: +id } })


      await products.destroy({
        where: { id: +id }
      })

      return res.send(productosModificados)
    }
    catch (error) {
      console.log(error)
    } //borrar el producto
  }
};


module.exports = productsControllers; 