import data from "./MOCK_DATA.json";
const INITIAL_STATE = {
  text: data
};

const aboutusReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default aboutusReducer;
