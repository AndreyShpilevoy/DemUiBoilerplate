/* eslint import/no-extraneous-dependencies: 'off' */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import root from 'lodash/_root';
//import rootReducer from 'reducers/rootReducer';
import { routerReducer } from 'react-router-redux';
import crashReporter from '../middlewares/crashReporterMiddleware';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        //rootReducer,
        combineReducers({routing: routerReducer}),
        root.devToolsExtension && root.devToolsExtension(),
        applyMiddleware(
          sagaMiddleware,
          crashReporter,
          reduxImmutableStateInvariant()
        )
    );
    store.runSaga = sagaMiddleware.run;
    return store;
}
