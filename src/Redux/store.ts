import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import messageReducer from './messageSlice';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    Message: messageReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([sagaMiddleware, logger]),
});

sagaMiddleware.run(mySaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
