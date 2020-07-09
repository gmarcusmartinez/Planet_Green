import { SIGNIN, REGISTER, SIGNOUT, GET_CURRENT_USER } from '../actions/types';

const initialState = {
  loading: true,
  currentUser: null,
};

export const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CURRENT_USER:
    case SIGNIN:
    case REGISTER:
    case SIGNOUT:
      return {
        ...state,
        loading: false,
        currentUser: payload,
      };

    default:
      return state;
  }
};
