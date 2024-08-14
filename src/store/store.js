import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { hpApi } from '@/services/HPService';

import charactersReducer from './reducers/charactersSlice';

const rootReducer = combineReducers({
  charactersReducer,
  [hpApi.reducerPath]: hpApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hpApi.middleware),
  });
};
