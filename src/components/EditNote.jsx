import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContentEditable from 'react-contenteditable';

import { StyledBackdrop, StyledModal, Footer } from '../styles/EditNote';
import { removeSelectedNote, updateNote, deleteNote } from '../store/actions';

const EditNote = ({ isOpen, selectedNote }) => {
  const contentRef = React.createRef();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [localeTime, setLocaleTime] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedNote) {
      //For bringing cursor to the end
      contentRef.current.focus();
      document.execCommand('selectAll', false, null);
      document.getSelection().collapseToEnd();

      //Setting states
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
      setLocaleTime(getLocaleTime(selectedNote.timestamp));

      document.body.classList.add('fixed');
    } else {
      document.body.classList.remove('fixed');
    }
  }, [selectedNote]); // eslint-disable-line

  const handleKeyUp = event => {
    if (event.keyCode === 27) dispatch(removeSelectedNote());
    setContent(event.target.textContent.trim());
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this Note?')) {
      dispatch(deleteNote(selectedNote.name));
      dispatch(removeSelectedNote());
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      (title !== selectedNote.title || content !== selectedNote.content) &&
      (title.trim() !== '' || content !== '')
    ) {
      dispatch(
        updateNote({
          name: selectedNote.name,
          title,
          content,
          timestamp: new Date().valueOf(),
        })
      );
    }

    dispatch(removeSelectedNote());
  };

  const pasteAsPlainText = event => {
    event.preventDefault();

    const text = event.clipboardData.getData('text/plain');
    document.execCommand('insertHTML', false, text);
  };

  const highlightAll = () => {
    document.execCommand('selectAll', false, null);
    document.getSelection().collapseToEnd();
  };

  return (
    isOpen && (
      <>
        <StyledBackdrop
          onClick={() => dispatch(removeSelectedNote())}
        ></StyledBackdrop>
        <StyledModal onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <ContentEditable
            innerRef={contentRef}
            html={content}
            className="textarea"
            onKeyUp={handleKeyUp}
            onFocus={highlightAll}
            onPaste={pasteAsPlainText}
          />
          <Footer>
            <span className="time-stamp">Edited {localeTime}</span>
            <button type="reset" onClick={handleDelete}>
              Delete
            </button>
            <button type="submit">Close</button>
          </Footer>
        </StyledModal>
      </>
    )
  );
};

const getLocaleTime = valueOf => {
  const date = new Date(valueOf);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const monthIndex = date.getMonth();
  const day = date.getDate();

  let hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;

  let minutes = date.getMinutes();
  minutes = minutes > 0 && minutes < 10 ? '0' + minutes : minutes;

  return `${months[monthIndex]} ${day}, ${hours}:${minutes} ${ampm}`;
};

export default EditNote;
