const generateSampleDispatcher = (types) => {
  return (dispatch) => ({
    actionFunc: (action) => {
      dispatch({
        type: types.SAMPLE_TYPE,
        ...action,
        data: '',
      });
    },
  });
};

export default generateSampleDispatcher;
