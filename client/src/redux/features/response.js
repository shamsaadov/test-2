const initialState = {
  loading: true,
  items: [],
  error: null,
};

const response = (state = initialState, action) => {
  switch (action.type) {
    case "response/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "response/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "response/fetch/rejected":
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
};
export default response;

export const fetchResponse = () => {
  return async (dispatch) => {
    dispatch({ type: "response/fetch/pending" });
    try {
      const response = await fetch("http://localhost:3040/breeds");
      const json = await response.json();
      dispatch({ type: "response/fetch/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "response/fetch/rejected", error: e.toString() });
    }
  };
};


