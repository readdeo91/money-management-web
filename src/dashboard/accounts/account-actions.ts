import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import {RootState} from '../../store/store'
import accountSlice from "./accountSlice";
import AccountService from "./accountService";
import {EntityModelAccount, GetAllAccounts1ApiArg, useGetAllAccounts1Query} from "../../store/moneyManagementApiGenerated";

export const accountActions = accountSlice.actions;

export const fetchAccounts=(reload: boolean):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        if(getState().accounts.accounts.length===0 || reload){
            const pageable: GetAllAccounts1ApiArg = {
                pageable: {
                    page: 1,
                    size: 10
                },
            };
            let query = useGetAllAccounts1Query(pageable)

            const response: EntityModelAccount[] = await AccountService.getAllAccounts();
            dispatch(accountActions.setAccounts(response))
        }
    }
}
// export const fetchParticularAccount=(todo_id:number):ThunkAction<void,RootState,unknown,AnyAction>=>{
//     return async(dispatch,getState)=>{
//         const response:EntityModelAccount=await AccountService.getParticularAccount(todo_id);
//         dispatch(accountActions.setParticularAccount(response))
//     }
// }
