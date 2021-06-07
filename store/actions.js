import axios from 'axios';

const setData = (payload) => {
  return {
    type: 'data/setData',
    payload,
  };
};

export const setActiveId = (payload) => {
  return {
    type: 'activeId/setActiveId',
    payload,
  };
};

const setLoading = (payload) => {
  return {
    type: 'loading/setLoading',
    payload,
  };
};

const setError = (payload) => {
  return {
    type: 'error/setError',
    payload,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const { data } = await axios({
        url: 'https://reqres.in/api/users?per_page=12',
        method: 'GET',
      });

      dispatch(setData(data.data));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setError(true));
      console.error(err);
    }
  };
};
