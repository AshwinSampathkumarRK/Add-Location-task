import { combineReducers } from 'redux';
import { reducer as locationReducer } from './locationReducer';

export const rootReducer = combineReducers({
    locationReducer: locationReducer,
})