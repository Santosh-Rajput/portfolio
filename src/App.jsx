import { BrowserRouter as Router } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <Router>
        <div className='bg-hero-pattern bg-cover z-0 bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
      <div className='relative z-0 bg-primary'>
        <About />
        <Experience />
        <Tech />
        <Works />
      </div>
        {/* <Feedbacks /> */}
        <div className='relative z-0 bg-primary'>
          <Contact />
          <StarsCanvas />
        </div>
        
    </Router>
  );
}

export default App;
