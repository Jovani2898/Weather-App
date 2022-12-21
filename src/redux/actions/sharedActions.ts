import {SharedTypes} from '../types/sharedTypes';

const UPDATE_NAVIGATION_HEIGHT_ACTION = (height: number) => ({
  type: SharedTypes.UPDATE_NAVIGATION_HEIGHT,
  payload: {navigationHeight: height},
});

export {UPDATE_NAVIGATION_HEIGHT_ACTION};
