import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { addNote } from '../../store/actions';

const StyledForm = styled.form`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);

  * {
    border: none;
    color: var(--color);
    background: var(--background);
  }
`;

const StyledTitle = styled.input`
  font-weight: 500;
  padding: 0.75rem 1rem;
  font-size: 1rem;
`;

const StyledContent = styled.div`
  resize: none;
  font-weight: 400;
  font-size: 1rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  max-height: 100vh;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;

  button {
    cursor: pointer;
    color: var(--color);
    margin-left: 0.5rem;
    padding: 0.4rem 1.25rem;
    border-radius: 4px;
    font-weight: 500;

    &:hover {
      background-color: rgba(255, 255, 255, 0.025);
    }

    &[type='submit'] {
      background: var(--color);
      color: var(--background);
    }
  }
`;
const OpenAddNote = ({ handleClose }) => {
  const dispatch = useDispatch();
  const contentRef = React.createRef();

  useEffect(() => {
    contentRef.current.focus();
  }, [contentRef]);

  const handleSubmit = event => {
    event.preventDefault();

    const title = event.target[0].value.trim();
    const content = contentRef.current.textContent.trim();

    if (!content) return;

    dispatch(
      addNote({
        timestamp: new Date().valueOf(),
        title,
        content,
      })
    );
    handleClose();
  };

  const handleKeyUp = event => {
    if (event.keyCode === 27) handleClose();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTitle placeholder="Title" />
      <StyledContent
        ref={contentRef}
        placeholder="Take a note..."
        contentEditable={true}
        onKeyUp={handleKeyUp}
      />
      <StyledFooter>
        <button type="reset" onClick={handleClose}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </StyledFooter>
    </StyledForm>
  );
};

export default OpenAddNote;
