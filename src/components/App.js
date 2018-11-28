import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Note from './Note';
import filterActions from '../actions/filter';

const styles = () => ({
  addBtnWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
class App extends Component {
  render() {
    const { filter, notes, classes } = this.props;

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
              onChange={filterActions.changeFilter}
            />
          </Toolbar>
        </AppBar>
        <div className={classes.addBtnWrapper}>
          <Button color="primary">Add note</Button>
        </div>
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

const enhance = compose(
  connect(store => {
    const { filter, notes } = store;
    return {
      filter,
      notes
    };
  }),
  withStyles(styles)
);

export default enhance(App);
