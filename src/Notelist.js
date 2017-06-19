import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = ({ notes, saveNote, removeNote }) => {
  const update = (ev) => {
    notes.name = ev.target.value
    saveNote(notes)
  }
  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        {Object.keys(notes).map((noteId) => {
          return <Note note={notes[noteId]} key={noteId} />
        })}
      </ul>
      <span className="actions">
        <button 
        className="remove button alert" 
        onClick={() => removeNote(notes)}
        >
          <i
            class="fa fa-trash-o"
            aria-hidden="true"
          ></i>
        </button>
      </span>
    </div>
  )
}

export default NoteList