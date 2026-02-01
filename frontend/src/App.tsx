import React, { useState } from 'react';
import './App.css';

// Import your page components
import Fahrzeuge from './pages/Fahrzeuge';
import Verkaeufer from './pages/Verkaeufer';
import Kunden from './pages/Kunden';
import Verkauf from './pages/Verkauf';
import Kassenbuch from './pages/Kassenbuch';
import Kommission from './pages/Kommission';
import Internet from './pages/Internet';
import Einstellungen from './pages/Einstellungen';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('fahrzeuge');


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (page: string) => {
    setCurrentPage(page);
    // Keep menu open
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'fahrzeuge':
        return <Fahrzeuge />;
      case 'verkaeufer':
        return <Verkaeufer />;
      case 'kunden':
        return <Kunden />;
      case 'verkauf':
        return <Verkauf />;
      case 'kassenbuch':
        return <Kassenbuch />;
      case 'kommission':
        return <Kommission />;
      case 'internet':
        return <Internet />;
      case 'einstellungen':
        return <Einstellungen />;
      default:
        return <Fahrzeuge />;
    }
  };

  return (
    <div className="App">
      {/* Overlay for mobile - closes menu when clicked */}
      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
      
      {/* Side Menu */}
      <nav className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <h2>Autohändler App</h2>
          <button className="menu-toggle" onClick={toggleMenu}>
            {/* Arrow is created with CSS ::before pseudo-element */}
          </button>
        </div>
        <ul className="menu-items">
          <li><button onClick={() => handleMenuClick('fahrzeuge')} className={currentPage === 'fahrzeuge' ? 'active' : ''}>Fahrzeuge</button></li>
          <li><button onClick={() => handleMenuClick('verkaeufer')} className={currentPage === 'verkaeufer' ? 'active' : ''}>Verkäufer</button></li>
          <li><button onClick={() => handleMenuClick('kunden')} className={currentPage === 'kunden' ? 'active' : ''}>Kunden</button></li>
          <li><button onClick={() => handleMenuClick('verkauf')} className={currentPage === 'verkauf' ? 'active' : ''}>Verkauf</button></li>
          <li><button onClick={() => handleMenuClick('kassenbuch')} className={currentPage === 'kassenbuch' ? 'active' : ''}>Kassenbuch</button></li>
          <li><button onClick={() => handleMenuClick('kommission')} className={currentPage === 'kommission' ? 'active' : ''}>Kommission</button></li>
          <li><button onClick={() => handleMenuClick('internet')} className={currentPage === 'internet' ? 'active' : ''}>Internet</button></li>
          <li><button onClick={() => handleMenuClick('einstellungen')} className={currentPage === 'einstellungen' ? 'active' : ''}>Einstellungen</button></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className={`main-content ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="content">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;