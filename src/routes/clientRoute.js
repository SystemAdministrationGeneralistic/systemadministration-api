const express = require('express');
const router = express.Router();
const { validateFields } = require('../middleware/validatorMiddleware');
const clientController = require('../controller/clientController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { body } = require('express-validator');

 //router.use(authenticateToken);

router.get('/', clientController.getAllclient);
router.get('/:id', clientController.getclientById);
router.post('/', clientController.createclient);
router.put('/', clientController.updateclient);
router.delete('/:id', clientController.deleteclient);
// router.get('/',[
//     body('nombre').notEmpty().withMessage('El campo nombre no puede estar vacío'),
//     body('descripcion').isLength({ min: 5 }).withMessage('La descripción debe tener al menos 5 caracteres'),
//     // Agrega más validaciones según tus necesidades
//   ],
//   validateFields, clientosController.getAllExamples);

module.exports = router;