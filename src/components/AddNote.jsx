import React, { useState } from 'react';
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
  const [open, setOpen] = useState(false);

  return (
    <StyledAddNote>
      <h1></h1>
    </StyledAddNote>
  );
};

export default AddNote;
