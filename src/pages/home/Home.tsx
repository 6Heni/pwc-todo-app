import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import './Home.style.css';

function Home() {
  return (
    <Container>
      <Row>
        <Col
          className="intro"
          xs={{ span: 12, order: 2 }}
          md={{ span: 6, order: 1 }}
        >
          <h1>ToDo App</h1>
          <h4 className="intro-description">
            Organize, prioritize, and manage your tasks and responsibilities
            more effectively
          </h4>
          <Link to="todos">
            <Button variant="warning">Let&apos;s get started</Button>
          </Link>
        </Col>
        <Col
          className="logoCol"
          xs={{ span: 12, order: 1 }}
          md={{ span: 6, order: 2 }}
        >
          <Image src="todo.png" thumbnail width="60%" className="logo" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
