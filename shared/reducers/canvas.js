import Immutable from 'immutable';
const initialState = Immutable.Map({
  svgWidth: 800,
  svgHeight: 600, 
  mousePos: [0, 0],
  isPressed: false,
  activeTool: false
});

export default function canvas(state = initialState, action) {
  switch(action.type) {
    case 'AT_EDGE':
      return state;
    case 'ON_MOVE':
      return state.set('mousePos', [action.x, action.y]);
    case 'ON_LIFT':
      console.log(state);
      return state.set('isPressed', false);
    case 'ON_PRESS':
      return state.set('isPressed', true);
    case 'RESIZE_SCREEN':
      return state.merge({ svgWidth: action.width, svgHeight: action.height });
    default:
      return state;
  }
}
