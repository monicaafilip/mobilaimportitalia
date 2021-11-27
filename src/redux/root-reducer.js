import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import directoryReducer from './directory/directory.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
};

const rootReducer = combineReducers({
    prods: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);