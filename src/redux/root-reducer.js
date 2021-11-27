import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import aboutusReducer from './aboutus/aboutus.reducer';

import directoryReducer from './directory/directory.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
};

const rootReducer = combineReducers({
    prods: directoryReducer,
    textabout: aboutusReducer
});

export default persistReducer(persistConfig, rootReducer);