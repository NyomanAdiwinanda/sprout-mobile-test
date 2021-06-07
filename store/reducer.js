const initialState = {
  data: [],
  activeId: 0,
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'data/setData':
      return { ...state, data: payload };
    case 'activeId/setActiveId':
      return { ...state, activeId: payload };
    case 'loading/setLoading':
      return { ...state, loading: payload };
    case 'error/setError':
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default reducer;
