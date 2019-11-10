import React from 'react'
import { connect } from 'react-redux'

import Topbar from './components/Topbar'
import AddNote from './components/AddNote'
import Notes from './components/Notes/Notes'
import EditNote from './components/EditNote'

const App = ({ selectedNote }) => {
  return (
    <div className="App">
      <Topbar />
      <AddNote />
      <Notes />
      <EditNote
        isOpen={selectedNote ? true : false}
        selectedNote={selectedNote}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selectedNote: state.selectedNote,
  }
}

export default connect(mapStateToProps)(App)
