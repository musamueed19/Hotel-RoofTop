import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: ({ search = "", category = "", location = "" }) =>
        `/blogs?search=${search}&category=${category}&location=${location}`,
    }),
    fetchBlogById: builder.query({
      query: (id) => `/blogs/${id}`
    })
  }),
});

export const {useFetchBlogsQuery, useFetchBlogByIdQuery, useLazyFetchBlogByIdQuery, useLazyFetchBlogsQuery} = blogApi;
