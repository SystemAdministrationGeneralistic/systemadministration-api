const express = require('express');
const router = express.Router();
const { validateFields } = require('../middleware/validatorMiddleware');
const supplierController = require('../controller/supplierController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { body } = require('express-validator');

// router.use(authenticateToken);

router.get('/', supplierController.getAllsupplier);

router.get('/:id', supplierController.getsupplierById);
router.post('/', supplierController.createsupplier);
router.put('/', supplierController.updatesupplier);
router.delete('/:id', supplierController.deletesupplier);
// router.get('/',[
//     body('nombre').notEmpty().withMessage('El campo nombre no puede estar vacío'),
//     body('descripcion').isLength({ min: 5 }).withMessage('La descripción debe tener al menos 5 caracteres'),
//     // Agrega más validaciones según tus necesidades
//   ],
//   validateFields, supplierosController.getAllExamples);

module.exports = router;