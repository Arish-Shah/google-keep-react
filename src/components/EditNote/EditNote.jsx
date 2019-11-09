import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { removeSelectedNode } from '../../store/actions'
import { StyledBackdrop, StyledModal, Footer } from './StyledEditNote'

const EditNote = ({ selectedNote, onRemoveSelectedNote }) => {
  const contentRef = React.createRef()

  useEffect(() => {
    contentRef.current.focus()
  }, [contentRef])

  const handleSubmit = event => {
    event.preventDefault()
  }

  if (selectedNote) document.body.classList.add('fixed')
  else document.body.classList.remove('fixed')

  let show = selectedNote ? true : false

  return (
    <>
      <StyledBackdrop
        onClick={onRemoveSelectedNote}
        show={show}
      ></StyledBackdrop>
      <StyledModal onSubmit={handleSubmit} show={show}>
        <input type="text" placeholder="Title" />
        <div
          ref={contentRef}
          contentEditable={true}
          placeholder="Note"
          className="textarea"
        />
        <Footer>
          <button type="reset" onClick={onRemoveSelectedNote}>
            Close
          </button>
        </Footer>
      </StyledModal>
    </>
  )
}

const mapStateToProps = state => {
  return {
    selectedNote: state.selectedNote,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRemoveSelectedNote: () => dispatch(removeSelectedNode()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNote)
