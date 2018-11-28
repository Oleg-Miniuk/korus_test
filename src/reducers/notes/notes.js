import constants from '../../constants/constants';

const notes = (state = [], action) => {
  if (action.type === constants.CHANGE_NOTE_TITLE) {
    return state.map(note => {
      if (note.id === action.id) {
        return {
          id: action.id,
          title: action.title
        };
      }
      return note;
    });
  }
  return state;
};

export default notes;
