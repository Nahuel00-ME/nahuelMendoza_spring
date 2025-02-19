
const fs = require('fs');
const path = require('path');
const {readFile,readJson,saveJson } = require('../util/fileSystem');
const product = require("../db/sushi.json");
const categorias = require("../db/categorias.json");

const productsControllers =
 {

products :(req, res)=> {
  let niguiri = product.filter(product => product.categoria === 'niguiri');
  let roll = product.filter(product => product.categoria === 'roll');

   return res.render("productos/productos", {
    product,
    roll,
    niguiri,
    categorias})
},

crear :(req, res)=> {
  return  res.render ("productos/productsCrear" ,{
    product,
    categorias
  })
 }, //crear el producto atraves del formulario


detalle :(req, res) => {
  const products = readJson("../db/sushi.json")
  const product = products.find(product => product.id === +req.params.id)

     return res.render('productos/productosDetalles', {
      ...product,
         categorias});
}, //detalle del producto la parte que se ve solo

guardar :(req,res) =>{
  const products = readJson('../db/sushi.json')
  const {nombre,descripcion,piezas,precio,imagen,categoria} = req.body

  const nuevoProducto = {
      id : products[products.length - 1].id + 1,
      nombre : nombre.trim(),
      descripcion : descripcion.trim(),
      piezas : +piezas,
      precio : +precio,
      imagen : "default-image.png",
      categoria
  }

  products.push(nuevoProducto)

  saveJson('./db/sushi.Json',products)

  return res.redirect('/productos/detalle/' + nuevoProducto.id)


}, //guardar producto parte de administrador

editar :(req,res) =>{
  const {id} = req.params
        const products = readFile('sushi.json')
        const categories = readFile('categorias.json')

        const product = products.find(product => product.id === +id)

        return res.render('productos/productosEditar',{
            categories,
          ...products})
},  //editar producto parte de administrador
update :(req,res) =>{
  const {id} = req.params
  const products = readFile('sushi.json')
  const {nombre,descripcion,piezas,precio,categoria} = req.body

  const productosModificados = products.map(product =>{
            if(product.id === +req.params.id){
              product.nombre = nombre.trim();
              product.descripcion = descripcion.trim();
              product.piezas = +piezas;
              product.precio = +precio;
              product.categoria = categoria;
          }
          return products;
          })
  
  saveJson('sushi.Json',productosModificados)

  return res.redirect('/admin')
}, // donde guarda el archivo
borrar :(req,res) =>{
  const products = readfile('sushi.json');
  const {id} = req.params;

  const productosModificados = products.filter(product => product.id !== +id)

  saveJson('sushi.json',productosModificados)

  return res.redirect('/admin')

} //borrar el producto

};

module.exports = productsControllers; 