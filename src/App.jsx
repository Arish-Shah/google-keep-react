import React, { useState } from 'react'

import Topbar from './components/Topbar'
import AddNote from './components/AddNote'
import Notes from './components/Notes/Notes'

import { _id } from './utils/_id'

const App = () => {
  const [notes, setNotes] = useState([])

  const addNote = newNote => {
    const updatedNotes = [...notes]
    updatedNotes.push({
      id: _id(),
      ...newNote,
    })
    setNotes(updatedNotes)
  }

  return (
    <div className="App">
      <Topbar />
      <AddNote addNote={addNote} />
      <Notes notes={notes} />
    </div>
  )
}

export default App
