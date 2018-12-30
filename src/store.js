import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'

import reducer from './reducers/'
import defaultState from './defaultState'

const name = 'redux-basic-workshop'
const composeEnhancers =
(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: `${name} Store` })) ||
  compose;
  
const middlewareArray = [logger, thunk]
const store = createStore(reducer, defaultState, composeEnhancers(applyMiddleware(...middlewareArray)))

export default store
