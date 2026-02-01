import React, { useState } from 'react';
import './TabVerkauf.css';
import '../../App.css'; // Import the CSS file to make CSS variables available

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

const TabVerkauf = () => {
  const [formData, setFormData] = useState({
    kundenname: '',
    vorname: '',
    nachname: '',
    strasse: '',
    plz: '',
    ort: '',
    land: '',
    ustIdNr: '',
    telefon: '',
    preis: '',
    preisTyp: '',
    mwstAusweis: false,
    minPreis: '',
    minPreisTyp: '',
    nurFuerExport: false,
    haendlerPreis: '',
    haendlerPreisTyp: '',
    verkauft: false,
    neupreis: '',
    neupreisTyp: '',
    nettoVk: '',
    vkDatum: '',
    transport: '',
    waehrung: '',
    mwst: '',
    zahlungsart: '',
    bruttoVk: '',
    nettoEG: false,
    bruttoEG: false,
    nettoExport: false,
    bruttoExport: false,
    differenzbest: false,
    praeferenztext: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };
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
              value={formData.kundenname}
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
              value={formData.vorname}
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
              value={formData.nachname}
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
              value={formData.strasse}
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
              value={formData.plz}
              onChange={handleChange}
              className="form-input"
              placeholder="PLZ"
            />
            <input
              type="text"
              name="ort"
              value={formData.ort}
              onChange={handleChange}
              className="form-input"
              placeholder="Ort"
            />
            <input
              type="text"
              name="land"
              value={formData.land}
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
              value={formData.ustIdNr}
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
              value={formData.telefon}
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
              value={formData.preis}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
            <select
              name="preisTyp"
              value={formData.preisTyp}
              onChange={handleChange}
              className="form-select"
            >
              <option value="" disabled hidden></option>
              <option value="netto">Netto</option>
              <option value="brutto">Brutto</option>
            </select>
            <CheckboxWithLabel label="MwSt Ausweis" checked={formData.mwstAusweis} onChange={handleChange} name="mwstAusweis"/>
          </div>
        </div>
        <div className="form-row">
        <label className="form-label">Min. Preis</label>
          <div className="input-group single">
            <input
              type="text"
              name="minPreis"
              value={formData.minPreis}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
            <select
              name="minPreisTyp"
              value={formData.minPreisTyp}
              onChange={handleChange}
              className="form-select"
            >
              <option value="" disabled hidden></option>
              <option value="netto">Netto</option>
              <option value="brutto">Brutto</option>
            </select>
            <CheckboxWithLabel label="Nur für Export" checked={formData.nurFuerExport} onChange={handleChange} name="nurFuerExport"/>
          </div>
        </div>
        <div className="form-row">
        <label className="form-label">Händler Preis</label>
          <div className="input-group single">
            <input
              type="text"
              name="haendlerPreis"
              value={formData.haendlerPreis}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
            <select
              name="haendlerPreisTyp"
              value={formData.haendlerPreisTyp}
              onChange={handleChange}
              className="form-select"
            >
              <option value="" disabled hidden></option>
              <option value="netto">Netto</option>
              <option value="brutto">Brutto</option>
            </select>
            <CheckboxWithLabel label="Verkauft" checked={formData.verkauft} onChange={handleChange} name="verkauft"/>
          </div>
        </div>
        <div className="form-row">
        <label className="form-label">Neupreis</label>
          <div className="input-group single">
            <input
              type="text"
              name="neupreis"
              value={formData.neupreis}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
            <select
              name="neupreisTyp"
              value={formData.neupreisTyp}
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
              value={formData.nettoVk}
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
              value={formData.vkDatum}
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
              value={formData.transport}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
          </div>
          <label className="form-label">Währung</label>
            <select
              name="waehrung"
              value={formData.waehrung}
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
              value={formData.mwst}
              onChange={handleChange}
              className="form-input"
              placeholder=""
            />
          </div>
          <label className="form-label">Zahlungsart</label>
            <select
              name="zahlungsart"
              value={formData.zahlungsart}
              onChange={handleChange}
              className="form-select"
            >
              <option value="" disabled hidden></option>
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
            </select>
        </div>
        <div className="form-row">
        <label className="form-label">Brutto-VK</label>
          <div className="input-group single">
            <input
              type="text"
              name="bruttoVk"
              value={formData.bruttoVk}
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
          <button type="button" className="verkauf-button">
            Verkauft
          </button>
          
          {/* Rechnung section */}
          <div style={{ height: "1rem" }} />
          <div className="rechnung-section">
            <h3 className="section-headline">Rechnung</h3>
            <div className="checkbox-group">
              <RoundCheckbox label="Netto-EG" checked={formData.nettoEG} onChange={handleChange} name="nettoEG" />
              <RoundCheckbox label="Brutto-EG" checked={formData.bruttoEG} onChange={handleChange} name="bruttoEG" />
              <RoundCheckbox label="Netto-Export" checked={formData.nettoExport} onChange={handleChange} name="nettoExport" />
              <RoundCheckbox label="Brutto-Export" checked={formData.bruttoExport} onChange={handleChange} name="bruttoExport" />
              <RoundCheckbox label="Differenzbest." checked={formData.differenzbest} onChange={handleChange} name="differenzbest" />
              <RectangularCheckboxBefore label="Präferenztext" checked={formData.praeferenztext} onChange={handleChange} name="praeferenztext" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TabVerkauf;
