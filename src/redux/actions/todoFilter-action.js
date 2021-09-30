export const SET_FILTER = "SET_FILTER";

export const VISIBILITY_FILTER = {
  ALL: "all",
  COMPLETED: "completed",
  INCOMPLETED: "incompleted",
};

const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});

export const setFilterAction = (filter) => {
  return async (dispatch) => {
    dispatch(setFilter(filter));
  };
};

