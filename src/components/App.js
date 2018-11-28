import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Note from './Note';

class App extends Component {
  render() {
    const { filter, notes } = this.props;

    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <TextField
              id="notesFilter"
              label="Filter by title"
              placeholder="Enter a word for filtering"
              margin="normal"
              value={filter}
              fullWidth
            />
          </Toolbar>
        </AppBar>
        {notes.map(note => (
          <Note {...note} />
        ))}
      </div>
    );
  }
}

App.propTypes = {
  filter: PropTypes.string
};

App.defaultProps = {
  filter: ''
};

export default connect(store => {
  const { filter, notes } = store;
  return {
    filter,
    notes
  };
})(App);
