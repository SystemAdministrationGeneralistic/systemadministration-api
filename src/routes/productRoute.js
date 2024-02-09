const express = require('express');
const router = express.Router();
const { validateFields } = require('../middleware/validatorMiddleware');
const productController = require('../controller/productController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { body } = require('express-validator');

// router.use(authenticateToken);

router.get('/', productController.getAllProduct);

router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/', productController.updateProduct);
router.delete('/', productController.deleteProduct);
// router.get('/',[
//     body('nombre').notEmpty().withMessage('El campo nombre no puede estar vacío'),
//     body('descripcion').isLength({ min: 5 }).withMessage('La descripción debe tener al menos 5 caracteres'),
//     // Agrega más validaciones según tus necesidades
//   ],
//   validateFields, productosController.getAllExamples);

module.exports = router;