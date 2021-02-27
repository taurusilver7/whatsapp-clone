export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  LOGOUT: "LOGOUT",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
