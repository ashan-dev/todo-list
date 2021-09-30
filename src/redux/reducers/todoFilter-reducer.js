import { SET_FILTER, VISIBILITY_FILTER } from "../actions/todoFilter-action";

export const initialState = VISIBILITY_FILTER.ALL;

export const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      let { filter } = action;
      return filter;
    }
    default:
      return state;
  }
};
