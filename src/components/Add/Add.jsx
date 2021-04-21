import {
    Box,
    Button,
    Grid,
    InputLabel,
    TextField,
    MenuItem,
    Paper,
    Select,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(6),
      margin: "3% auto 0 auto",
      maxWidth: "800px",
      justifyContent: "center",
    },
    inputContainer: {
      width: "100%",
      margin: "5% 0 0 0",
    },
    button: {
      width: "100%",
      margin: "10% 0 0 0",
    },
  }));

const Add = () => {
    const classes = useStyles();
    return (
        <Paper elevation={6} className={classes.paper}>
            <Box p={1}>
            <Typography component="div">
                <Box fontSize="h4.fontSize" textAlign="center">
                    Nuevo Videojuego
                </Box>
            </Typography>
                <form>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <div className={classes.inputContainer}>
                                <TextField
                                    id="name"
                                    name="name"
                                    label="Nombre"
                                />
                            </div>
                            <div className={classes.inputContainer}>
                                <InputLabel id="category-label">Categoría</InputLabel>
                                <Select
                                    labelId="category-label"
                                    id="category"
                                >
                                    <MenuItem value={1}>Categoría 1</MenuItem>
                                    <MenuItem value={2}>Categoría 2</MenuItem>
                                    <MenuItem value={3}>Categoría 3</MenuItem>
                                </Select>
                            </div>
                            <div className={classes.inputContainer}>
                                <TextField
                                    id="price"
                                    name="price"
                                    label="Precio"
                                    type="number"
                                />
                            </div>
                            <div className={classes.inputContainer}>
                                <Button variant="contained" color="primary">
                                    Agregar
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Paper>
    );
}

export default Add;