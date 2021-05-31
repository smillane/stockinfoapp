import './App.css';
import Search from './Components/Search';
import Container from '@material-ui/core/Container';


function App() {

  return (
    <div>
      <Container maxWidth='lg'>
        <Search />
      </Container>      
    </div>
  );
}

export default App;
