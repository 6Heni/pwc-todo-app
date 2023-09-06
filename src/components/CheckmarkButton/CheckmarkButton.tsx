import { Circle, CheckCircleFill } from 'react-bootstrap-icons';
import { TodoData } from '../../types';
import { useUpdateTodoMutation } from '../../dataAPI';
import './CheckmarkButton.style.css';

type CheckmarkButtonProps = {
  todo: TodoData;
};

function CheckmarkButton({ todo }: CheckmarkButtonProps) {
  const { id, name, isComplete } = todo;
  const [updateTodo] = useUpdateTodoMutation();

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    updateTodo({
      id,
      name,
      isComplete: !isComplete,
    });
  };

  return isComplete ? (
    <CheckCircleFill
      className="checkmark"
      color="#FF5A5F"
      onClick={handleClick}
    />
  ) : (
    <Circle className="checkmark" color="#FF5A5F" onClick={handleClick} />
  );
}

export default CheckmarkButton;
