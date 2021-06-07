import {TOGGLE_LOGIN} from '../actions/initialLogin.js';

const initialState = {
  isInitialLogin: true,
};

const initialLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return {...state, isInitialLogin: !state.isInitialLogin};
    default:
      return state;
  }
};

export default initialLoginReducer;
