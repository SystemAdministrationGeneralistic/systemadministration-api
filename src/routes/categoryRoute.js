const express = require('express');
const router = express.Router();
const { validateFields } = require('../middleware/validatorMiddleware');
const categoryController = require('../controller/categoryController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { body, check} = require('express-validator');

 //router.use(authenticateToken);

router.get('/', categoryController.getAllcategory);
router.get('/:id', categoryController.getcategoryById);
router.post('/',[
        body().notEmpty().withMessage('El campo nombre no puede estar vacío'), 
        check('name').not().isNumeric().withMessage('El campo no puede ser un número'),            
      ], validateFields, categoryController.createcategory)
router.put('/',[  body('name').notEmpty().withMessage('El campo nombre no puede estar vacío'), 
      check('name').not().isNumeric().withMessage('El campo no puede ser un número'),              
      ], validateFields, categoryController.updatecategory);
router.delete('/:id', categoryController.deletecategory);
// router.get('/',[
//     body('nombre').notEmpty().withMessage('El campo nombre no puede estar vacío'),
//     body('descripcion').isLength({ min: 5 }).withMessage('La descripción debe tener al menos 5 caracteres'),
//     // Agrega más validaciones según tus necesidades
//   ],
//   validateFields, categoryosController.getAllExamples);

module.exports = router;