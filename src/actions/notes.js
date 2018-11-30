import {} from '../store/store';
import constants from '../constants/constants';
import actionUtils from '../utils/actionsUtils';

const changeNoteTitle = ({ id, title }) => ({
  type: constants.CHANGE_NOTE_TITLE,
  id,
  title
});

const changeNoteDescription = ({ id, description }) => ({
  type: constants.CHANGE_NOTE_DESCRIPTION,
  id,
  description
});

const addNote = () => ({
  type: constants.ADD_NOTE
});

const deleteNote = ({ id }) => ({
  type: constants.DELETE_NOTE,
  id
});

const { createDispatchFuncWithChannelSharing } = actionUtils;

export default {
  changeNoteTitle: createDispatchFuncWithChannelSharing(changeNoteTitle),
  addNote: createDispatchFuncWithChannelSharing(addNote),
  deleteNote: createDispatchFuncWithChannelSharing(deleteNote),
  changeNoteDescription: createDispatchFuncWithChannelSharing(
    changeNoteDescription
  )
};
