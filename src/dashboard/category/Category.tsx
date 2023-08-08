import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import Paper from '@mui/material/Paper';
import {
    CollectionModelEntityModelAccount, EntityModelCategory,
    EntityModelTransaction, GetAllCategoriesApiResponse,
    GetTransactionPageApiArg, GetTransactionPageApiResponse, moneyManagementApi,
    useGetAllAccounts1Query, useGetAllCategoriesQuery, useGetTransactionPageQuery
} from "../../store/moneyManagementApiGenerated";
import {useAppDispatch} from "../../store/hooks";
import TablePagination, {TablePaginationBaseProps} from '@mui/material/TablePagination';
import {useState} from "react";

let categories: GetAllCategoriesApiResponse = {
    _embedded: {
        categories: []
    }
};

export default function Category() {
    const dispatch = useAppDispatch();
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetAllCategoriesQuery()
    if (isSuccess) {
        if (data !== undefined) {
            categories = data
        }
    } else if (isError) {
        // TODO error toast
    }

    const refresh = () => {
        dispatch(moneyManagementApi.util.invalidateTags(["category"]));
    }

    return (
        <React.Fragment>
            <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                <Title>Accounts <button onClick={refresh}>Refresh</button></Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>ParentId</TableCell>
                            <TableCell>color</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories!._embedded!.categories!.map((category: EntityModelCategory) => (
                            <TableRow key={category.id}>
                                <TableCell>{category.name}</TableCell>
                                <TableCell>{category.parentId}</TableCell>
                                <TableCell>{category.color}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </React.Fragment>
    );
}
