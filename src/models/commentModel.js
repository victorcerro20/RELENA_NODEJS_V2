const db = require('../config/dbConfig');

class Comment {
  constructor(id, text, classification) {
    this.id = id;
    this.text = text;
    this.classification = classification;
  }

  static getAll() {
    return db.execute('SELECT * FROM comments');
  }

  static create(text, classification) {
    return db.execute('INSERT INTO comments (text, classification) VALUES (?, ?)', [
      text,
      classification,
    ]);
  }
}

module.exports = Comment;
