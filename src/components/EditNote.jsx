import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ContentEditable from 'react-contenteditable'

import { StyledBackdrop, StyledModal, Footer } from '../styles/EditNote'
import { removeSelectedNote, updateNote, deleteNote } from '../store/actions'

const EditNote = ({
  isOpen,
  selectedNote,
  onRemoveSelectedNote,
  onUpdateNote,
  onDeleteNote,
}) => {
  const contentRef = React.createRef()
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (selectedNote) {
      contentRef.current.focus()
      setTitle(selectedNote.title)

      document.body.classList.add('fixed')
    } else {
      document.body.classList.remove('fixed')
    }
  }, [selectedNote]) // eslint-disable-line

  const handleKeyUp = event => {
    if (event.keyCode === 27) onRemoveSelectedNote()
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this Note?')) {
      onDeleteNote(selectedNote.name)
    }
    onRemoveSelectedNote()
  }

  const handleSubmit = event => {
    event.preventDefault()

    let content = contentRef.current.textContent.trim()

    if (
      (title !== selectedNote.title || content !== selectedNote.content) &&
      (title.trim() !== '' || content !== '')
    ) {
      onUpdateNote({
        name: selectedNote.name,
        title,
        content: contentRef.current.textContent,
      })
    }

    onRemoveSelectedNote()
  }

  return (
    isOpen && (
      <>
        <StyledBackdrop onClick={onRemoveSelectedNote}></StyledBackdrop>
        <StyledModal onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <ContentEditable
            innerRef={contentRef}
            html={selectedNote.content}
            className="textarea"
            onKeyUp={handleKeyUp}
          />
          <Footer>
            <button type="reset" onClick={handleDelete}>
              Delete
            </button>
            <button type="submit">Close</button>
          </Footer>
        </StyledModal>
      </>
    )
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onRemoveSelectedNote: () => dispatch(removeSelectedNote()),
    onUpdateNote: note => dispatch(updateNote(note)),
    onDeleteNote: name => dispatch(deleteNote(name)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(EditNote)
