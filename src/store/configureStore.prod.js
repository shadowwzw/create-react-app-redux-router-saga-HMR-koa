import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from '../reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

const enhancer = compose(
  applyMiddleware(middleware),
  applyMiddleware(thunk)
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
