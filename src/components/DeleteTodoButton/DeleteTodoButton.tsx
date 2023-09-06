import Button from 'react-bootstrap/Button';
import { Trash3Fill } from 'react-bootstrap-icons';
import { useDeleteTodoMutation } from '../../dataAPI';

type DeleteTodoButtonProps = {
  todoId: number;
};

function DeleteTodoButton({ todoId }: DeleteTodoButtonProps) {
  const [deleteTodo] = useDeleteTodoMutation();

  return (
    <Button variant="danger" onClick={() => deleteTodo(todoId)}>
      <Trash3Fill />
    </Button>
  );
}

export default DeleteTodoButton;
