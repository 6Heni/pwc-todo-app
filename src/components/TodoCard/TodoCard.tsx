import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { TodoData } from '../../types';
import './TodoCard.style.css';
import DeleteTodoButton from '../DeleteTodoButton/DeleteTodoButton';
import { useUpdateTodoMutation } from '../../dataAPI';
import CheckmarkButton from '../CheckmarkButton/CheckmarkButton';

type TodoCardProps = {
  todo: TodoData;
};

function TodoCard({ todo }: TodoCardProps) {
  const { id, name, isComplete } = todo;

  const [updateTodo] = useUpdateTodoMutation();

  const [updatedTodoName, setUpdatedTodoName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUpdatedTodoName(event.target.value);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      updateTodo({
        id,
        name: updatedTodoName || name,
        isComplete,
      });
      event.currentTarget.blur();
    }
  };

  return (
    <Card className="bg-secondary mb-3">
      <Card.Body className="todo-card-body">
        <CheckmarkButton todo={todo} />
        <Form.Control
          type="text"
          value={updatedTodoName || name}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          className={`bg-body-secondary todo-name-field ${
            isComplete ? 'completed' : ''
          }`}
        />
        <DeleteTodoButton todoId={id} />
      </Card.Body>
    </Card>
  );
}

export default TodoCard;
