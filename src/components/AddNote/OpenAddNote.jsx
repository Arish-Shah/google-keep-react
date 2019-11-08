import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

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
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  max-height: 100vh;
  line-height: 1.5;
`

const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;

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

    &.add-button {
      color: var(--background);
      background: var(--color);
    }
  }
`

const OpenAddNote = ({ handleOpen, addNewNote }) => {
  const [content, setContent] = useState('')
  const contentRef = React.createRef()

  useEffect(() => {
    contentRef.current.focus()
  }, [contentRef])

  const handleSubmit = event => {
    event.preventDefault()
    const titleText = event.target[0].value.trim()
    const contentText = content.trim()

    if (!contentText) return
    addNewNote({ title: titleText, content: contentText })
    handleOpen()
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTitle placeholder="Title" />
      <StyledContent
        contentEditable={true}
        ref={contentRef}
        placeholder="Take a note..."
        value={content}
        onInput={e => setContent(e.currentTarget.textContent)}
      />
      <StyledFooter>
        <button type="reset" onClick={handleOpen}>
          Close
        </button>
        <button type="submit" className="add-button">
          Add
        </button>
      </StyledFooter>
    </StyledForm>
  )
}

export default OpenAddNote
