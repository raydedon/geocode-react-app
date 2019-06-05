import {combineReducers} from 'redux';

import {address} from './address.reducer';

const rootReducer = combineReducers({address});

export default rootReducer;