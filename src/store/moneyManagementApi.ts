// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an moneyManagementApi api service that we'll inject endpoints from the generated api
export const moneyManagementPlaceHolderApi = createApi({
    reducerPath: 'moneyManagementApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' ,
        prepareHeaders: (headers) => {
            headers.set('Authorization', "Bearer " + localStorage.getItem('auth'));
            return headers;
        }}),
    endpoints: () => ({}),
})