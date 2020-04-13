const defaultState = {};

export const exampleStateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_NEXT_STATE':
      return action.nextState;
    default:
      return state;
  }
};
