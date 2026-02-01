import React, { useState } from 'react';
import './Fahrzeuge.css';
import FahrzeugeBaseInfo from './Fahrzeuge/FahrzeugeBaseInfo';
import TabAnkauf from './Fahrzeuge/TabAnkauf';
import TabAusstattung from './Fahrzeuge/TabAusstattung';
import TabFahrzeug from './Fahrzeuge/TabFahrzeug';
import TabVerkauf from './Fahrzeuge/TabVerkauf';

const Fahrzeuge = () => {
  // Define option arrays
  const typ1Options = [
    { value: 'pkw', label: 'PKW' },
    { value: 'lkw', label: 'LKW' },
    { value: 'krad', label: 'KRAD' },
    { value: 'womo', label: 'WOMO' }
  ];

  const typ2Options = [
    { value: 'cabrio', label: 'Cabrio' },
    { value: 'pickup', label: 'Pickup' },
    { value: 'anhaenger', label: 'PKW-Anhänger' },
    { value: 'rechnungsnummer', label: 'Rechnungsnummer' },
    { value: 'roadster', label: 'Roadster' },
    { value: 'sportwagen', label: 'Sportwagen' },
    { value: 'van', label: 'Van' },
    { value: 'andere', label: 'Andere' }
  ];

  const fahrzeugOptions = [
    { value: 'audi', label: 'Audi' },
    { value: 'bmw', label: 'BMW' },
    { value: 'mercedes', label: 'Mercedes' },
    { value: 'volkswagen', label: 'Volkswagen' },
    { value: 'ford', label: 'Ford' },
    { value: 'opel', label: 'Opel' }
  ];

  const farbeOptions = [
    { value: 'schwarz', label: 'Schwarz' },
    { value: 'weiss', label: 'Weiß' },
    { value: 'grau', label: 'Grau' },
    { value: 'silber', label: 'Silber' },
    { value: 'blau', label: 'Blau' },
    { value: 'rot', label: 'Rot' },
    { value: 'gruen', label: 'Grün' }
  ];

  const [formData, setFormData] = useState({
    nr1: '',
    nr2: '',
    typ1: '',
    typ2: '',
    fahrzeug: '',
    detail1: '',
    detail2: '',
    farbe: ''
  });

  const tabNames = [
    "Ankauf", "Verkauf", "Fahrzeug", "Ausstattung"
  ]

  const [currentTab, setCurrentTab] = useState('Verkauf');
  
  const handleTabClick = (tab: string) => {
    setCurrentTab(tab);
    // Keep menu open
  };

  const openTab = () => {
    switch (currentTab){
      case "Ankauf":
        return <TabAnkauf />;
      case "Verkauf":
        return <TabVerkauf />;
      case "Fahrzeug":
        return <TabFahrzeug />;
      case "Ausstattung":
        return <TabAusstattung />;
      default:
        return null;
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page-content">
      <h2>Fahrzeuge</h2>
      <FahrzeugeBaseInfo
        formData={formData}
        handleChange={handleChange}
        typ1Options={typ1Options}
        typ2Options={typ2Options}
        fahrzeugOptions={fahrzeugOptions}
        farbeOptions={farbeOptions}
      />
      <div className="tab">
        {tabNames.map(tab => (
          <button
            key={tab}
            className={`tablinks${currentTab === tab ? ' active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tabcontent">
        {openTab()}
      </div>
    </div>
  );
};

export default Fahrzeuge;