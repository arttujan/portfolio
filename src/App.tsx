import { BrowserRouter } from "react-router-dom";
import { Experience, Hero, Navbar, Education } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative">
          <Experience />
          <Education />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
