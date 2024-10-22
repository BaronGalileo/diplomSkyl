import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice'
import one_MachineReducer from './oneMachineSlice'
import machinesReducer from './machinesSlice'  




const rootReducer = combineReducers({
  auth: authReducer,
  one_machine: one_MachineReducer,
  machines: machinesReducer,
})

const persistConfig = {
  key: 'root',
  storage,
 }

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store) 
export  default store;