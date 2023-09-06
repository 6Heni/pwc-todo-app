import { TodoData } from '../../types';
import TodoCard from '../TodoCard/TodoCard';

type TodoContainerProps = {
  todos: TodoData[];
};

function TodoContainer({ todos }: TodoContainerProps) {
  return (
    <>
      <h4>Your todos</h4>
      {todos.length === 0 && 'No todos yet. Add a new one.'}
      {todos.map((todo) => (
        <TodoCard key={`todocard-${todo.id}`} todo={todo} />
      ))}
    </>
  );
}

export default TodoContainer;
