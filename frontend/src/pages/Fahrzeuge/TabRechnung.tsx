import React from 'react';
import './TabVerkauf.css';
import '../../App.css'; // Import the CSS file to make CSS variables available

interface Vehicle {
  [key: string]: any;
}

interface TabRechnungProps {
  vehicleData: Vehicle;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const TabRechnung: React.FC<TabRechnungProps> = ({ vehicleData, handleChange }) => {

  return (
    <form className="tabVerkauf-form">
      <div className="tabverkauf-container">
        <div style={{ display: "flex", gap: "2rem" }}>

          <div className="tabverkauf-form-section">

            <div className="input-group single">
                <label className="form-label">Rech-Nr.</label>
                <input
                type="text"
                name="Rechnungsnummer"
                value={vehicleData.rechnungsnummer ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>
                <button 
                  type="button" 
                  onClick={() => {/* Add your logic here */}}
                  style={{ marginLeft: "0.5rem", padding: "0.5rem 1rem" }}
                >
                  neue Nummer
                </button>
            </div>

            <div className="input-group single">
                <label className="form-label">Datum</label>
                <input
                type="date"
                name="vkDatum"
                value={vehicleData.vkDatum ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>
            </div>

            <div style={{ height: "1.5rem" }} />

            <div className="input-group single">
                <label className="form-label">Marke</label>
                <input
                type="text"
                name="Marke"
                value={vehicleData.marke ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>

                <label className="form-label">Polsterung</label>
                <input
                type="text"
                name="Polsterung"
                value={vehicleData.polsterung ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>
            </div>

            <div className="input-group single">
                <label className="form-label">Typ</label>
                <input
                type="text"
                name="Typ1"
                value={vehicleData.typ1 ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>

                <label className="form-label">Fahrgestell-Nr.</label>
                <input
                type="text"
                name="Typ2"
                value={vehicleData.fahrgestellnummer ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>
            </div>

            <div className="input-group single">
                <label className="form-label">Modelljahr</label>
                <input
                type="text"
                name="Modelljahr"
                value={vehicleData.modelljahr ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>

                <label className="form-label">Hubraum</label>
                <input
                type="text"
                name="Hubraum"
                value={vehicleData.hubraum ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>
            </div>

            <div className="input-group single">
                <label className="form-label">Farbe</label>
                <input
                type="text"
                name="Modelljahr"
                value={vehicleData.modelljahr ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>

                <label className="form-label">PS</label>
                <input
                type="number"
                name="ps"
                value={vehicleData.Ps ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>
            </div>


            <div className="input-group single">
                <label className="form-label">Ausstattung</label>
            </div>

            <textarea
            name="ausstattungText1"
            value={vehicleData.ausstattungText1 || ''}
            onChange={handleChange}
            className="large-textarea"
            style={{ width: "600px", height: "200px", fontSize: "1rem", padding: "0.5rem", resize: "none" }}
            
            />


            <div className="input-group single">
                <select
                name="PreisTyp"
                value={vehicleData.preisTyp || ''}
                onChange={handleChange}
                className="form-select"
                >
                    <option value="bruttopreis">Bruttopreis</option>
                    <option value="nettopreis">Nettopreis</option>
                </select>
                <input
                type="number"
                name="Preis"
                value={vehicleData.preis ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>
                <label className="form-label">EUR</label>
            </div>

            <div className="input-group single">
                <select
                name="Transport"
                value={vehicleData.transport || ''}
                onChange={handleChange}
                className="form-select"
                >
                <option value="transport">Transport</option>
                </select>
                <input
                type="number"
                name="Preis"
                value={vehicleData.preis ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>
                <label className="form-label">EUR</label>
            </div>

            <div className="input-group single">
                <input
                name="Umsatzsteuer"
                value="Umsatzsteuer"
                className="form-input"
                ></input>
                <input
                type="number"
                name="Umsatzsteuer"
                value={vehicleData.Umsatzsteuer ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>
                <label className="form-label">EUR</label>
            </div>

            <div className="input-group single">
                <select
                name="Gesamtbetrag"
                value={vehicleData.Gesamtbetrag || ''}
                onChange={handleChange}
                className="form-select"
                >
                <option value="transport">Gesamtbetrag</option>
                </select>
                <input
                type="number"
                name="Preis"
                value={vehicleData.preis ?? ''}
                onChange={handleChange}
                className="form-input"
                ></input>
                <label className="form-label">EUR</label>
            </div>

            <div style={{ height: "2rem" }} />

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
              <button
                type="button"
                onClick={() => window.print()}
                style={{
                    padding: "0.75rem 1.5rem",
                    fontSize: "1rem",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#45a049"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#4CAF50"}
                >
                <span>🖨️</span>
                Drucken
              </button>
            </div>

        </div>
        </div>
      </div>
    </form>
  );
};

export default TabRechnung;
