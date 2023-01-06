const initialValue = false;
export const setDetails = (state = initialValue, action) => {
  switch (action.type) {
    case "GETDETAILS":
      return (state = action.payload);
    default:
      return state;
  }
};
