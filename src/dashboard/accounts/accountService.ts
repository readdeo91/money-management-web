import Api from "../../store/api";
import axios from "axios";
import {EntityModelAccount} from "../../store/moneyManagementApiGenerated";

export default{
    async getAllAccounts(){
        // axios.interceptors.request.use(function (config) {
        //     const token = localStorage.getItem('auth');
        //     console.log("token " + token);
        //     config.headers.Authorization = "Bearer " + token;
        //     return config;
        // });
        console.log("Calling accounts");
        let response=await Api().get('/api/accounts');
        return response.data._embedded.accounts;
    },
    async getParticularAccount(todo_id:number){
        let response=await Api().get('todos');
        return response.data.filter((todo:EntityModelAccount)=>todo.id===todo_id)[0];
    }
}