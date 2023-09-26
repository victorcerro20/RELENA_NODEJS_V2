const LangchainService = require('../services/langchainService');
const DatabaseService = require('../services/databaseService');

class CommentController {
  static async createComment(req, res) {
    const { text } = req.body;

    // Clasificar el comentario usando Langchain
    const langchainService = new LangchainService(process.env.LANGCHAIN_API_KEY);
    const classification = await langchainService.classifyComment(text);

    if (!classification) {
      return res.status(500).json({ error: 'Error al clasificar el comentario.' });
    }

    // Guardar el comentario y su clasificación en la base de datos
    const savedComment = await DatabaseService.saveComment(text, classification);

    res.status(201).json(savedComment);
  }

  static async getAllComments(req, res) {
    try {
      const [comments] = await Comment.getAll();
      res.status(200).json(comments);
    } catch (error) {
      console.error('Error al obtener los comentarios:', error.message);
      res.status(500).json({ error: 'Error al obtener los comentarios.' });
    }
  }
}

module.exports = CommentController;
