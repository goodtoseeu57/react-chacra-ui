import {useEffect, useState} from 'react'
import Item from './item'
import axios from 'axios'
import {usePosts} from './graph-ql-request'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Spinner, TableContainer,
} from '@chakra-ui/react'

export interface GithubIssue {
    created_at: string
    number: string
    state: string
    title: string
}

const List = () => {
    const handleClick = (number: string) => console.log(number)
    const {data, isLoading, error} = usePosts('data')
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>To convert</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {isLoading
                        ?
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                        :
                        data.map((d: any) => (
                            <Tr key={d.id}>
                                <Td> {d.id}</Td>
                                <Td>{d.title}</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
}

export default List
