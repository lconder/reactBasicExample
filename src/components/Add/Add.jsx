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
import useForm from './useForm';
import validate from './validator';
import { save } from './service';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(6),
      margin: "3% auto 3% auto",
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
    error : {
        color: "#ff0000"
    }
  }));

const Add = () => {
    const classes = useStyles();
    const { handleChange, handleSubmit, values, errors } = useForm(
        () => create(),
        validate
    );

    async function create() {
        await save(values);
    }

    return (
        <Paper elevation={6} className={classes.paper}>
            <Box p={1}>
            <Typography component="div">
                <Box fontSize="h4.fontSize" textAlign="center">
                    Nuevo Videojuego
                </Box>
            </Typography>
                <form noValidate onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <div className={classes.inputContainer}>
                                <TextField
                                    id="name"
                                    name="name"
                                    label="Nombre"
                                    onChange={handleChange}
                                    value={values.name}
                                />
                                { errors && errors.error_name && 
                                    (<p className={classes.error}>{errors.error_name}</p>)
                                }
                            </div>
                            <div className={classes.inputContainer}>
                                <InputLabel id="category-label">Categoría</InputLabel>
                                <Select
                                    labelId="category-label"
                                    id="category"
                                    name="category"
                                    onChange={handleChange}
                                    value={values.category}
                                >
                                    <MenuItem value={1}>Categoría 1</MenuItem>
                                    <MenuItem value={2}>Categoría 2</MenuItem>
                                    <MenuItem value={3}>Categoría 3</MenuItem>
                                </Select>
                                { errors && errors.error_category && 
                                    (<p className={classes.error}>{errors.error_category}</p>)
                                }
                            </div>
                            <div className={classes.inputContainer}>
                                <TextField
                                    id="price"
                                    name="price"
                                    label="Precio"
                                    type="number"
                                    onChange={handleChange}
                                    value={values.price}
                                />
                                { errors && errors.error_price && 
                                    (<p className={classes.error}>{errors.error_price}</p>)
                                }
                            </div>
                            <div className={classes.inputContainer}>
                                <Button type="submit" variant="contained" color="primary">
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