import { dispatch } from '../store/store';

const changeFilter = e => dispatch({
    type: 'CHANGE_FILTER',
    value: e.target.value
  });

export default { changeFilter };
