import {
    Box,
    Button,
    InputLabel,
    TextField,
    MenuItem,
    Paper,
    Select,
    Typography
} from '@material-ui/core';

const Add = () => {
    return (
        <Paper elevation={6}>
            <Box p={1}>
                <Typography variant="h5">Nuevo Videojuego</Typography>
                <form>
                    <TextField
                        id="name"
                        name="name"
                        label="Nombre"
                    />
                    <InputLabel id="category-label">Categoría</InputLabel>
                    <Select
                        labelId="category-label"
                        id="category"
                    >
                        <MenuItem value={1}>Categoría 1</MenuItem>
                        <MenuItem value={2}>Categoría 2</MenuItem>
                        <MenuItem value={3}>Categoría 3</MenuItem>
                    </Select>
                    <TextField
                        id="price"
                        name="price"
                        label="Precio"
                        type="number"
                    />
                    <Button variant="contained" color="primary">
                        Agregar
                    </Button>
                </form>
            </Box>
        </Paper>
    );
}

export default Add;