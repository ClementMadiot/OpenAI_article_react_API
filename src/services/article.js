import { createApi } from '@reduxjs/toolkit/query'

export const articleApi = createApi({
  reducerPath: 'articleApi',
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params => `test`)
    })
  })
})