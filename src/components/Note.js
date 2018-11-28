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

  render() {
    const { classes } = this.props;
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <TextField
            id="noteDescription"
            label="Title"
            placeholder="Enter title"
            margin="normal"
            onBlur={this.changeNoteTitleHandler}
          />
          <TextField
            id="noteDescription"
            label="Note"
            placeholder="Enter your note"
            multiline
            margin="normal"
            rows="4"
            onBlur={this.changeNoteDescriptionHandler}
          />
          <Button color="secondary" className={classes.deleteBtn}>
            Delete note
          </Button>
        </ListItem>
      </List>
    );
  }
}

Note.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

export default withStyles(styles)(Note);
