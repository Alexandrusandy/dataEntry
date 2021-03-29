const mongoose = require('mongoose');

const notesSchema = {
  name: String,
  email: String,
  gender: String,
  system: String,
};

const Note = mongoose.model('Note', notesSchema);

module.exports = Note;
