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
  const [content, setContent] = useState('')

  useEffect(() => {
    if (selectedNote) {
      //cursor to the end of div
      contentRef.current.focus()

      setTitle(selectedNote.title)
      setContent(selectedNote.content)

      document.body.classList.add('fixed')
    } else {
      document.body.classList.remove('fixed')
    }
  }, [selectedNote, contentRef])

  const handleKeyUp = event => {
    if (event.keyCode === 27) onRemoveSelectedNote()
  }

  const handleDelete = () => {
    onDeleteNote(selectedNote.id)
    onRemoveSelectedNote()
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (title.trim() !== '' || contentRef.current.textContent.trim() !== '')
      onUpdateNote({
        id: selectedNote.id,
        title,
        content: contentRef.current.textContent,
      })

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
            html={content}
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
    onDeleteNote: id => dispatch(deleteNote(id)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(EditNote)
