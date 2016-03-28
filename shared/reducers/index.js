/* jshint esnext: true */
import Immutable from 'immutable';
import { combineReducers } from 'redux';

import particles from './particles';
import canvas from './canvas';

export default combineReducers({
  particles,
  canvas
});

