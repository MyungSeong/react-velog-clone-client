import thunk from 'redux-thunk';
import { UserInfo } from './modules';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

let middlewares = [thunk];

const reducers = combineReducers({UserInfo});

let store;

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
    store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
    store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
}

export default store;