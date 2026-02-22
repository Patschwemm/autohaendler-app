import React from 'react';
import { formatDateForInput } from '../../utils';

interface Vehicle {
  [key: string]: any;
}

interface TabFahrzeugProps {
  vehicleData: Vehicle;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const TabFahrzeug: React.FC<TabFahrzeugProps> = ({ vehicleData, handleChange }) => {

  const nummerInput = [
    { label : "Fahrgestellnummer", name: "fahrgestellnummer"},
    { label : "Motornummer", name: "motornummer"},
    { label : "Briefnummer", name: "briefnummer"},
    { label : "Herstellernumber", name: "herstellerschluessel"},
    { label : "Typnummer", name: "typschluessel"},
    { label : "Schwackecode", name: "schwackecode"},
  ]

  const selectBasisDaten = [
    { label : "Innenfarbe", name: "innenfarbe", options: ["Beige", "Blau", "Braun", "Grau", "Rot", "Schwarz", "Andere"]},
    { label : "Polsterung", name: "polsterung", options: ["Alcantara", "Kunstleder", "Stoff", "Teilleder", "Velours", "Vollleder", "Andere"]},
    { label : "Getriebe", name: "getriebe", options: ["Automatik", "Halbautomatik", "Schaltgetriebe"]},
    { label : "Kraftstoff", name: "kraftstoff", options: [
      "Benzin", "Diesel", "Elektro", "Ethanol", "Hybrid(Diesel/Elektro)", "Hybrid(Benzin/Elektro)", "Wasserstoff", "Autogas (LPG)", "Erdgas(CNG)", "Andere", "Plug-in-Hybrid" 
    ]},
    { label : "Schadstoffklasse", name: "schadstoffklasse", options: [
      "Euro4", "Euro5", "Euro6", "Euro6c", "Euro6d", "Euro6d-TEMP", "Euro6e", "Euro7" 
    ]},
  ]

  const autoinfoInput1 = [
    { label : "kW", name: "kw"},
    { label : "PS", name: "ps"},
    { label : "Zylinder", name: "zylinder"},
    { label : "Gänge", name: "gaenge"},
    { label : "Türen", name: "tueren"},
    { label : "Sitze", name: "sitze"},
    { label : "Leergewicht", name: "leergewicht"},
    { label : "zgl. Gesamtgewicht", name: "gesamtgewicht"},
  ]

  const autoinfoInput2 = [
    { label : "Modelljahr", name: "modelljahr"},
    { label : "Laufleistung", name: "laufleistung"},
    { label : "Anzahl Halter", name: "anzahlHalter"},
  ]

  const autoinfoCheckbox = [
    { label : "Garantie", name: "Garantie"},
    { label : "Schaden", name: "schaden"},
    { label : "Unfall", name: "unfall"},
    { label : "HU/AU", name: "HUAU"},
    { label : "Verbrauch", name: "Verbrauch"},
  ]

  const verbrauchInput = [
    { label : "Innerorts", name: "innerorts"},
    { label : "Außerorts", name: "außerorts"},
    { label : "Kombiniert", name: "kombiniert"},
  ]

  const fahrzeugFields = [
    ...nummerInput,
    ...selectBasisDaten,
    ...autoinfoInput1,
    ...autoinfoInput2,
    ...autoinfoCheckbox,
    ...verbrauchInput,
  ]

  return (
    <form className="tabVerkauf-form">
      <div className="tabverkauf-container">
        <div style={{ display: "flex", gap: "2rem" }}>

          <div className="tabverkauf-form-section">
            {nummerInput.map(nummerInput => (
              <div className="form-row" key={nummerInput.name}>
                <label className="form-label">{nummerInput.label}</label>
                <div className="input-group single">
                <input
                type="text"
                name={nummerInput.name}
                value={vehicleData[nummerInput.name] ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>
              </div>
              </div>
            ))}
            <div style={{ height: "1.5rem" }} />

            {selectBasisDaten.map(selectBasisDaten => (
            <div className="form-row" key={selectBasisDaten.name}>
              <label className="form-label">{selectBasisDaten.label}</label>
              <div className="input-group single">
                <select
                  name={selectBasisDaten.name}
                  value={vehicleData[selectBasisDaten.name] ?? ''}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="" disabled hidden>
                    {selectBasisDaten.label} auswählen...
                  </option>
                  {selectBasisDaten.options.map(option => (
                    <option value={option} key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
          <div style={{ height: "1.5rem" }} />

          {autoinfoInput1.map(autoinfoInput1 => (
              <div className="form-row" key={autoinfoInput1.name}>
                <label className="form-label">{autoinfoInput1.label}</label>
                <div className="input-group single">
                <input
                type="text"
                name={autoinfoInput1.name}
                value={vehicleData[autoinfoInput1.name] ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>
              </div>
              </div>
            ))}
        </div>
        <div className="tabverkauf-form-section">

          <div className="form-row">
          <label className="form-label">Fahrzeugzustand</label>
          <select
            name="fahrzeugzustand"
            value={vehicleData.fahrzeugzustand ?? ''}
            onChange={handleChange}
            className="form-select"
          >
            <option value="" disabled hidden></option>
            <option value="neu">Neu</option>
            <option value="gebraucht">Gebraucht</option>
          </select>
          </div>

          <div className="form-row">
            <label className="form-label">Erstzulassung</label>
            <input
            type="date"
            name="erstzulassung"
            value={formatDateForInput(vehicleData.erstzulassung) || ''}
            onChange={handleChange}
            className="form-input"
            >
            </input>
          </div>

          {autoinfoInput2.map(autoinfoInput2 => (
              <div className="form-row" key={autoinfoInput2.name}>
                <label className="form-label">{autoinfoInput2.label}</label>
                <div className="input-group single">
                <input
                type="text"
                name={autoinfoInput2.name}
                value={vehicleData[autoinfoInput2.name] ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>
              </div>
              </div>
            ))}

        <div style={{ height: "1.5rem" }} />

        <div className="form-row">
          <label className="form-label">Garantie</label>
            <input
            type="checkbox"
            checked={vehicleData.garantie || false}
            onChange={handleChange}
            name="garantie"
            className="checkbox-input"
          />
          <input
          type="text"
          name="garantiedauer"
          value={vehicleData.garantiedauer ?? ''}
          onChange={handleChange}
          className="form-input"
          ></input>
          <label className="form-label">Monate</label>
        </div>

        <div className="form-row">
          <label className="form-label">Schaden</label>
          <input
            type="checkbox"
            checked={vehicleData.schaden || false}
            onChange={handleChange}
            name="schaden"
            className="checkbox-input"
          />
        </div>
        <div className="form-row">
          <label className="form-label">Unfall</label>
          <input
            type="checkbox"
            checked={vehicleData.unfall || false}
            onChange={handleChange}
            name="unfall"
            className="checkbox-input"
          />
        </div>

        <div style={{ height: "1.5rem" }} />

        <div className="form-row">
          <label className="form-label">HU/AU</label>
            <input
            type="checkbox"
            checked={vehicleData.hUAU || false}
            onChange={handleChange}
            name="HUAU"
            className="checkbox-input"
          />
          <label className="form-label">Neu</label>
        </div>

        <div className="form-row">
          <label className="form-label">HU</label>
              <input
              type="text"
              name="hu"
              value={vehicleData.hu ?? ''}

              onChange={handleChange}
              className="form-input"
              ></input>
        </div>

        <div className="form-row">
          <label className="form-label">AU</label>
              <input
              type="text"
              name="au"
              value={vehicleData.au ?? ''}

              onChange={handleChange}
              className="form-input"
              ></input>
        </div>

        <div style={{ height: "1.5rem" }} />

        <div className="form-row">
          <label className="form-label">Vebrauch</label>
            <input
            type="checkbox"
            checked={vehicleData.verbrauch || false}
            onChange={handleChange}
            name="verbrauch"
            className="checkbox-input"
          />
          <label className="form-label">EnVKV</label>
        </div>

        {verbrauchInput.map(verbrauchInput => (
              <div className="form-row" key={verbrauchInput.name}>
                <label className="form-label">{verbrauchInput.label}</label>
                <div className="input-group single">
                <input
                type="text"
                name={verbrauchInput.name}
                value={vehicleData[verbrauchInput.name] ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>
              </div>
              </div>
            ))}

          <div className="form-row">
                <label className="form-label">CO2-Emissionen</label>
                <div className="input-group single">
                <input
                type="text"
                name="emissionen"
                value={vehicleData.emissionen ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>
                <label className="form-label">g/km</label>

              </div>
              </div>

              <div style={{ height: "1.5rem" }} />
              <div className="form-row">
                <label className="form-label">Nur Neufahrzeug:</label>
              </div>
              
              <div className="form-row">
            <label className="form-label">Liefertermin</label>
            <input
            type="date"
            name="liefertermin"
            value={formatDateForInput(vehicleData.liefertermin) || ''}
            onChange={handleChange}
            className="form-input"
            >
            </input>
          </div>

          <div className="form-row">
                <label className="form-label">oder Lieferfrist</label>
                <div className="input-group single">
                <input
                type="text"
                name="lieferfrist"
                value={vehicleData.lieferfrist ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>
                <label className="form-label">Tage</label>

              </div>
              </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TabFahrzeug;
