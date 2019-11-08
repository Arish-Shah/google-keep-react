import * as actionTypes from './actionTypes'

export const initNotes = () => {
  return {
    type: actionTypes.INIT_NOTES,
  }
}

export const addNote = note => {
  return {
    type: actionTypes.ADD_NOTE,
    note,
  }
}

export const selectNode = note => {
  return {
    type: actionTypes.SELECT_NOTE,
    note,
  }
}

export const deleteNote = id => {
  return {
    type: actionTypes.DELETE_NOTE,
    id,
  }
}
