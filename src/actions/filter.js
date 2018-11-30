import { dispatch } from '../store/store';
import constants from '../constants/constants';
import actionUtils from '../utils/actionsUtils';

const changeFilter = value => dispatch({
    type: constants.CHANGE_FILTER,
    filter: value
  });

const { createDispatchFuncWithChannelSharing } = actionUtils;

export default {
  changeFilter: createDispatchFuncWithChannelSharing(changeFilter)
};
