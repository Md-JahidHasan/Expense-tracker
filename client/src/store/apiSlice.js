import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl:'https://expensetracker-6558.onrender.com'}),
    endpoints: (builder)=>({
        // get Categories
        getCategories: builder.query({
            // https://expensetracker-6558.onrender.com/api/categories
            query:()=>'/api/categories',
            providesTags:['categories']
        }),

        // get Label
        getLabels: builder.query({
            // https://expensetracker-6558.onrender.com/api/labels
            query:()=>'/api/labels',
            providesTags:['transaction' ]
        }),

        // add new transaction
        addTransaction: builder.mutation({
            query: (initialTransaction)=>({
                // https://expensetracker-6558.onrender.com/api/transaction
                url:'/api/transaction' ,
                method:'POST',
                body:initialTransaction
            }),
            invalidatesTags:['transaction' ]
        }),

        // record Delete
        deleteTransaction: builder.mutation({
            query:(recordDlt)=>({
                // https://expensetracker-6558.onrender.com/api/transaction
                url:'/api/transaction' ,
                method:'DELETE',
                body:recordDlt
            }),
            invalidatesTags:['transaction' ]
        })

    }),
})

export default apiSlice;