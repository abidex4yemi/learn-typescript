import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './types';
import { FetchTodoAction, Todo, DeleteTodoAction } from '../util/interfaces';

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodo = () => async (dispatch: Dispatch) => {
  const response = await axios.get<Todo[]>(url);

  dispatch<FetchTodoAction>({
    type: ActionTypes.FETCH_TODO,
    payload: response.data,
  });
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: id,
  };
};
