import { apiSlice } from "../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    createCourse: builder.mutation({
      query: (data: any) => ({
        url: "create-course",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
    }),
    getAllCourses: builder.query({
      query: () => ({
        url: "get-courses",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useCreateCourseMutation } = courseApi;
