import React from 'react';
import './TabVerkauf.css';
import '../../App.css'; // Import the CSS file to make CSS variables available
import { formatDateForInput } from '../../utils';

// Checkbox with label component
export const CheckboxWithLabel = ({ label, checked, onChange, name }: { label: string, checked?: boolean, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void, name?: string }) => (
  <label className="checkbox-label">
    <input type="checkbox" checked={checked} onChange={onChange} name={name} className="checkbox-input" />
    {label}
  </label>
);

// Round checkbox component
export const RoundCheckbox = ({ label, checked, onChange, name }: { label: string, checked?: boolean, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void, name?: string }) => (
  <label className="round-checkbox-label">
    <input type="checkbox" checked={checked} onChange={onChange} name={name} className="round-checkbox-input" />
    {label}
  </label>
);

// Rectangular checkbox with text before
export const RectangularCheckboxBefore = ({ label, checked, onChange, name }: { label: string, checked?: boolean, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void, name?: string }) => (
  <label className="rect-checkbox-before-label">
    {label}
    <input type="checkbox" checked={checked} onChange={onChange} name={name} className="rect-checkbox-input" />
  </label>
);

interface Vehicle {
  [key: string]: any;
}

interface TabVerkaufProps {
  vehicleData: Vehicle;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onSave: () => void;
  isEditing: boolean;
}

const TabVerkauf: React.FC<TabVerkaufProps> = ({ vehicleData, handleChange, onSave, isEditing }) => {
  return (
    <form className="tabVerkauf-form">
      <div className="tabverkauf-container">
        <div className="tabverkauf-form-section">
        <div className="form-row">
        <label className="form-label">Kundenname</label>
          <div className="input-group single">
            <input
              type="text"
              name="kundenname"
              value={vehicleData.kundenname || ''}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
          </div>
        </div>
        <div className="form-row">
        <label className="form-label">Vorname</label>
          <div className="input-group single">
            <input
              type="text"
              name="vorname"
              value={vehicleData.vorname || ''}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
          </div>
        </div>
        <div className="form-row">
        <label className="form-label">Nachname</label>
          <div className="input-group single">
            <input
              type="text"
              name="nachname"
              value={vehicleData.nachname || ''}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
          </div>
        </div>
        <div className="form-row">
        <label className="form-label">Straße</label>
          <div className="input-group single">
            <input
              type="text"
              name="strasse"
              value={vehicleData.strasse || ''}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
          </div>
        </div>
        <div className="form-row">
        <label className="form-label">Ort</label>
          <div className="input-group single">
            <input
              type="text"
              name="plz"
              value={vehicleData.plz || ''}
              onChange={handleChange}
              className="form-input"
              placeholder="PLZ"
            />
            <input
              type="text"
              name="ort"
              value={vehicleData.ort || ''}
              onChange={handleChange}
              className="form-input"
              placeholder="Ort"
            />
            <input
              type="text"
              name="land"
              value={vehicleData.land || ''}
              onChange={handleChange}
              className="form-input"
              placeholder="Land"
            />
          </div>
        </div>
        <div className="form-row">
        <label className="form-label">USt-IdNr</label>
          <div className="input-group single">
            <input
              type="text"
              name="ustIdNr"
              value={vehicleData.ustIdNr || ''}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
          </div>
        </div>
        <div className="form-row">
        <label className="form-label">Telefon/Fax</label>
          <div className="input-group single">
            <input
              type="text"
              name="telefon"
              value={vehicleData.telefon || ''}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
          </div>
        </div>
        
        <div style={{ height: "1.5rem" }} />
        <div className="form-row">
        <label className="form-label">Preis</label>
          <div className="input-group single">
            <input
              type="text"
              name="preis"
              value={vehicleData.preis || 0}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
            <select
              name="preisTyp"
              value={vehicleData.preisTyp || ''}
              onChange={handleChange}
              className="form-select"
            >
              <option value="" disabled hidden></option>
              <option value="netto">Netto</option>
              <option value="brutto">Brutto</option>
            </select>
            <CheckboxWithLabel label="MwSt Ausweis" checked={vehicleData.mwstAusweis || false} onChange={handleChange} name="mwstAusweis"/>
          </div>
        </div>
        <div className="form-row">
        <label className="form-label">Min. Preis</label>
          <div className="input-group single">
            <input
              type="text"
              name="minPreis"
              value={vehicleData.minPreis || 0}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
            <select
              name="minPreisTyp"
              value={vehicleData.minPreisTyp || ''}
              onChange={handleChange}
              className="form-select"
            >
              <option value="" disabled hidden></option>
              <option value="netto">Netto</option>
              <option value="brutto">Brutto</option>
            </select>
            <CheckboxWithLabel label="Nur für Export" checked={vehicleData.nurFuerExport || false} onChange={handleChange} name="nurFuerExport"/>
          </div>
        </div>
        <div className="form-row">
        <label className="form-label">Händler Preis</label>
          <div className="input-group single">
            <input
              type="text"
              name="haendlerPreis"
              value={vehicleData.haendlerPreis || 0}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
            <select
              name="haendlerPreisTyp"
              value={vehicleData.haendlerPreisTyp || ''}
              onChange={handleChange}
              className="form-select"
            >
              <option value="" disabled hidden></option>
              <option value="netto">Netto</option>
              <option value="brutto">Brutto</option>
            </select>
            <CheckboxWithLabel label="Verkauft" checked={vehicleData.verkauft || false} onChange={handleChange} name="verkauft"/>
          </div>
        </div>
        <div className="form-row">
        <label className="form-label">Neupreis</label>
          <div className="input-group single">
            <input
              type="text"
              name="neupreis"
              value={vehicleData.neupreis || 0}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
            <select
              name="neupreisTyp"
              value={vehicleData.neupreisTyp || ''}
              onChange={handleChange}
              className="form-select"
            >
              <option value="" disabled hidden></option>
              <option value="netto">Netto</option>
              <option value="brutto">Brutto</option>
            </select>
          </div>
        </div>
    
        <div style={{ height: "1.5rem" }} />
        <div className="form-row">
        <label className="form-label">Netto-VK</label>
          <div className="input-group single">
            <input
              type="text"
              name="nettoVk"
              value={vehicleData.nettoVk || 0}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
          </div>
          <label className="form-label">VK-Datum</label>
          <div className="input-group single">
            <input
              type="date"
              name="vkDatum"
              value={formatDateForInput(vehicleData.vkDatum) || ''}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
          </div>
        </div>
        <div className="form-row">
        <label className="form-label">Transport</label>
          <div className="input-group single">
            <input
              type="text"
              name="transport"
              value={vehicleData.transport || ''}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
          </div>
          <label className="form-label">Währung</label>
            <select
              name="waehrung"
              value={vehicleData.waehrung || ''}
              onChange={handleChange}
              className="form-select"
            >
              <option value="" disabled hidden></option>
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
            </select>
        </div>
        <div className="form-row">
        <label className="form-label">MwSt</label>
          <div className="input-group single">
            <input
              type="text"
              name="mwst"
              value={vehicleData.mwst || 0}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
          </div>
          <label className="form-label">Zahlungsart</label>
            <select
              name="zahlungsart"
              value={vehicleData.zahlungsart || ''}
              onChange={handleChange}
              className="form-select"
            >
              <option value="" disabled hidden></option>
              <option value="bar">Bar</option>
              <option value="bank">Bank</option>
            </select>
        </div>
        <div className="form-row">
        <label className="form-label">Brutto-VK</label>
          <div className="input-group single">
            <input
              type="text"
              name="bruttoVk"
              value={vehicleData.bruttoVk || 0}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
          </div>
        </div>
        </div>
        
        {/* Right side button panel */}
        <div className="button-panel">
          <button type="button" className="verkauf-button">
            Exportpapiere
          </button>
          <button type="button" className="verkauf-button">
            Proforma-Rechnung
          </button>
          <button type="button" className="verkauf-button">
            Neuwagenrechnung
          </button>
          <button type="button" className="verkauf-button">
            Rechnung
          </button>
          <button type="button" className="verkauf-button">
            Zahlen buchen
          </button>
          <button type="button" className="verkauf-button" onClick={onSave}>
            {isEditing ? 'Aktualisieren' : 'Verkauft'}
          </button>
          
          {/* Rechnung section */}
          <div style={{ height: "1rem" }} />
          <div className="rechnung-section">
            <h3 className="section-headline">Rechnung</h3>
            <div className="checkbox-group">
              <RoundCheckbox label="Netto-EG" checked={vehicleData.nettoEG || false} onChange={handleChange} name="nettoEG" />
              <RoundCheckbox label="Brutto-EG" checked={vehicleData.bruttoEG || false} onChange={handleChange} name="bruttoEG" />
              <RoundCheckbox label="Netto-Export" checked={vehicleData.nettoExport || false} onChange={handleChange} name="nettoExport" />
              <RoundCheckbox label="Brutto-Export" checked={vehicleData.bruttoExport || false} onChange={handleChange} name="bruttoExport" />
              <RoundCheckbox label="Differenzbest." checked={vehicleData.differenzbest || false} onChange={handleChange} name="differenzbest" />
              <RectangularCheckboxBefore label="Präferenztext" checked={vehicleData.praeferenztext || false} onChange={handleChange} name="praeferenztext" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TabVerkauf;
