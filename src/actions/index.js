export const showDetails = (dispatch, curEle) => {
  console.log(curEle)
  return dispatch({ type: "GETDETAILS", payload: curEle });
};
