import React from 'react';
import './TabVerkauf.css';
import '../../App.css'; // Import the CSS file to make CSS variables available
import { formatDateForInput } from '../../utils';


interface Vehicle {
  [key: string]: any;
}

interface TabAnkaufProps {
  vehicleData: Vehicle;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const TabAnkauf: React.FC<TabAnkaufProps> = ({ vehicleData, handleChange }) => {
  return (
    <form className="tabVerkauf-form">
      <div className="tabverkauf-container">

        <div className="tabverkauf-form-section">
        <div className="form-row">
          <label className="form-label"></label>
            <div className="input-group single">
              <input
              type="text"
              name="ankaufText1"
              value={vehicleData.ankaufText1 || ''}
              onChange={handleChange}
              className="form-input"
              />
              </div>
          </div>
          <div className="form-row">
            <label className="form-label"></label>
            <div className="input-group single">
            <input
            type="text"
            name="ankaufText2"
            value={vehicleData.ankaufText2 || ''}
            onChange={handleChange}
            className="form-input"
            >
            </input>
            </div>
          </div>
          <div className="form-row">
            <label className="form-label"></label>
            <div className="input-group single">

            <input
            type="text"
            name="ankaufText3"
            value={vehicleData.ankaufText3 || ''}
            onChange={handleChange}
            className="form-input"
            >
            </input>
            </div>
          </div>
          <div className="form-row">
            <label className="form-label">Straße</label>
            <div className="input-group single">

            <input
            type="text"
            name="ankaufStrasse"
            value={vehicleData.ankaufStrasse || ''}
            onChange={handleChange}
            className="form-input"
            >
            </input>
            </div>
          </div>
          <div className="form-row">
            <label className="form-label">Ort</label>
            <div className="input-group single">

            <input
            type="text"
            name="ankaufOrt"
            value={vehicleData.ankaufOrt || ''}
            onChange={handleChange}
            className="form-input"
            ></input>
            <input
            type="text"
            name="ankaufPlz"
            value={vehicleData.ankaufPlz || ''}
            onChange={handleChange}
            className="form-input"              
            ></input>
            <input
            type="text"
            name="ankaufLand"
            value={vehicleData.ankaufLand || ''}
            onChange={handleChange}
            className="form-input"
            >
            </input>
            </div>
          </div>
          <div className="form-row">
            <label className="form-label">Telefon/Fax</label>
            <div className="input-group single">

            <input
            type="text"
            name="ankaufTelefon"
            value={vehicleData.ankaufTelefon || ''}
            onChange={handleChange}
            className="form-input"
            >
            </input>
            </div>
          </div>

        <div style={{ height: "1.5rem" }} />
        <div className="tabverkauf-form-section">

        <div className="form-row">
            <label className="form-label">Netto-EK</label>
            <div className="input-group single">

            <input
            type="text"
            name="nettoEk"
            value={vehicleData.nettoEk || 0}
            onChange={handleChange}
            className="form-input"
            >
            </input>

            <label className="form-label">Kaufdatum</label>
            <input
            type="date"
            name="kaufdatum"
            value={formatDateForInput(vehicleData.kaufdatum) || ''}
            onChange={handleChange}
            className="form-input"
            >
            </input>

            <label className="form-label">Abmeldung</label>
            <input
            type="date"
            name="abmeldung"
            value={formatDateForInput(vehicleData.abmeldung) || ''}
            onChange={handleChange}
            className="form-input"
            >
            </input>

            </div>
            </div>

          <div className="form-row">
            <label className="form-label">MwSt</label>
            <div className="input-group single">

            <input
            type="text"
            name="ankaufMwst"
            value={vehicleData.ankaufMwst || 0}
            onChange={handleChange}
            className="form-input"
            >
            </input>

            <label className="form-label">Währung</label>
            <select
              name="ankaufWaehrung"
              value={vehicleData.ankaufWaehrung || ''}
              onChange={handleChange}
              className="form-select"
            >
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
            </select>
          </div>
          </div>

          <div className="form-row">
            <label className="form-label">Brutto-EK</label>
            <div className="input-group single">

            <input
            type="text"
            name="bruttoEk"
            value={vehicleData.bruttoEk || 0}
            onChange={handleChange}
            className="form-input"
            >
            </input>

            <label className="form-label">Zahlungsart</label>
            <select
              name="ankaufZahlungsart"
              value={vehicleData.ankaufZahlungsart || ''}
              onChange={handleChange}
              className="form-select"
            >
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
            </select>
          </div>
          </div>
          </div>

          
            
          </div>
          
        
        {/* Right side button panel */}
        <div className="button-panel">
          <button type="button" className="verkauf-button">
            Kaufvertrag
          </button>
          <button type="button" className="verkauf-button">
            Zahlung buchen
          </button>
        </div>
      </div>
    </form>
  );
};

export default TabAnkauf;
