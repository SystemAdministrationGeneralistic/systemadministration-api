const express = require('express');
const router = express.Router();
const { validateFields } = require('../middleware/validatorMiddleware');
const saleController = require('../controller/saleController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { body } = require('express-validator');

// router.use(authenticateToken);

router.get('/', saleController.getAllsale);

router.get('/:id', saleController.getsaleById);
router.post('/', saleController.createsale);
router.put('/', saleController.updatesale);
router.delete('/:id', saleController.deletesale);
// router.get('/',[
//     body('nombre').notEmpty().withMessage('El campo nombre no puede estar vacío'),
//     body('descripcion').isLength({ min: 5 }).withMessage('La descripción debe tener al menos 5 caracteres'),
//     // Agrega más validaciones según tus necesidades
//   ],
//   validateFields, saleosController.getAllExamples);

module.exports = router;