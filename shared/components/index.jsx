import React, { PropTypes, Component } from 'react';
import { Canvas } from 'components/Canvas.jsx';

export default class App extends Component {
  static propTypes = {
    svgWidth: PropTypes.number.isRequired,
    svgHeight: PropTypes.number.isRequired,
    grabDown: PropTypes.func.isRequired,
    bumpEdge: PropTypes.func.isRequired,
    letGo: PropTypes.func.isRequired
  };

  componentDidMount = () => {

    let svg = d3.select(this.refs.svg);

    svg.on('mousedown', () => {
      this.updateMousePos();
      this.props.grabDown();
    });
    svg.on('touchstart', () => {
      this.updateTouchPos();
      this.props.grabDown();
    });
    svg.on('mousemove', () => {
      this.updateMousePos();
    });
    svg.on('touchmove', () => {
      this.updateTouchPos();
    });
    svg.on('mouseup', () => {
      this.props.letGo();
    });
    svg.on('touchend', () => {
      this.props.letGo();
    });
    svg.on('mouseleave', () => {
      this.props.bumpEdge();
    });

  };

  updateMousePos() {
    let [x, y] = d3.mouse(this.refs.svg);
    this.props.updateMousePos(x, y);
  }

  updateTouchPos() {
    let [x, y] = d3.touches(this.refs.svg)[0];
    this.props.updateMousePos(x, y);
  }

  render() {
    <div style={{overflow: 'hidden'}}>
      <svg width={this.props.svgWidth}
        height={this.props.svgHeight}
        ref="svg"
        style={{background: 'rgba(124, 224, 249, .3)'}}
      >{this.state.

        <Canvas particles={this.props.particles} />
      }</svg>
    </div>
  }
