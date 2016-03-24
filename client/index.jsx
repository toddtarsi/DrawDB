import React, { render }    from 'react';
import { Router }           from 'react-router';
import { Provider }         from 'react-redux';
import { fromJS }           from 'immutable';
import * as reducers        from 'reducers';
import routes               from 'routes';
import { createStore,
         combineReducers,
         applyMiddleware }  from 'redux';
import d3;

let initialState = window.__INITIAL_STATE__;

// Transform into Immutable.js collections,
// but leave top level keys untouched for Redux
Object
  .keys(initialState)
  .forEach(key => {
    initialState[key] = fromJS(initialState[key]);
  });

const reducer = combineReducers(reducers);
const store   = createStore(reducer, initialState);

render(
  <Provider store={store}>
    <Router children={routes}/>
  </Provider>,
  document.getElementById('react-view')
);

let onResize = function () {
  store.dispatch(resizeScreen(window.innerWidth, window.innerHeight));
};

onResize();
d3.select(window).on('resize', onResize);

