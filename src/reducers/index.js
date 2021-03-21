import { combineReducers } from 'redux';

// Import custom components
import authReducer from './auth';


const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;