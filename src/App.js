import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import FirstSection from './components/FirstSection';
import { Container, Row } from 'react-bootstrap';
import SecondSection from './components/SecondSection';

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
          <FirstSection />
        </Row>

        {/* Education & Work */}
        <Row className="mb-5 Section">
          <SecondSection />
        </Row>

        {/* Footer */}
        <Row>
          <Footer />
        </Row>

      </Container>
    </div>
  );
}

export default App;
