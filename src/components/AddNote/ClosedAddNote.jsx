import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`

const StyledClosedAddNote = styled.div`
  border: 0.5px solid var(--border);
  padding: 0.75rem 1rem;
  font-weight: 500;
  border-radius: var(--radius);
  background: var(--background);
  box-shadow: var(--shadow);
  cursor: text;
`

const Add = styled.span`
  position: absolute;
  font-size: 1.5rem;
  width: 1.35rem;
  height: 1.35rem;
  line-height: 0.65;
  text-align: center;
  color: var(--image);
  border: 1.5px solid var(--image);
  border-radius: 3px;
  top: 0.75rem;
  right: 0.75rem;
  cursor: pointer;

  &:hover {
    color: var(--color);
    border-color: var(--color);
  }
`

const ClosedAddNote = ({ handleOpen }) => {
  return (
    <Container onClick={handleOpen}>
      <StyledClosedAddNote
        contentEditable={true}
        placeholder="Take a note..."
      />
      <Add>+</Add>
    </Container>
  )
}

export default ClosedAddNote
