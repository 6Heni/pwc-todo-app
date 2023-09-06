import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { PlusCircleFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import { useAddTodoMutation } from '../../dataAPI';
import './AddNewTodo.style.css';

function AddNewTodo() {
  const [newTodo, setNewTodo] = useState('');
  const [addTodo] = useAddTodoMutation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <Form className="mb-5" onSubmit={handleSubmit}>
      <h4>Add new todo</h4>
      <Row>
        <Col xs="12" md="10">
          <Form.Control
            required
            type="text"
            placeholder="New todo"
            value={newTodo}
            onChange={handleChange}
            className="mb-3 bg-body-secondary"
          />
        </Col>
        <Col xs="12" md="2">
          <Button variant="warning" type="submit" className="add-todo-button">
            <PlusCircleFill className="buttonIcon" />
            <span>Add</span>
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddNewTodo;
