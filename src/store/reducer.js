import * as actionTypes from './actionTypes'

const initialState = {
  notes: [
    { id: '_fkalf9fa', title: 'Hello', content: 'This is a test message' },
    {
      id: '_arish',
      title: 'Another Post per se',
      content: '',
    },
    {
      id: '_frahil',
      title: 'Hello',
      content:
        'This is a test message, This is a test message, This is a test message, This is a test message, This is a test message, This is a test message, This is a test message, This is a test message, This is a test message, This is a test message',
    },
    { id: '_shah', title: 'Hello', content: 'This is a test message' },
    { id: '_dfakdsjflk', title: 'Hello', content: 'This is a test message' },
  ],
  selectedNote: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_NOTES: {
      if (localStorage.getItem('notes')) {
        const updatedNotes = JSON.parse(localStorage.getItem('notes'))
        return {
          ...state,
          notes: updatedNotes,
        }
      } else return state
    }

    case actionTypes.ADD_NOTE: {
      const updatedNotes = [...state.notes]
      updatedNotes.unshift(action.note)
      //localStorage.setItem('notes', JSON.stringify(updatedNotes))
      return {
        ...state,
        notes: updatedNotes,
      }
    }

    case actionTypes.SELECT_NOTE: {
      return {
        ...state,
        selectedNote: action.note,
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
