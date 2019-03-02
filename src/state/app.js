const initialState = {
    scrollState: '',
  };
  
  const SCROLL_TO = 'SCROLL_TO';
  export const scrollTo = (section) => ({ type: SCROLL_TO, payload: section });
  
  export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case SCROLL_TO:
        return { ...state, scrollState: payload };
      default:
        return state;
    }
  };