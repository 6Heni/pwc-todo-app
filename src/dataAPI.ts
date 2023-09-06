import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { TodoData } from './types';

const URL = 'http://localhost:5173/todoitems';

const staggeredBaseQuery = retry(
  fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Access-Control-Allow-Origin', '*');
      return headers;
    },
  }),
  { maxRetries: 2 }
);

export const dataAPI = createApi({
  baseQuery: staggeredBaseQuery,
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: '',
      }),
      providesTags: ['Todos'],
    }),
    addTodo: builder.mutation({
      query: (todoName: string) => ({
        url: ``,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          name: todoName,
          isComplete: false,
        },
      }),
      invalidatesTags: ['Todos'],
    }),
    updateTodo: builder.mutation({
      query: (todo: TodoData) => ({
        url: `${todo.id}`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation({
      query: (todoId: number) => ({
        url: `${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = dataAPI;
