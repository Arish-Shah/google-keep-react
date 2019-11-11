import * as actionTypes from './actionTypes'
import axios from '../axios-notes'

//Init Note action
export const initNotes = () => {
  return async dispatch => {
    const response = await axios.get('/notes.json')
    const data = await response.data
    dispatch(initNotesSuccess(data))
  }
}

const initNotesSuccess = notes => {
  return {
    type: actionTypes.INIT_NOTES,
    notes,
  }
}

//Add Note action
export const addNote = note => {
  return async dispatch => {
    await axios.post('/notes.json', note)
    dispatch(initNotes())
  }
}

export const selectNote = note => {
  return {
    type: actionTypes.SELECT_NOTE,
    note,
  }
}

export const removeSelectedNote = () => {
  return {
    type: actionTypes.REMOVE_SELECT_NODE,
  }
}

//Update Note Actions
export const updateNote = note => {
  return async dispatch => {
    const name = note.name
    const updatedNote = {
      title: note.title,
      content: note.content,
      timestamp: note.timestamp,
    }
    await axios.put(`/notes/${name}.json`, updatedNote)
    dispatch(initNotes())
  }
}

//Delete Note Actions
export const deleteNote = name => {
  return async dispatch => {
    await axios.delete(`/notes/${name}.json`)
    dispatch(initNotes())
  }
}
