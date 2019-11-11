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
      console.log(`Updating note: ${action.note.name}`)
      return state
    }

    case actionTypes.DELETE_NOTE: {
      console.log(`Deleting note: ${action.name}`)
      return state
    }

    default:
      return state
  }
}

export default reducer
