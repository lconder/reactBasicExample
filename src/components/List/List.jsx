import {
    Box,
    Paper,
    Typography,
    TableContainer,
    TableRow,
    TableCell,
    Table,
    TableHead,
    TableBody
} from '@material-ui/core';
import { useState, useEffect } from 'react';
import { getVideogames } from './service';



const List = () => {

    const get = async () => {
        setRows(await getVideogames());
    };

    const [rows, setRows] = useState([]);

    useEffect(() => {
        get()
    });
    
    return (
        <Paper elevation={6}>
            <Box p={1}>
                <Typography variant="h5">Lista de Videojuegos</Typography>
                <TableContainer component={Paper}>
                <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell align="right">Categoría</TableCell>
                        <TableCell align="right">Precio</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.category}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </Box>
        </Paper>
    );
}

export default List;