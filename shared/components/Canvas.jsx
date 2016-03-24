import React, {Component}          from 'react';
import { Schema, Field, Relation } from 'reducers';


  export default class Home extends Component {
    render() {
      return (
        <Particles particles={this.props.particles} />
      );
    }
  }

