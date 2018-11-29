import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import notesActions from '../actions/notes';

const styles = () => ({
  list: {
    border: '1px solid #0000005c'
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  deleteBtn: {
    alignSelf: 'flex-end'
  }
});
class Note extends Component {
  changeNoteTitleHandler = e => {
    const { id } = this.props;
    notesActions.changeNoteTitle({
      id,
      title: e.target.value
    });
  };

  changeNoteDescriptionHandler = e => {
    const { id } = this.props;
    notesActions.changeNoteDescription({
      id,
      description: e.target.value
    });
  };

  deleteNoteHandler = () => {
    const { id } = this.props;
    notesActions.deleteNote({ id });
  };

  render() {
    const { classes, title, description, id } = this.props;
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <TextField
            id={`noteTitle-${id}`}
            label="Title"
            placeholder="Enter note's title"
            margin="normal"
            onChange={this.changeNoteTitleHandler}
            value={title}
          />
          <TextField
            id={`noteDescription-${id}`}
            label="Note"
            placeholder="Enter note's description"
            multiline
            margin="normal"
            rows="4"
            onChange={this.changeNoteDescriptionHandler}
            value={description}
          />
          <Button
            onClick={this.deleteNoteHandler}
            color="secondary"
            className={classes.deleteBtn}
          >
            Delete note
          </Button>
        </ListItem>
      </List>
    );
  }
}

Note.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string
};

Note.defaultProps = {
  title: '',
  description: ''
};

export default withStyles(styles)(Note);
