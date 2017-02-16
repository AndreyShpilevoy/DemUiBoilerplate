import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
//import rootReducer from 'reducers/rootReducer';
import { routerReducer } from 'react-router-redux';
import crashReporter from '../middlewares/crashReporterMiddleware';


export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        //rootReducer,
        combineReducers({routing: routerReducer}),
        applyMiddleware(
          crashReporter,
          sagaMiddleware
        )
    );
    store.runSaga = sagaMiddleware.run;
    return store;
}
