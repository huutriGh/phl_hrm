import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import leaveTypeReducer from './leaveType/leaveType.reducer';
import leaveStatusReducer from './leaveStatus/leaveStatus.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: ['user']
};
const rootReducer = combineReducers({
  user: userReducer,
  leaveType: leaveTypeReducer,
  leaveStatus: leaveStatusReducer
});

export default persistReducer(persistConfig, rootReducer);
