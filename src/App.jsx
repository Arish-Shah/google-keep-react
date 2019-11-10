import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Topbar from './components/Topbar'
import AddNote from './components/AddNote'
import Notes from './components/Notes/Notes'
import EditNote from './components/EditNote'
import { initNotes } from './store/actions'

const App = ({ selectedNote, onInitNotes }) => {
  useEffect(() => {
    onInitNotes()
  }, []) //eslint-disable-line

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

const mapDispatchToProps = dispatch => {
  return {
    onInitNotes: () => dispatch(initNotes()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
