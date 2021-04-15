import './App.css';
import {
  Button,
  Container
} from '@material-ui/core';
import Component1 from './components/component1/Component1';
import Component2 from './components/component2/Component2';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState(true);

  const click = () => {
    console.log(page);
    setPage(!page);
  }

  return (
    <Container fixed>
        <h1>Hola mundo!</h1>
        {page && <Component1/>}
        {!page && <Component2/>}
        <Button
          variant="contained"
          // onClick={ () => setPage(!page) }
          onClick={click}
        >
          Cambia
        </Button>
    </Container>
  );
}

export default App;
