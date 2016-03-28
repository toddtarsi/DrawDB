import d3 from 'd3';
import Immutable from 'immutable';
import { Schema, Field, Relation } from 'reducers/particles';
import React, { PropTypes, Component } from 'react';

class Canvas extends Component {
  static propTypes = {
    onMove: PropTypes.func.isRequired,
    atEdge: PropTypes.func.isRequired,
    onLift: PropTypes.func.isRequired,
    onPress: PropTypes.func.isRequired,
    onResize: PropTypes.func.isRequired,
    svgWidth: PropTypes.number.isRequired,
    svgHeight: PropTypes.number.isRequired,
    particles: PropTypes.instanceOf(Immutable.List)
  };

  componentDidMount = () => {
    let self   = this,
      svg      = d3.select(this.refs.svg),
      onMove   = this.props.onMove,
      onLift   = this.props.onLift,
      atEdge   = this.props.atEdge,
      onPress  = this.props.onPress,
      onResize = this.props.onResize;

    svg.on('mousedown',  onPress);
    svg.on('touchstart', onPress);
    svg.on('mouseup',    onLift);
    svg.on('touchend',   onLift);
    svg.on('mouseleave', atEdge);
    svg.on('mousemove',  () => { onMove(self.getMousePos()); });
    svg.on('touchmove',  () => { onMove(self.getTouchPos()); });
    d3.select(window).on('resize', onResize);

    onResize();
  };

  getMousePos(){ return d3.mouse(this.refs.svg); };
  getTouchPos(){ return d3.touches(this.refs.svg)[0]; };

  render(){
    return (
      <div style={{overflow: 'hidden'}}>
        <svg width={this.props.svgWidth}
          height={this.props.svgHeight}
          style={{background: 'rgba(124, 224, 249, .3)'}}
          ref="svg"
        >{
          this.props.particles.map(function(particle){
            if(particle instanceof Field) return Field.draw(particle);
            else if(particle instanceof Relation) return Relation.draw(particle);
            return Schema.draw(particle);
          })
        }</svg>
      </div>
    );
  }
}

export default Canvas;
