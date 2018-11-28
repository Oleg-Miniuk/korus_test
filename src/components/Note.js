import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  list: {
    border: '1px solid #0000005c'
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
});
class Note extends Component {
  state = {};

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
          />
          <TextField
            id="noteDescription"
            label="Note"
            placeholder="Enter your note"
            multiline
            margin="normal"
            rows="4"
          />
        </ListItem>
      </List>
    );
  }
}

Note.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Note);
