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
    <StyledAddNote
      contentEditable={true}
      onFocus={() => console.log('focussed!')}
      onBlur={() => console.log('blurred!')}
    ></StyledAddNote>
  );
};

export default AddNote;
