const langchain = require('langchain');
const { LangchainError } = require('langchain');

class LangchainService {
  constructor(apiKey) {
    this.client = new langchain.Client(apiKey);
  }

  async classifyComment(commentText) {
    try {
      const classification = await this.client.classify(commentText);
      return classification;
    } catch (error) {
      if (error instanceof LangchainError) {
        console.error('Error de Langchain:', error.message);
      } else {
        console.error('Error inesperado:', error.message);
      }
      return null;
    }
  }
}

module.exports = LangchainService;
