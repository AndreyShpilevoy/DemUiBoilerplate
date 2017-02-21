import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {layoutReducer} from 'containers/Layout/layout-reducer';

const rootReducer = combineReducers({
    layoutReducer,
    routing: routerReducer
});

export default rootReducer;
