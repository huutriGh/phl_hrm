import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  user: userReducer
});
const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whiteList: ['user']
};
export default persistReducer(persistConfig, rootReducer);
