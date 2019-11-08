import React from 'react'
import styled from 'styled-components'

const StyledClosedAddNote = styled.div`
  border: 0.5px solid var(--border);
  padding: 0.75rem 1rem;
  font-weight: 500;
  border-radius: var(--radius);
  background: var(--background);
  box-shadow: var(--shadow);
`

const ClosedAddNote = ({ handleClose }) => {
  return (
    <StyledClosedAddNote
      onClick={handleClose}
      contentEditable={true}
      placeholder="Take a note..."
    />
  )
}

export default ClosedAddNote
