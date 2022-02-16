export const addCounter = (amount: number) => {
  return (dispatch: any) => {
    dispatch({
      type: "add",
      payload: amount,
    });
  };
};

export const deleteCounter = (amount: number) => {
  return (dispatch: any) => {
    dispatch({
      type: "delete",
      payload: amount,
    });
  };
};
