import { ActionTypes } from '../actions/types';
import { fetchTodo, deleteTodo } from '../actions';

export interface FetchTodoAction {
  type: ActionTypes;
  payload: Todo[];
}

export interface AppState {
  fetching: boolean;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface StoreState {
  todo: Todo[];
}

export interface AppProps {
  todo: Todo[];
  fetchTodo: Function;
  deleteTodo: typeof deleteTodo;
}

export interface DeleteTodoAction {
  type: ActionTypes.DELETE_TODO;
  payload: number;
}
