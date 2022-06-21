import './App.css';
import { Container } from 'react-bootstrap';
import Home from './Components/Pages/Home';

function App() {
  return (
    <Container className="container-home" fluid={true}>
      <Home />
    </Container>
  );
}

export default App;
