import { channel } from './channelUtils';
import { appInstanceId } from './appUtils';
import { dispatch } from '../store/store';

// share through BroadCastChannel to update other browser tabs
const createDispatchFuncWithChannelSharing = actionCreator => actionProps => {
  if (typeof actionCreator === 'function') {
    const action = actionCreator(actionProps);
    channel.postMessage({ appInstanceId, action });
    dispatch(action);
  }
};

export default {
  createDispatchFuncWithChannelSharing
};
