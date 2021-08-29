import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import createSagaMiddleware from '@redux-saga/core';
import saga from './saga';
import { persistStore } from 'redux-persist';

// create the store and start the redux-saga
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// persist the store
const persistor = persistStore(store);
export default { store, persistor };
