const initialstate = {
  isAuth: false,
};
const authReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case "SET_IS_AUTH":
      return { ...state, isAuth: payload };

    default:
      return state;
  }
};
export default authReducer;
