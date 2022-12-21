import {SharedTypes} from '../types/sharedTypes';

export const SharedReducer = (
  state = {navigationHeight: 0},
  {type, payload},
) => {
  switch (type) {
    case SharedTypes.UPDATE_NAVIGATION_HEIGHT:
      console.log({type, payload, oldState: state.navigationHeight});
      return {navigationHeight: payload.navigationHeight};
    default:
      return state;
  }
};
