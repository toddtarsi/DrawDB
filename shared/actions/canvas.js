const ON_MOVE       = 'ON_MOVE';
const ON_PRESS      = 'ON_PRESS';
const ON_LIFT       = 'ON_LIFT';
const AT_EDGE       = 'AT_EDGE';
const RESIZE_SCREEN = 'RESIZE_SCREEN';

export function onMove(x, y) {
  return {
    type: ON_MOVE,
    x,
    y
  };
}

export function onPress() {
  return {
    type: ON_PRESS
  };
}

export function onLift() {
  return {
    type: ON_LIFT
  };
}

export function atEdge() {
  return {
    type: AT_EDGE
  };
}

export function onResize(width, height) {
  return {
    type: RESIZE_SCREEN,
    width,
    height
  };
}

