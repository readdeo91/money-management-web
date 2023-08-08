import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import Paper from '@mui/material/Paper';
import {
    CollectionModelEntityModelAccount, EntityModelAccount,
    EntityModelTransaction,
    GetTransactionPageApiArg,
    GetTransactionPageApiResponse,
    moneyManagementApi,
    useGetAllAccounts1Query,
    useGetTransactionPageQuery
} from "../../store/moneyManagementApiGenerated";
import {useAppDispatch} from "../../store/hooks";
import TablePagination from '@mui/material/TablePagination';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    Typography
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import NewTransaction from "./NewTransaction";
import {ComponentProps} from "react";

let transactions: GetTransactionPageApiResponse = {
    _embedded: {
        transactions: [{
            id: 0,
            description: "Loading",
            amount: 0,
            dateTime: "Loading",
            sourceAccount: 1,
            mainCategory: 2
        }]
    }
};

let accounts: CollectionModelEntityModelAccount = {_embedded: {accounts: []}};

function getAccountName(id: number) {
    return accounts?._embedded?.accounts?.find(obj => obj.id === id)?.name;
}

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

let totalElements = 0;

let pageArgs : GetTransactionPageApiArg = {
        page: 0,
        size: 10
};


export default function Transactions() {
    let newTransactions = [NewTransaction,NewTransaction]
    const [selectedAccount, setSelectedAccount] = React.useState("");
    const dispatch = useAppDispatch();
    const {
        data: accountsData,
        isLoading: accountsIsLoading,
        isSuccess: accountsIsSuccess,
        isError: accountsIsError,
        error: accountsError
    } = useGetAllAccounts1Query({pageable: {}})
    if (accountsIsSuccess) {
        if (accountsData !== undefined) {
            accounts = accountsData
        }
    } else if (accountsIsError) {
        // TODO error toast
    }

    const {
        data: transactionsData,
        isLoading: transactionsIsLoading,
        isSuccess: transactionsIsSuccess,
        isError: transactionsIsError,
        error: transactionsError
    } = useGetTransactionPageQuery(pageArgs)

    if (transactionsIsSuccess) {
        if (transactionsData !== undefined) {
            transactions = transactionsData
        }
        if (transactionsData.page !== undefined && transactionsData.page.totalElements !== undefined) {
            totalElements = transactionsData.page.totalElements
        }
    } else if (transactionsIsError) {
        // TODO error toast
    }

    const addAccount = (newTransaction: EntityModelTransaction) => {
        const patchCollection = dispatch(
            moneyManagementApi.util.updateQueryData('getTransactionPage', pageArgs, (draft) => {
                draft?._embedded?.transactions?.push(newTransaction)
            })
        )
    }

    const refresh = () => {
        dispatch(moneyManagementApi.util.invalidateTags(["transactions"]));
    }

    function handlePageChange(event: any, newPage: any) {
        pageArgs = {
            page: newPage,
            size: pageArgs.size
        }
        dispatch(moneyManagementApi.util.invalidateTags(["transactions"]));
    }

    function handleSizeChange(event: any) {
        pageArgs = {
            page: pageArgs.page,
            size: parseInt(event.target.value)
        }
        dispatch(moneyManagementApi.util.invalidateTags(["transactions"]));
    }

    return (
        <React.Fragment>
            <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                {selectedAccount}
                <Title>Transactions <button onClick={refresh}>Refresh</button></Title>
                <Typography variant="h6" gutterBottom>
                    Create transaction
                </Typography>
                {/*{newTransactions.map((comp, i) => React.createElement<ComponentProps>(comp, { key: i, id: i}))}*/}
            </Paper>

            <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                <Title>Transactions <button onClick={refresh}>Refresh</button></Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>DateTime</TableCell>
                            <TableCell>Source</TableCell>
                            <TableCell>Destination</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Subcategory</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions!._embedded!.transactions!.map((transaction: EntityModelTransaction) => (
                            <TableRow key={transaction.id}>
                                <TableCell>{transaction.description}</TableCell>
                                <TableCell>{transaction.amount}</TableCell>
                                <TableCell>{transaction.dateTime}</TableCell>
                                <TableCell>{getAccountName(transaction.sourceAccount)}</TableCell>
                                <TableCell>{transaction.destinationAccount ? getAccountName(transaction.destinationAccount) : ""}</TableCell>
                                <TableCell>{transaction.mainCategory}</TableCell>
                                <TableCell>{transaction.subCategory}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    component="div"
                    count={totalElements}
                    page={pageArgs.page!}
                    onPageChange={handlePageChange}
                    rowsPerPage={pageArgs.size!}
                    onRowsPerPageChange={handleSizeChange}
                />
            </Paper>
        </React.Fragment>
    );
}
