import React from 'react'

import Topbar from './components/Topbar'
import AddNote from './components/AddNote'
import Notes from './components/Notes/Notes'

const App = () => {
  return (
    <>
      <Topbar />
      <AddNote />
      <Notes />
    </>
  )
}

export default App
