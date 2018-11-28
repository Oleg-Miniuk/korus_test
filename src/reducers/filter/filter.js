import constants from '../../constants/constants';

const filter = (state = '', action) => {
  if (action.type === constants.CHANGE_FILTER) {
    return action.value;
  }
  return state;
};

export default filter;
