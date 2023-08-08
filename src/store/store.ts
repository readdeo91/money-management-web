import {configureStore} from "@reduxjs/toolkit";
import accountSlice from "../dashboard/accounts/accountSlice";
import {moneyManagementPlaceHolderApi} from "./moneyManagementApi";

const store = configureStore(
    {
        reducer: {
            accounts: accountSlice.reducer,
            [moneyManagementPlaceHolderApi.reducerPath]: moneyManagementPlaceHolderApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(moneyManagementPlaceHolderApi.middleware),
    }
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;