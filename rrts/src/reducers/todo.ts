import { Todo } from '../util/interfaces';
import { ActionTypes, Action } from '../actions/types';

export const todoReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODO: {
      return action.payload;
    }
    case ActionTypes.DELETE_TODO: {
      return state.filter(
        (currentTodo: Todo) => currentTodo.id !== action.payload
      );
    }
    default: {
      return state;
    }
  }
};
