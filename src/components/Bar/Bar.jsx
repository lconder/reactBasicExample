import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography
} from '@material-ui/core';

const Bar = () => {
    return (
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            
          </IconButton>
          <Typography variant="h6" >
            Videojuegos
          </Typography>
          <Button color="inherit">Acerca de</Button>
        </Toolbar>
      </AppBar>
    );
}

export default Bar;