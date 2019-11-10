import * as actionTypes from './actionTypes'

const initialState = {
  notes: null,
  selectedNote: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_NOTES: {
      return {
        ...state,
        notes: action.notes,
      }
    }

    case actionTypes.SELECT_NOTE: {
      return {
        ...state,
        selectedNote: action.note,
      }
    }

    case actionTypes.REMOVE_SELECT_NODE: {
      return {
        ...state,
        selectedNote: null,
      }
    }

    case actionTypes.UPDATE_NOTE: {
      const updatedNotes = [...state.notes]
      const index = updatedNotes.findIndex(note => note.id === action.note.id)
      updatedNotes.splice(index, 1)
      updatedNotes.unshift(action.note)
      return {
        ...state,
        notes: updatedNotes,
      }
    }

    case actionTypes.DELETE_NOTE: {
      const updatedNotes = [...state.notes]
      const index = updatedNotes.findIndex(note => note.id === action.id)
      updatedNotes.splice(index, 1)
      return {
        ...state,
        notes: updatedNotes,
      }
    }
    default:
      return state
  }
}

export default reducer
