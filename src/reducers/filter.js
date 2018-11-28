const filter = (state = '', action) => {
  if (action.type === 'CHANGE_FILTER') {
    return action.value;
  }
  return state;
};

export default filter;
