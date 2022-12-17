import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:8080'}),
    endpoints: (builder)=>({
        // get Categories
        getCategories: builder.query({
            // http://localhost:8080/api/categories
            query:()=>'/api/categories',
            providesTags:['categories']
        }),

        // get Label
        getLabels: builder.query({
            // http://localhost:8080/api/labels
            query:()=>'/api/labels',
            providesTags:['transaction' ]
        }),

        // add new transaction
        addTransaction: builder.mutation({
            query: (initialTransaction)=>({
                // http://localhost:8080/api/transaction
                url:'/api/transaction' ,
                method:'POST',
                body:initialTransaction
            }),
            invalidatesTags:['transaction' ]
        }),

        // record Delete
        deleteTransaction: builder.mutation({
            query:(recordDlt)=>({
                // http://localhost:8080/api/transaction
                url:'/api/transaction' ,
                method:'DELETE',
                body:recordDlt
            }),
            invalidatesTags:['transaction' ]
        })

    }),
})

export default apiSlice;