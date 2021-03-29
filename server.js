const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

//------------Here i connect my database ---------------//

mongoose.connect('mongodb+srv://alex:alex123@shop.m712v.mongodb.net/NoteDb', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

app.use('/', require('./routes/noteRoute'));

app.listen(process.env.PORT || 3001, function () {
  console.log(`server is running on port ${process.env.PORT}`);
});
