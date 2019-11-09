import React from 'react'

import Topbar from './components/Topbar'
import AddNote from './components/AddNote'
import Notes from './components/Notes/Notes'
import EditNote from './components/EditNote/EditNote'

const App = () => {
  return (
    <div className="App">
      <Topbar />
      <AddNote />
      <Notes />
      <EditNote />
    </div>
  )
}

export default App
