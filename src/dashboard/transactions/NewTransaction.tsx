import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select} from "@mui/material";
import {EntityModelAccount, Transaction, useGetAllAccounts1Query} from "../../store/moneyManagementApiGenerated";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import * as React from "react";

let newTransaction: Transaction = {
    amount: 0,
    dateTime: "",
    description: "",
    sourceAccount: 0,
    destinationAccount: undefined,
    mainCategory: 0,
    subCategory: undefined
}

export default function NewTransaction(id: number) {
    console.log("ID: ", id)
const {
    data: accountsResponse,
    isLoading: accountsIsLoading,
    isSuccess: accountsIsSuccess,
    isError: accountsIsError,
    error: accountsError
} = useGetAllAccounts1Query({pageable: {}})

if (accountsIsSuccess) {
    console.log("accounts loaded")
    // if (accountsData !== undefined) {
    //     accounts = accountsData
    // }
} else if (accountsIsError) {
    // TODO error toast
}

    let selectedAccount = undefined

    const handleChangeAccount = (
        event: any
    ) => {
        console.log("handleMuiSelectOnChange", event);
        selectedAccount = event.target.value
    };

    return (
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item xs={2} sm={2}>
                    <TextField
                        required
                        id="amount"
                        name="amount"
                        label="amount"
                        type="number"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={newTransaction.amount}
                    />
                </Grid>
                <Grid item xs={2} sm={2}>
                    <FormControl fullWidth>
                        <InputLabel id="account-select-label">AccountS</InputLabel>
                        <Select
                            labelId="account-select-label"
                            id="account-select"
                            value={newTransaction.sourceAccount}
                            label="Account"
                            onChange={handleChangeAccount}
                        >
                            {accountsResponse?._embedded?.accounts?.map((account: EntityModelAccount) => <MenuItem key={account.id} value={account.id}>{account.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker value={newTransaction.dateTime}/>
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={2} sm={2}>
                    <FormControl fullWidth>
                        <InputLabel id="category-select-label">Category</InputLabel>
                        <Select
                            labelId="category-select-label"
                            id="category-select"
                            value={selectedAccount}
                            label="Category"
                            onChange={handleChangeAccount}
                        >
                            {accountsResponse?._embedded?.accounts?.map((account: EntityModelAccount) => <MenuItem key={account.id} value={account.name}>{account.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2} sm={2}>
                    <FormControl fullWidth>
                        <InputLabel id="budget-select-label">Budget</InputLabel>
                        <Select
                            labelId="budget-select-label"
                            id="budget-select"
                            // value={}
                            label="Budget"
                            onChange={handleChangeAccount}
                        >
                            {accountsResponse?._embedded?.accounts?.map((account: EntityModelAccount) => <MenuItem key={account.id} value={account.name}>{account.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                    />
                </Grid>
               <Grid item >
<button onClick={() => console.log(newTransaction)}></button>
               </Grid>
            </Grid>
        </React.Fragment>
    )
}