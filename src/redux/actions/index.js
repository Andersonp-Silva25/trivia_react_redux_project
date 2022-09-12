export const SET_NAME = 'SET_NAME';
export const SET_SCORE = 'SET_SCORE';
export const SET_ASSERTIONS = 'SET_ASSERTIONS';

export const setName = (value) => ({
  type: SET_NAME,
  payload: value,
});

export const setScore = (payload) => ({
  type: SET_SCORE,
  payload,
});

export const setAssertions = (payload) => ({
  type: SET_ASSERTIONS,
  payload,
});
