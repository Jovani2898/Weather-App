import {createContext} from 'react';

// this is value interface
export const sharedContext = createContext({
  navigationHeight: 0,
  setNavigationHeight: (height: number) => {},
});

export const SharedContextProvider = sharedContext.Provider;
