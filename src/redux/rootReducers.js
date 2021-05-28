import {combineReducers} from 'redux';
import {counterReducer} from './reducers/counterReducers';
const rootReducer = combineReducers({
    counterReducer,
})

export default rootReducer;