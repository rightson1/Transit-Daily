import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('2 Hours', 100, 80, 50),
    createData('4 Hours', 200, 160, 100),
    createData('6 Hours', 300, 80, 50),
    createData('8 Hours', 100, 80, 50),
    createData('10 Hours', 100, 80, 50),


];

export default function Rates({ rates }) {
    return (
        <TableContainer component={Paper} className='p-5  p-10'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Booking (Houres)</TableCell>
                        <TableCell align="right">Class&nbsp; A</TableCell>
                        <TableCell align="right">Class&nbsp; B</TableCell>
                        <TableCell align="right">Class&nbsp; C</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rates.map((item) => {
                        const { fields: row } = item;

                        return (
                            <TableRow
                                key={row.title}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">{row.classA}</TableCell>
                                <TableCell align="right">{row.classB}</TableCell>
                                <TableCell align="right">{row.classC}</TableCell>

                            </TableRow>
                        )
                    }
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}