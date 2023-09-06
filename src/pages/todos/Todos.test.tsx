import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Todos from './Todos';
import { TodoData } from '../../types';

type MockTodoCardProps = { todos: TodoData[] };

const mockTodos = [
  {
    id: 1,
    name: 'Test todo 1',
    isComplete: false,
  },
  {
    id: 2,
    name: 'Test todo 2',
    isComplete: true,
  },
];

const mockUseGetTodosQuery = vi.fn();

vi.mock('../../dataAPI', async () => {
  const actual = (await vi.importActual('../../dataAPI')) as object;
  return {
    ...actual,
    useGetTodosQuery: () => mockUseGetTodosQuery(),
  };
});

vi.mock('../../components/AddNewTodo/AddNewTodo', () => ({
  default: () => {
    return <div>MockAddNewTodo</div>;
  },
}));

vi.mock('../../components/TodoContainer/TodoContainer', () => ({
  default: ({ todos }: MockTodoCardProps) => {
    return todos.map((todo) => {
      return <div key={todo.id}>todo name: {todo.name}</div>;
    });
  },
}));

describe('Todos page tests', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render todo list after fetching from API', async () => {
    mockUseGetTodosQuery.mockReturnValue({
      data: mockTodos,
      isLoading: false,
      isSuccess: false,
      isError: false,
      error: null,
    });

    render(<Todos />);

    const todos = screen.getAllByText(/todo name/);
    const todo1 = screen.getByText(new RegExp(mockTodos[0].name));
    const todo2 = screen.getByText(new RegExp(mockTodos[1].name));

    expect(mockUseGetTodosQuery).toHaveBeenCalled();
    expect(todos).toHaveLength(2);
    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeInTheDocument();
  });

  it('should render loading text while fetching from API is in progress', async () => {
    mockUseGetTodosQuery.mockReturnValue({
      data: [],
      isLoading: true,
      isSuccess: false,
      isError: false,
      error: null,
    });

    render(<Todos />);

    const loadingText = screen.getByText(/Loading todos/);

    expect(mockUseGetTodosQuery).toHaveBeenCalled();
    expect(loadingText).toBeInTheDocument();
  });

  it('should render error message after fetching from API is failed', async () => {
    mockUseGetTodosQuery.mockReturnValue({
      data: [],
      isLoading: false,
      isSuccess: false,
      isError: true,
      error: 'Cannot load data',
    });

    render(<Todos />);

    const errorText = screen.getByText(/Cannot load data/);

    expect(mockUseGetTodosQuery).toHaveBeenCalled();
    expect(errorText).toBeInTheDocument();
  });
});
