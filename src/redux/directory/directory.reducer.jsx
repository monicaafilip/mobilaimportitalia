import data from "./MOCK_DATA.json";
const INITIAL_STATE = {
  products: data
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
