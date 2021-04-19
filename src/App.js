import './App.css';
import {
  Container
} from '@material-ui/core';
import Add from './components/Add/Add';
import List from './components/List/List';
import Bar from './components/Bar/Bar';

function App() {

  return (
    <>
      <Bar/>
      <Container fixed>
        <Add/>
        <List/>
      </Container>
    </>
  );
}

export default App;
