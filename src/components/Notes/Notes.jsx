import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Note from './Note'
import { selectNode } from '../../store/actions'

const StyledNotes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  width: 100%;
  padding: 2rem 1rem;
  max-width: 860px;
  margin: 0 auto;
`

const Notes = ({ notes, onEditNote }) => {
  return (
    <StyledNotes>
      {notes.map(note => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
        />
      ))}
    </StyledNotes>
  )
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditNote: note => dispatch(selectNode(note)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes)
