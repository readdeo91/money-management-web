import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import Paper from '@mui/material/Paper';
import {
    CollectionModelEntityModelAccount,
    EntityModelAccount,
    GetAllAccounts1ApiArg, moneyManagementApi,
    useGetAllAccounts1Query
} from "../../store/moneyManagementApiGenerated";
import {useAppDispatch} from "../../store/hooks";

let accounts: CollectionModelEntityModelAccount = {_embedded: {accounts: []}};

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export default function Accounts() {
    // const dispatch = useAppDispatch();
    // accounts = useAppSelector(state => state.accounts.accounts);
    // dispatch(fetchAccounts(false));
    //
    // const btnClk = () => {
    //     dispatch(fetchAccounts(true));
    // }


    const dispatch = useAppDispatch();
    const pageable: GetAllAccounts1ApiArg = {
        pageable: {
        },
    };
    const {
        data: accountsData,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetAllAccounts1Query(pageable)


    if (isLoading) {
         accounts = {_embedded: { accounts: [{ id: 0, name: "Loading", currency: "Loading", description: "Loading"}]}};
    } else if (isSuccess) {
        if (accountsData !== undefined) {
            accounts = accountsData
        }
    } else if (isError) {
        // TODO error toast
    }

    const addAccount = (newAccount: EntityModelAccount) => {
        const patchCollection = dispatch(
            moneyManagementApi.util.updateQueryData('getAllAccounts1', pageable, (draft) => {
                draft?._embedded?.accounts?.push(newAccount)
            })
        )
    }

    const refresh = () => {
        dispatch(moneyManagementApi.util.invalidateTags(["account"]));
    }

    return (
        <React.Fragment>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Title>Accounts <button onClick={refresh}>Refresh</button></Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Balance</TableCell>
                        <TableCell>Currency</TableCell>
                        <TableCell>Credit</TableCell>
                        <TableCell>Initial credit</TableCell>
                        <TableCell>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {accounts!._embedded!.accounts!.map((account: EntityModelAccount) => (
                        <TableRow key={account.id}>
                            <TableCell>{account.name}</TableCell>
                            <TableCell>{account.balance}</TableCell>
                            <TableCell>{account.currency}</TableCell>
                            <TableCell>{account.credit}</TableCell>
                            <TableCell>{account.initialCredit}</TableCell>
                            <TableCell>{account.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </Paper>
        </React.Fragment>
    );
}
