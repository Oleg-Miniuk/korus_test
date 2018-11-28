import { dispatch } from '../store/store';
import constants from '../constants/constants';

const changeNoteTitle = ({ id, title }) => dispatch({
    type: constants.CHANGE_NOTE_TITLE,
    id,
    title
  });

export default {
  changeNoteTitle
};
