import React from 'react';
import './TabVerkauf.css';
import '../../App.css'; // Import the CSS file to make CSS variables available

interface Vehicle {
  [key: string]: any;
}

interface TabAusstattungProps {
  vehicleData: Vehicle;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const TabAusstattung: React.FC<TabAusstattungProps> = ({ vehicleData, handleChange }) => {

  const ausstattungCol1=[
    { label : "ABS", name : "abs"},
    { label : "1x Airbag", name : "airbag1"},
    { label : "2x Airbag", name : "airbag2"},
    { label : "4x Airbag", name : "airbag4"},
    { label : "Alarmanlage", name : "alarmanlage"},
    { label : "Allrad", name : "allrad"},
    { label : "Anhängerkupplung", name : "anhaengerkupplung"},
    { label : "Behindertengerecht", name : "behindertengerecht"},
    { label : "Bordcomputer", name : "bordcomputer"},
    { label : "CD", name : "cd"},
    { label : "Colorglas", name : "colorglas"},
    { label : "Dachträger", name : "dachtraeger"},
    { label : "Einparkhilfe", name : "einparkhilfe"},
    { label : "el. Fensterheber", name : "elFensterheber"},
    { label : "el. Sitz", name : "elSitz"},
    { label : "el. Spiegel", name : "elSpiegel"},
    { label : "el. Wegfahrsperre", name : "elWegfahrsperre"},
    { label : "Katalysator", name : "katalysator"},
    { label : "Klimaanlage", name : "klimaanlage"},
    { label : "Klimaautomatik", name : "klimaautomatik"},
    { label : "Ladebordwand", name : "ladebordwand"},
    { label : "Lederausstattung", name : "lederausstattung"},
  ]

  const ausstattungCol2=[
    { label : "Leichtmetallfelgen", name : "leichtmetallfelgen"},
    { label : "Metallic", name : "metallic"},
    { label : "Navigationssystem", name : "navigationssystem"},
    { label : "Nebelscheinwerfen", name : "nebelscheinwerfen"},
    { label : "Partikelfilter", name : "partikelfilter"},
    { label : "Radio", name : "radio"},
    { label : "Rückbank teilbar", name : "rueckbankTeilbar"},
    { label : "Schiebedach", name : "schiebedach"},
    { label : "Schiebetür", name : "schiebetuer"},
    { label : "Servolenkung", name : "servolenkung"},
    { label : "Sitzheizung", name : "sitzheizung"},
    { label : "Sportausstattung", name : "sportausstattung"},
    { label : "Stabilitätskontrolle", name : "stabilitaetskontrolle"},
    { label : "Standheizung", name : "standheizung"},
    { label : "Taxi", name : "taxi"},
    { label : "Telefon", name : "telefonAusstattung"},
    { label : "Tempomat", name : "tempomat"},
    { label : "Traktionskontrolle", name : "traktionskontrolle"},
    { label : "Trennwand", name : "trennwand"},
    { label : "Tuning", name : "tuning"},
    { label : "Xenonscheinwerfer", name : "xenonscheinwerfer"},
    { label : "Zentralverriegelung", name : "zentralverriegelung"},
  ]

  const ausstattungsInfo = [
    ...ausstattungCol1,
    ...ausstattungCol2,
  ]
  return (
    <form className="tabVerkauf-form">
      <div className="tabverkauf-container">
        <div style={{ display: "flex", gap: "2rem" }}>

          <div className="tabverkauf-form-section">

          {ausstattungCol1.map(ausstattungCol1 => (
            <div className="form-row" key={ausstattungCol1.name}>
              <input
                type="checkbox"
                checked={vehicleData[ausstattungCol1.name] || false}
                onChange={handleChange}
                name={ausstattungCol1.name}
                className="checkbox-input"
              />
              <label className="form-label">{ausstattungCol1.label}</label>
            </div>
          ))}

          </div>

          <div className="tabverkauf-form-section">

          {ausstattungCol2.map(ausstattungCol2 => (
            <div className="form-row" key={ausstattungCol2.name}>
              <input
                type="checkbox"
                checked={vehicleData[ausstattungCol2.name] || false}
                onChange={handleChange}
                name={ausstattungCol2.name}
                className="checkbox-input"
              />
              <label className="form-label">{ausstattungCol2.label}</label>
            </div>
          ))}
          </div>

          <div className="tabverkauf-form-section">


          <div className='form-row'>
          <label className="form-label">Ausstattung:</label>
          </div>
          <textarea
            name="bemerkung"
            value={vehicleData.bemerkung || ''}
            onChange={handleChange}
            className="large-textarea"
            style={{ width: "300px", height: "280px", fontSize: "1rem", padding: "0.5rem", resize: "none" }}
            
            />
            <textarea
            name="ausstattungText1"
            value={vehicleData.ausstattungText1 || ''}
            onChange={handleChange}
            className="large-textarea"
            style={{ width: "300px", height: "100px", fontSize: "1rem", padding: "0.5rem", resize: "none" }}
            
            />
            
          <div className='form-row'>
          <label className="form-label">Bemerkung intern:</label>
          </div>
          <textarea
            name="ausstattungText2"
            value={vehicleData.ausstattungText2 || ''}
            onChange={handleChange}
            className="large-textarea"
            style={{ width: "300px", height: "100px", fontSize: "1rem", padding: "0.5rem", resize: "none" }}
            
            />
            
          </div>
        </div>
      </div>
    </form>
  );
};

export default TabAusstattung;
