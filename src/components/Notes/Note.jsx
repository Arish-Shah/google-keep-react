import React from 'react'
import styled from 'styled-components'

const StyledNote = styled.div`
  position: relative;
  cursor: default;
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--background);

  &:hover {
    span {
      opacity: 1;
    }
  }

  span {
    top: -0.5rem;
    left: -0.5rem;
    background-color: var(--color);
    color: var(--background);
    font-weight: bold;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50px;
    opacity: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 50ms linear;
  }
`

const Note = ({ id, title, content }) => {
  return (
    <StyledNote>
      <span>✓</span>
      {title && <h3>{title}</h3>}
      {content && <p>{content}</p>}
    </StyledNote>
  )
}

export default Note
