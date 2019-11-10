import React from 'react'
import styled from 'styled-components'

const StyledNote = styled.div`
  position: relative;
  cursor: default;
  padding: 0.75rem 1rem 1.25rem 1rem;
  min-height: 6rem;
  height: auto;
  width: 15rem;
  white-space: pre-wrap;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--background);
  margin-bottom: 0.5rem;

  @media (max-width: 550px) {
    width: 100%;
  }
`

const StyledHeading = styled.h4`
  font-weight: 500;
  padding-bottom: 0.5rem;
`

const Note = ({ details, onClick }) => {
  return (
    <StyledNote onClick={() => onClick(details)}>
      {details.title && <StyledHeading>{details.title}</StyledHeading>}
      {details.content && <p>{details.content}</p>}
    </StyledNote>
  )
}

export default Note
