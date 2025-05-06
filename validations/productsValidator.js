const { check } = require('express-validator');

// Validaciones para el modelo Product
const productValidation = [
  check('name')
    .not().isEmpty().withMessage('El nombre del producto no puede estar vacío')
    .isLength({ min: 3, max: 100 }).withMessage('El nombre debe tener entre 3 y 100 caracteres'),
  
  check('price')
    .not().isEmpty().withMessage('El precio es requerido')
    .isInt().withMessage('El precio debe ser un número entero')
    .isNumeric().withMessage('El precio debe ser un número válido')
    .custom(value => value >= 0).withMessage('El precio no puede ser negativo'),
  
  check('pieces')
    .not().isEmpty().withMessage('La cantidad es requerida')
    .isInt().withMessage('La cantidad debe ser un número entero')
    .custom(value => value >= 0).withMessage('La cantidad no puede ser negativa'),
  
  check('description')
    .optional()
    .isLength({ max: 500 }).withMessage('La descripción debe tener entre 20 y 500 caracteres'),
  
  check('image')
    .optional()
    .isURL().withMessage('La imagen debe ser una URL válida'),
  
  check('categoryId')
    .not().isEmpty().withMessage('La categoría es requerida')
    .isInt().withMessage('El ID de categoría debe ser un número entero'),
  
  check('sectionId')
    .not().isEmpty().withMessage('La sección es requerida')
    .isInt().withMessage('El ID de sección debe ser un número entero'),
];

module.exports = productValidation; 