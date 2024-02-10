const express = require('express');
const router = express.Router();
const { validateFields } = require('../middleware/validatorMiddleware');
const categoryController = require('../controller/categoryController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { body } = require('express-validator');

 //router.use(authenticateToken);

router.get('/', categoryController.getAllcategory);
router.get('/:id', categoryController.getcategoryById);
router.post('/', categoryController.createcategory);
router.put('/', categoryController.updatecategory);
router.delete('/:id', categoryController.deletecategory);
// router.get('/',[
//     body('nombre').notEmpty().withMessage('El campo nombre no puede estar vacío'),
//     body('descripcion').isLength({ min: 5 }).withMessage('La descripción debe tener al menos 5 caracteres'),
//     // Agrega más validaciones según tus necesidades
//   ],
//   validateFields, categoryosController.getAllExamples);

module.exports = router;