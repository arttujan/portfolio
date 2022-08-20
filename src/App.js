import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import FirstSection from './components/FirstSection';
import { Container, Row } from 'react-bootstrap';
import SecondSection from './components/SecondSection';
import styled from 'styled-components';

const MobileBreakpoint = 768;

const StyledContainer = styled.div.attrs({
  className: 'container'
})`

  @media (max-width: ${MobileBreakpoint}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;



function App() {
  return (
    <div className="App p-4">
      <StyledContainer>

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
        <Row className="mb-5 Section">
          <Footer />
        </Row>

      </StyledContainer>
    </div>
  );
}

export default App;
