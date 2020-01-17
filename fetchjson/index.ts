import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo with ID ${id}
    has a title of ${title}
    is it finished ${completed}
  `);
};

axios.get(url).then(res => {
  // defines structure of an object
  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  const { id, title, completed } = res.data as Todo;
  logTodo(id, title, completed);
});
