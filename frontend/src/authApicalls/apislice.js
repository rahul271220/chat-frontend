// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseQuery = fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
    prepareHeaders: (headers) => {
      // ✅ Read from localStorage only when needed
      const stored = localStorage.getItem('loginData');
      if (stored) {
        try {
          const loginData = JSON.parse(stored);
          const token = loginData?.accessToken;
          if (token) {
            headers.set('Authorization', `Bearer ${token}`);
          }
        } catch (e) {
          console.warn('Invalid loginData in localStorage');
        }
      }
  
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  });


  export const apiSlice = createApi({
    reducerPath: 'Products', // The key under which data is stored in Redux
    baseQuery,
    endpoints: (builder) => ({
      getProductList: builder.query({
        query: () => '/products',
      }),
    }),
  });

// ✅ Export the auto-generated hook
export const { useGetProductListQuery } = apiSlice;