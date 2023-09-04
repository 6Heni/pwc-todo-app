import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://apicallinterview.azurewebsites.net/todoitems',
  }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      // query: (queryParams: QueryParams = initialQueryParams) => {
      //   const { selectedGenres, sortBy, sortOrder, searchValue } = queryParams;
      //   let queryString = `?sortBy=${sortBy}&sortOrder=${sortOrder}`;
      //   if (selectedGenres.length > 0) {
      //     queryString += `&filter=${selectedGenres.join(',')}`;
      //   }
      //   if (searchValue) {
      //     queryString += `&search=${searchValue}&searchBy=title`;
      //   }
      //   return queryString;
      // },
      query: () => '',
      // transformResponse: (responseData: ResponseDataType) => responseData.data,
      providesTags: ['Todos'],
    }),
    // addMovie: builder.mutation({
    //   query: (movie) => ({
    //     url: ``,
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: movie,
    //   }),
    //   invalidatesTags: ['Todos'],
    // }),
    // updateMovie: builder.mutation({
    //   query: (movie) => ({
    //     url: ``,
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: movie,
    //   }),
    //   invalidatesTags: ['Todos'],
    // }),
    // deleteMovie: builder.mutation({
    //   query: (movieId) => ({
    //     url: `${movieId}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Todos'],
    // }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetTodosQuery,
  // useAddMovieMutation,
  // useUpdateMovieMutation,
  // useDeleteMovieMutation,
} = dataAPI;
