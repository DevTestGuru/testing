// Note "model" using a class
class Note {
  constructor({ id, title, content }) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Note;
