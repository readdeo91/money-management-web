import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {EntityModelAccount} from "../../store/moneyManagementApiGenerated";

const initialAccountsState = {
   accounts: [] as EntityModelAccount[]
};

const accountSlice = createSlice({
    name:'accounts',
    initialState:initialAccountsState,
    reducers:{
        setAccounts(state,action:PayloadAction<EntityModelAccount[]>){
            state.accounts = action.payload;
        },
        // setParticularAccount(state,action:PayloadAction<EntityModelAccount>){
        //     state.particular_account=action.payload;
        // }
    }
});
export default accountSlice;