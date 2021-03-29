const express = require('express');
const router = express.Router();
const Note = require('../models/noteModels');

//------------Here is the backend where you can enter data -----------------
router.route('/create').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const gender = req.body.gender;
  const system = req.body.system;
  const newNote = new Note({
    name,
    email,
    gender,
    system,
  });
  newNote.save();
});

//-----------Here is the backend where you can see recived data
router.route('/notes').get((req, res) => {
  Note.find().then((foundNotes) => res.json(foundNotes));
});

module.exports = router;
