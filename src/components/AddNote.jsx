import React, { useState } from 'react'
import styled from 'styled-components'

import ClosedAddNote from './AddNote/ClosedAddNote'
import OpenAddNote from './AddNote/OpenAddNote'

const Backdrop = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 9;
`

const StyledAddNote = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
`

const AddNote = ({ addNote }) => {
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(true)
  const handleOpen = () => setOpen(false)

  const addNewNote = newNote => addNote(newNote)

  let note = open ? (
    <OpenAddNote handleOpen={handleOpen} addNewNote={addNewNote} />
  ) : (
    <ClosedAddNote handleClose={handleClose} />
  )

  return (
    <>
      {open ? <Backdrop onClick={handleOpen} /> : null}
      <StyledAddNote>{note}</StyledAddNote>
    </>
  )
}

export default AddNote
