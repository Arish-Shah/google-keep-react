import React from 'react';
import styled from 'styled-components';

const StyledAddNote = styled.div`
  margin: 0 auto;
  background: var(--lighter-background);
  width: 100%;
  max-width: 600px;
  border-radius: var(--radius);
  padding: 1rem;
  border: 1px solid var(--lightest-background);
  box-shadow: var(--shadow);
`;

const AddNote = () => {
  return (
    <StyledAddNote>
      <span>Hello!</span>
    </StyledAddNote>
  );
};

export default AddNote;
