import * as actionTypes from './actionTypes';
import { reverseObject } from '../utils/reverseObject';
import axios from '../axios-notes';

//Init Note action
export const initNotes = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/notes.json');
      let data = await response.data;
      data = reverseObject(data);
      dispatch(initNotesSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initNotesSuccess = notes => {
  return {
    type: actionTypes.INIT_NOTES,
    notes,
  };
};

//Add Note Action
export const addNote = note => {
  return async dispatch => {
    try {
      await axios.post('/notes.json', note);
      dispatch(initNotes());
    } catch (error) {
      console.log(error);
    }
  };
};

//Select Note Actions
export const selectNote = note => {
  return {
    type: actionTypes.SELECT_NOTE,
    note,
  };
};

export const removeSelectedNote = () => {
  return {
    type: actionTypes.REMOVE_SELECT_NODE,
  };
};

//Update Note Actions
export const updateNote = note => {
  return async dispatch => {
    const name = note.name;
    const updatedNote = {
      title: note.title,
      content: note.content,
      timestamp: note.timestamp,
    };
    try {
      await axios.put(`/notes/${name}.json`, updatedNote);
      dispatch(initNotes());
    } catch (error) {
      console.log(error);
    }
  };
};

//Delete Note Actions
export const deleteNote = name => {
  return async dispatch => {
    try {
      await axios.delete(`/notes/${name}.json`);
      dispatch(initNotes());
    } catch (error) {
      console.log(error);
    }
  };
};
