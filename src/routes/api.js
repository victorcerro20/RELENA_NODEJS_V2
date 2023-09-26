const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/commentController.js');

// Rutas de la API para comentarios
router.post('/comments', CommentController.createComment);
router.get('/comments', CommentController.getAllComments);

module.exports = router;
