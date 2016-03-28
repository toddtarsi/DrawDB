import React, { PropTypes, Component } from 'react';
import CanvasContainer  from './canvas';

export default class AppContainer extends Component {
  render() {
    return (
      <div>
        <CanvasContainer />
      </div>
    );
  }
}
