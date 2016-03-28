import Immutable from 'immutable';

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static draw(circle){
    return (
      <circle {...circle} r="5" stroke="red" fill="transparent" stroke-width="2"/>
    );
  }
}

class Line {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  static draw(line){
    return (
      <line {...line} stroke="orange" fill="transparent" stroke-width="2"/>
    );
  }
}

export class Schema extends Particle {
  constructor(a) {
    super(a.x, a.y);
    this.text = a.text;
  }
}

export class Field extends Particle {
  constructor(a){
    super(a.x, a.y);
    this.schema = a.schema;
    this.text = a.text;
  }
}

export class Relation extends Line {
  constructor(a){
    super(a.x1, a.y1, a.x2, a.y2);
    this.text     = a.text;
    this.schema1  = a.schema1;
    this.field1   = a.field1;
    this.schema2  = a.schema2;
    this.field2   = a.field2;
    this.relation = a.relation;
  }
}

export default function particles(state = Immutable.List.of(...[]), action) {
  switch(action.type) {
    case 'CREATE_SCHEMA':
      return state.push(new Schema(action));
    case 'CREATE_RELATION':
      return state.push(new Relation(action));
    case 'CREATE_FIELD':
      return state.push(new Field(action));
    case 'DELETE_SCHEMA':
      return state.set(state.filter(function(particle){
        if(particle instanceof Schema) {
          if(action.text === particle.text) return false;
        }
        else if(particle instanceof Field) {
          if(action.text === particle.text) return false;
        }
        else if(particle instanceof Relation) {
          let text = action.text;
          if(text === particle.schema1 || text === particle.schema2) return false;
        }
        return true;
      }));
    case 'DELETE_RELATION':
      return state.delete(
        state.find(function(particle){
          if(particle instanceof Relation) {
            let fields = ['text', 'field1', 'field2', 'schema1', 'schema2'];
            for(var field of fields){
              if(particle[field] !== action[field]) return false;
            }
            return true;
          }
          return false;
        })
      );
    case 'DELETE_FIELD':
      return state.delete(
        state.find(function(particle){
          if(particle instanceof Field) {
            let fields = ['text', 'schema'];
            for(var field of fields){
              if(particle[field] !== action[field]) return true;
            }
            return false;
          }
          return true;
        })
      );
    default:
      return state;
  }
}
