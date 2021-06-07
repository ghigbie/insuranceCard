import {TOGGLE_PHOTO_WARNING} from '../actions/initialPhoto.js';

const initialState = {
  isInitialPhotoWarning: true,
};

const initialPhotoWarning = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PHOTO_WARNING:
      return {...state, isInitialPhotoWarning: !state.isInitialPhotoWarning};
    default:
      return state;
  }
};

export default initialPhotoWarning;
