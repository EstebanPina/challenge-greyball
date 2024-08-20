import { createStore } from 'redux';
import { rootReducer } from '@/redux/rootReducers';

export const store = createStore(
  rootReducer,
);
