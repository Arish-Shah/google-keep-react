import * as actionTypes from './actionTypes';

const initialState = {
  notes: null,
  selectedNote: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_NOTES: {
      return {
        ...state,
        notes: action.notes,
      };
    }

    case actionTypes.SELECT_NOTE: {
      return {
        ...state,
        selectedNote: action.note,
      };
    }

    case actionTypes.REMOVE_SELECT_NODE: {
      return {
        ...state,
        selectedNote: null,
      };
    }

    default:
      return state;
  }
};

export default reducer;
