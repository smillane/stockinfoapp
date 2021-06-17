import './App.css';
import Search from './Components/Search';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './Components/Navbar';


function App() {

  return (
    <div>
      <Container maxWidth='lg'>
        <CssBaseline />
        <Search />
      </Container>      
    </div>
  );
}

export default App;
