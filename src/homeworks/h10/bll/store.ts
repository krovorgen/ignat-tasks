import { loadingReducer } from './loadingReducer';
import { combineReducers, createStore } from 'redux';

const reducers = combineReducers({
  loading: loadingReducer,
});

export const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export type AppStoreType = ReturnType<typeof reducers>;

// @ts-ignore
(window as any).store = store; // for dev
