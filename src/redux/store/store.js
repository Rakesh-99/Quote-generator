import { combineReducers, configureStore } from '@reduxjs/toolkit';
import quoteSlice from '../slice/quoteSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';







const persistConfig = {
    key: 'root',
    version: 1,
    storage
};


const reducers = combineReducers({
    quote: quoteSlice
});


const persistedReducers = persistReducer(persistConfig, reducers);




const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});


export default store;