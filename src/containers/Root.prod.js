import React, {Component} from 'react';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter} from 'react-router-redux';
import CounterApp from './CounterApp';

const history = createHistory();

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <CounterApp />
        </ConnectedRouter>
      </Provider>
    );
  }
}
