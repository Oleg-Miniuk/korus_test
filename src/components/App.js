import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Note from './Note';

class App extends Component {
  render() {
    const { filter, notes } = this.props;

    return (
      <div>
        <div>
          <input value={filter} />
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

export default connect(store => {
  const { filter, notes } = store;
  return {
    filter,
    notes
  };
})(App);
