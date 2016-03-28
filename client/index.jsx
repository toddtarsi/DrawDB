import d3 from 'd3';
import React, { render }    from 'react';
import { Router }           from 'react-router';
import { Provider }         from 'react-redux';
import { fromJS }           from 'immutable';
import reducer              from 'reducers';
import routes               from 'routes';
import { createStore,
         applyMiddleware }  from 'redux';

let initialState = window.__INITIAL_STATE__;

// Transform into Immutable.js collections,
// but leave top level keys untouched for Redux
Object
  .keys(initialState)
  .forEach(key => {
    initialState[key] = fromJS(initialState[key]);
  });
const store   = createStore(reducer, initialState);

render(
  <Provider store={store}>
    <Router children={routes}/>
  </Provider>,
  document.getElementById('react-view')
);

