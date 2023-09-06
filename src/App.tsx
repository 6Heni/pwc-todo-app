import { Route, Routes } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import './App.scss';
import Home from './pages/home/Home';
import NotFound from './pages/notfound/NotFound';
import Todos from './pages/todos/Todos';

function App() {
  return (
    <>
      <Navbar className="bg-primary mb-4 navbar">
        <Container>
          <Navbar.Brand href="/" className="text-light">
            <img
              alt=""
              src="todo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Todo App
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
