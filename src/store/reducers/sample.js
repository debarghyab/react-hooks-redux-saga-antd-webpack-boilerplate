// import update from "immutability-helper";

const generateSampleReducer = (types, initialState) => {
  return (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
};

export { generateSampleReducer };
