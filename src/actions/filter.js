import { dispatch } from '../store/store';
import constants from '../constants/constants';

const changeFilter = e => dispatch({
    type: constants.CHANGE_FILTER,
    filter: e.target.value
  });

export default { changeFilter };
