import React from 'react';
import { Navbar, Hero, Footer, Features } from './components';
import '../src/assets/styles/styles.css';

function App() {
  return (
    <>
      <div className="footer-push">
        <Navbar />
        <div>
          <div className="welcome welcome-nightly">
            <Hero />
            <Features />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
