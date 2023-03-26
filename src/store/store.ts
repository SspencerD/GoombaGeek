import rootReducer from '../reducers/rootReducers';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
