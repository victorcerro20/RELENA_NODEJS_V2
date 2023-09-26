const Comment = require('../models/commentModel');

class DatabaseService {
  static async saveComment(text, classification) {
    try {
      const [result] = await Comment.create(text, classification);
      return result;
    } catch (error) {
      console.error('Error al guardar el comentario en la base de datos:', error.message);
      throw error;
    }
  }
}

module.exports = DatabaseService;
