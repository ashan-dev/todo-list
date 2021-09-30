import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../actions/todoList-action";
import { nanoid } from "nanoid";

export const initialState = {
  allIds: [],
  byIds: {},
};

export const todoListReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { text } = action;
      const id = nanoid();
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            text,
            completed: false,
          },
        },
      };
    }
    case DELETE_TODO: {
      const { id } = action;
      const { [id]: removedId, ...byIds } = state.byIds; // destructure rest trick
      return {
        ...state,
        allIds: state.allIds.filter((exitstingId) => exitstingId != id),
        byIds,
      };
    }
    case TOGGLE_TODO: {
      let { id } = action;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    case EDIT_TODO: {
      let { id, text } = action;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            text,
          },
        },
      };
    }
    default:
      return state;
  }
};
