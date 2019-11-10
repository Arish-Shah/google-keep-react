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

export const updateNote = note => {
  return {
    type: actionTypes.UPDATE_NOTE,
    note,
  }
}

export const removeSelectedNote = () => {
  return {
    type: actionTypes.REMOVE_SELECT_NODE,
  }
}

export const deleteNote = id => {
  return {
    type: actionTypes.DELETE_NOTE,
    id,
  }
}
