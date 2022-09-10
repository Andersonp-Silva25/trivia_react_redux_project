import { SET_NAME, SET_SCORE } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

function player(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_NAME:
    return {
      ...state,
      name: action.payload.name,
      gravatarEmail: action.payload.gravatarEmail,
    };
  case SET_SCORE:
    return {
      ...state,
      score: action.payload,
    };
  default: return state;
  }
}

export default player;
