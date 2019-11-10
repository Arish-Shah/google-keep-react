import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { addNote } from '../../store/actions'

const StyledForm = styled.form`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);
  overflow: hidden;
  border: 0.5px solid var(--border);
  box-shadow: var(--shadow);

  * {
    border: none;
    color: var(--color);
    background: var(--background);
  }
`

const StyledTitle = styled.input`
  font-weight: 500;
  padding: 0.75rem 1rem;
  font-size: 1rem;
`

const StyledContent = styled.div`
  resize: none;
  font-weight: 400;
  font-size: 1rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  max-height: 100vh;
  line-height: 1.5;
`

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
`

const _id = () =>
  '_' +
  Math.random()
    .toString(36)
    .substr(2, 9)

const OpenAddNote = ({ handleClose, onAddNote }) => {
  const contentRef = React.createRef()

  useEffect(() => {
    contentRef.current.focus()
  }, [contentRef])

  const handleSubmit = event => {
    event.preventDefault()

    const id = _id()
    const title = event.target[0].value.trim()
    const content = contentRef.current.textContent.trim()

    if (!content) return

    onAddNote({
      id,
      title,
      content,
    })
    handleClose()
  }

  const handleKeyUp = event => {
    if (event.keyCode === 27) handleClose()
  }

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
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onAddNote: note => dispatch(addNote(note)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(OpenAddNote)
