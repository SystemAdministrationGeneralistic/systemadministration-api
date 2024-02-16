const express = require('express');
const router = express.Router();
const { validateFields } = require('../middleware/validatorMiddleware');
const productController = require('../controller/productController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { body,check } = require('express-validator');

// router.use(authenticateToken);
['name','description','cuit','telephone','codArt','supplierId','categoryId']
router.get('/', productController.getAllProduct);

router.get('/:id', productController.getProductById);
router.post('/',[
    body('name').notEmpty().withMessage('El campo no puede estar vacío'), 
    body('description').notEmpty().withMessage('El campo no puede estar vacío'), 
    body('codArt').notEmpty().withMessage('El campo no puede estar vacío'), 
    body('price').notEmpty().withMessage('El campo no puede estar vacío'), 
    body('quantity').notEmpty().withMessage('El campo no puede estar vacío'), 
    body('supplierId').notEmpty().withMessage('El campo no puede estar vacío'), 
    body('categoryId').notEmpty().withMessage('El campo no puede estar vacío'), 
    check('name').not().isNumeric().withMessage('El campo no puede ser un número'), 
    check('description').not().isNumeric().withMessage('El campo no puede ser un número'), 
    check('codArt').isNumeric().withMessage('El campo debe ser un número'),  
    check('price').isNumeric().withMessage('El campo debe ser un número'),   
    check('quantity').isNumeric().withMessage('El campo debe ser un número'),          
  ], validateFields, productController.createProduct);
router.put('/',[
    body('name').notEmpty().withMessage('El campo no puede estar vacío'), 
    body('description').notEmpty().withMessage('El campo no puede estar vacío'), 
    body('codArt').notEmpty().withMessage('El campo no puede estar vacío'), 
    body('price').notEmpty().withMessage('El campo no puede estar vacío'), 
    body('quantity').notEmpty().withMessage('El campo no puede estar vacío'), 
    body('supplierId').notEmpty().withMessage('El campo no puede estar vacío'), 
    body('categoryId').notEmpty().withMessage('El campo no puede estar vacío'), 
    check('name').not().isNumeric().withMessage('El campo no puede ser un número'), 
    check('description').not().isNumeric().withMessage('El campo no puede ser un número'), 
    check('codArt').isNumeric().withMessage('El campo debe ser un número'),  
    check('price').isNumeric().withMessage('El campo debe ser un número'),   
    check('quantity').isNumeric().withMessage('El campo debe ser un número'),         
  ], validateFields, productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
// router.get('/',[
//     body('nombre').notEmpty().withMessage('El campo nombre no puede estar vacío'),
//     body('descripcion').isLength({ min: 5 }).withMessage('La descripción debe tener al menos 5 caracteres'),
//     // Agrega más validaciones según tus necesidades
//   ],
//   validateFields, productosController.getAllExamples);

module.exports = router;