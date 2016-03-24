export const CREATE_SCHEMA   = 'CREATE_SCHEMA';
export const DELETE_SCHEMA   = 'DELETE_SCHEMA';

export const CREATE_FIELD    = 'CREATE_FIELD';
export const DELETE_FIELD    = 'DELETE_FIELD';

export const CREATE_RELATION = 'CREATE_RELATION';
export const DELETE_RELATION = 'DELETE_RELATION';

export const MOVE_PARTICLE = 'MOVE_PARTICLE';

export function createSchema(x, y, text) {
  return {
    type: CREATE_SCHEMA,
    text: text,
    x: x,
    y: y
  };
}

export function deleteSchema(text) {
  return {
    type: DELETE_SCHEMA,
    text
  };
}

export function createRelation(x1, y1, x2, y2, text, schema1, field1, schema2, field2, relation_type) {
  return {
    type: CREATE_RELATION,
    x1, 
    y1,
    x2, 
    y2,
    text,
    schema1,
    field1,
    schema2,
    field2,
    relation_type
  };
}

export function deleteRelation(text) {
  return {
    type: DELETE_RELATION,
    text
  };
}
export function createField(x, y, text, field_type) {
  return {
    type: CREATE_FIELD,
    text,
    field_type,
    x,
    y
  };
}
export function deleteField(id) {
  return {
    type: DELETE_FIELD,
    id
  };
}

export function moveParticle(x1, y1, x2, y2) {
  return {
    type: MOVE_PARTICLE,
    x1,
    y1,
    x2,
    y2
  };
}

export function updateMousePos(x, y) {
  return {
    type: UPDATE_MOUSE_POS,
    x,
    y
  }
}

export function resizeScreen(width, height) {
  return {
    type: RESIZE_SCREEN,
    width,
    height
  }
}
