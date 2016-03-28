import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Canvas from 'components/canvas';
import * as actions from 'actions/canvas';

const mapStateToProps = (state) => {
  return {
    particles : state.particles,
    svgWidth  : state.canvas.get('svgWidth'),
    svgHeight : state.canvas.get('svgHeight')
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMove(x, y) { 
      dispatch(actions.onMove( x, y ));
    },
    onResize() { 
      dispatch(actions.onResize( window.innerWidth, window.innerHeight ));
    },
    atEdge() {
      dispatch(actions.atEdge());
    },
    onLift() {
      dispatch(actions.onLift());
    },
    onPress() {
      dispatch(actions.onPress());
    }
  };
}

const CanvasContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);

export default CanvasContainer;
