import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Row, Container } from 'react-bootstrap';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';


function App() {
  return (
    <div className="App">
      <Container>

        {/* Header */}
        <Row className="Header">
            <Header />
        </Row>

        {/* Skills & Interests */}
        <Row className="mb-5 Section">
          <Router history={history}>
            <Routes />
          </Router>
        </Row>

      </Container>
    </div>
  );
}

export default App;
