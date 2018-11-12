const SHOW = 'loading/SHOW';
const HIDE = 'loading/HIDE';

export const show = () => {
  return { type: SHOW };
};

export const hide = () => {
  return { type: HIDE };
};

const _getInitState = () => {
  return {
    showingCount: 0,
    isVisible: false,
  };
};

export default (state = _getInitState(), action) => {
  switch (action.type) {
    case SHOW:
      return { showingCount: state.showingCount + 1, isVisible: true };
    case HIDE: {
      const newState = { showingCount: Math.max(state.showingCount - 1, 0), isVisible: state.isVisible };

      return newState;
    }
    default:
      return state;
  }
};
