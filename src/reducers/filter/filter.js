import constants from '../../constants/constants';

const filter = (state = '', action) => {
  if (action.type === constants.CHANGE_FILTER) {
    return action.filter;
  }
  return state;
};

export default filter;
