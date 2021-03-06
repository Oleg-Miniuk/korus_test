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
import notesActions from '../actions/notes';
import { channel } from '../utils/channelUtils';
import { appInstanceId } from '../utils/appUtils';

const styles = () => ({
  addBtnWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
class App extends Component {
  componentDidMount() {
    channel.onmessage = e => {
      const message = e.data;
      const { appInstanceId: receivedAppInstanceId, action } = message;
      // do not dispatch if it is an app instance that posted message
      if (receivedAppInstanceId !== appInstanceId) {
        this.props.dispatch(action);
      }
    };
  }

  changeFilterHandler = e => {
    filterActions.changeFilter(e.target.value);
  };

  render() {
    const { filter, notes, classes } = this.props;

    const filteredNotes = filter
      ? notes.filter(note => note.title.indexOf(filter) !== -1)
      : notes;

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
              onChange={this.changeFilterHandler}
            />
          </Toolbar>
        </AppBar>
        <div className={classes.addBtnWrapper}>
          <Button onClick={notesActions.addNote} color="primary">
            Add note
          </Button>
        </div>
        {filteredNotes.map(note => (
          <Note key={note.id} {...note} />
        ))}
      </div>
    );
  }
}

App.propTypes = {
  filter: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

App.defaultProps = {
  filter: ''
};

const enhance = compose(
  connect(state => {
    const { filter, notes } = state;
    return {
      filter,
      notes
    };
  }),
  withStyles(styles)
);

export default enhance(App);
