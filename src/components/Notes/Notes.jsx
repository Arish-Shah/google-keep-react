import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Masonry from 'react-masonry-component'

import Note from './Note'
import { selectNote } from '../../store/actions'

const masonryOptions = {
  isFitWidth: window.innerWidth > 550 ? true : false,
  gutter: 10,
  transitionDuration: '150ms',
}

const Container = styled.div`
  padding: 2rem 0;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 1.25rem 0;
  }
`

const Spinner = styled.div`
  height: 4rem;
  width: 4rem;
  border: 0.4rem solid var(--background);
  border-top-color: var(--color);
  border-radius: 100rem;
  animation: rotate 1s infinite ease-in-out;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Notes = ({ notes, onEditNote }) => {
  const handleClick = note => {
    onEditNote(note)
  }

  let displayContent = <Spinner />

  if (notes) {
    const indices = Object.keys(notes)
    displayContent = indices.map(index => (
      <Note
        key={index}
        name={index}
        details={notes[index]}
        onClick={handleClick}
      />
    ))
  }

  return (
    <Container>
      <Masonry options={masonryOptions} style={{ margin: '0 auto' }}>
        {displayContent}
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
    onEditNote: note => dispatch(selectNote(note)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes)
