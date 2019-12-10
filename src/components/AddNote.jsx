import React, { useState } from 'react';
import styled from 'styled-components';

import ClosedAddNote from './AddNote/ClosedAddNote';
import OpenAddNote from './AddNote/OpenAddNote';

const Backdrop = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 9;
`;

const StyledAddNote = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 0 auto;

  @media (max-width: 800px) {
    max-width: 490px;
  }
`;

const AddNote = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  let displayAddNote = open ? (
    <OpenAddNote handleClose={handleClose} />
  ) : (
    <ClosedAddNote handleOpen={handleOpen} />
  );

  return (
    <>
      {open && <Backdrop onClick={handleClose} />}
      <StyledAddNote>{displayAddNote}</StyledAddNote>
    </>
  );
};

export default AddNote;
