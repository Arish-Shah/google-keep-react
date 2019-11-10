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
