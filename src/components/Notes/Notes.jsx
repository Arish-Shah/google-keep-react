import React from 'react'
import { connect } from 'react-redux'

const Notes = ({ notes }) => {
  return (
    <div className="notes">
      <span>HEllo!</span>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps)(Notes)
