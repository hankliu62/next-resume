const SET_STATE = 'resume/SET_STATE';

export const setState = (state) => {
  return { type: SET_STATE, payload: state };
};

const _getInitState = () => {
  return {
  };
};

export default (state = _getInitState(), action) => {
  switch (action.type) {
    case SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
