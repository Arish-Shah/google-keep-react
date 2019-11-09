import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Masonry from 'react-masonry-component'

import Note from './Note'
import { selectNode } from '../../store/actions'

const masonryOptions = {
  isFitWidth: window.innerWidth > 550 ? true : false,
  gutter: 10,
  transitionDuration: '0.2s',
}

const Container = styled.div`
  padding: 2rem 0;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 1.25rem 0;
  }
`

const Notes = ({ notes, onEditNote }) => {
  const handleClick = note => {
    onEditNote(note)
  }

  return (
    <Container>
      <Masonry options={masonryOptions} style={{ margin: '0 auto' }}>
        {notes.map(note => (
          <Note key={note.id} details={note} onClick={handleClick} />
        ))}
      </Masonry>
    </Container>
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
