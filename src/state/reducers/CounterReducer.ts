const CounterReducer = (state: number = 0, action: any) => {
  switch (action.type) {
    case "add":
      return state + 1;

    case "delete":
      return state - 1;

    default:
      return state;
  }
};

export default CounterReducer;
