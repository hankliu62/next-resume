import { store } from '~/pages/index';
import _ from 'lodash';

const SHOW = 'loading/SHOW';
const HIDE = 'loading/HIDE';
const HIDE_IF_NO_FURTHER_SHOW_REQUESTS = 'loading/HIDE_IF_NO_FURTHER_SHOW_REQUESTS';

export const show = () => {
  return { type: SHOW };
};

export const hide = () => {
  return { type: HIDE };
};

// 防止顺序执行多个网络请求时导致 ActivityIndicator 反复 show/hide 而闪烁
const hideIfNoFurtherShowRequests = _.debounce(() => {
  store.dispatch({ type: HIDE_IF_NO_FURTHER_SHOW_REQUESTS });
}, 300);

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
      if (newState.showingCount === 0 && newState.isVisible) {
        hideIfNoFurtherShowRequests();
      }

      return newState;
    }
    case HIDE_IF_NO_FURTHER_SHOW_REQUESTS:
      if (state.showingCount === 0) {
        return { showingCount: 0, isVisible: false };
      }

      return state;
    default:
      return state;
  }
};
