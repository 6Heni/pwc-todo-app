import { Container } from 'react-bootstrap';
import { useGetTodosQuery } from '../../dataAPI';
import TodoContainer from '../../components/TodoContainer/TodoContainer';
import AddNewTodo from '../../components/AddNewTodo/AddNewTodo';

function Todos() {
  const { data: todos, error, isLoading } = useGetTodosQuery('');

  return (
    <Container>
      <AddNewTodo />
      {todos && <TodoContainer todos={todos} />}
      {isLoading && 'Loading todos ...'}
      {error && `Error :( ${JSON.stringify(error)}`}
    </Container>
  );
}

export default Todos;
