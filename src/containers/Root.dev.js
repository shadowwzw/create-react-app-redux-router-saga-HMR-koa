import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import CounterApp from './CounterApp';
import DevTools from './DevTools';

const history = createHistory();

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <CounterApp />
            <DevTools />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
