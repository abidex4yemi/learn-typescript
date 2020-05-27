import { DeleteTodoAction, FetchTodoAction } from '../util/interfaces';

export enum ActionTypes {
  FETCH_TODO,
  DELETE_TODO,
}

export type Action = DeleteTodoAction | FetchTodoAction;
