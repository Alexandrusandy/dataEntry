import React, { useEffect, useState } from 'react';
import './Notes.css';

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      name: '',
      email: '',
      gender: '',
      system: '',
    },
  ]);

  useEffect(() => {
    fetch('/notes')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setNotes(jsonRes));
  });

  return (
    <div className='container '>
      <h1>Notes Page</h1>

      {notes.map((note) => (
        <div className='noteStyle'>
          <h3>
            Name: {note.name}, Email:{note.email}
          </h3>

          <p>
            Gender:{note.gender}, Operation System: {note.system}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Notes;
