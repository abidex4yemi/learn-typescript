import React from 'react';
import { connect } from 'react-redux';
import { Todo, StoreState, AppProps, AppState } from '../util/interfaces';
import { fetchTodo, deleteTodo } from '../actions/index';

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      fetching: false,
    };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todo.length && this.props.todo.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = () => {
    this.props.fetchTodo();
    this.setState({ fetching: false });
  };

  handleDelete = (id: number) => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todo.map((currentTodo) => (
      <div key={currentTodo.id}>
        {currentTodo.title}{' '}
        <button onClick={() => this.handleDelete(currentTodo.id)}>
          delete{' '}
          <span role="img" aria-label="sad face image">
            😡
          </span>
        </button>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch-todo</button>
        {this.state.fetching ? 'Loading' : null}
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ todo }: StoreState): { todo: Todo[] } => ({
  todo,
});

export const App = connect(mapStateToProps, { fetchTodo, deleteTodo })(_App);
