import React from 'react';

interface FahrzeugeBaseInfoProps {
  formData: {
    nr1: string;
    nr2: string;
    typ1: string;
    typ2: string;
    fahrzeug: string;
    detail1: string;
    detail2: string;
    farbe: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  typ1Options: { value: string; label: string }[];
  typ2Options: { value: string; label: string }[];
  fahrzeugOptions: { value: string; label: string }[];
  farbeOptions: { value: string; label: string }[];
}

const FahrzeugeBaseInfo: React.FC<FahrzeugeBaseInfoProps> = ({
  formData,
  handleChange,
  typ1Options,
  typ2Options,
  fahrzeugOptions,
  farbeOptions,
}) => (
  <form className="fahrzeuge-form">
    {/* First row: Nr with two textboxes */}
    <div className="form-row">
      <label className="form-label">Nr</label>
      <div className="input-group">
        <input
          type="text"
          name="nr1"
          value={formData.nr1}
          onChange={handleChange}
          className="form-input"
          placeholder="Nr 1"
        />
        <input
          type="text"
          name="nr2"
          value={formData.nr2}
          onChange={handleChange}
          className="form-input"
          placeholder="Nr 2"
        />
      </div>
    </div>

    {/* Second row: Typ with two dropdowns */}
    <div className="form-row">
      <label className="form-label">Typ</label>
      <div className="input-group">
        <select
          name="typ1"
          value={formData.typ1}
          onChange={handleChange}
          className="form-select"
        >
          <option value="" disabled hidden>Typ 1 auswählen</option>
          {typ1Options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select
          name="typ2"
          value={formData.typ2}
          onChange={handleChange}
          className="form-select"
        >
          <option value="" disabled hidden>Typ 2 auswählen</option>
          {typ2Options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>

    {/* Third row: Fahrzeuge with one dropdown */}
    <div className="form-row">
      <label className="form-label">Fahrzeuge</label>
      <div className="input-group single">
        <select
          name="fahrzeug"
          value={formData.fahrzeug}
          onChange={handleChange}
          className="form-select"
        >
          <option value="" disabled hidden>Fahrzeug auswählen</option>
          {fahrzeugOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>

    {/* Fourth row: Two textboxes below Fahrzeuge */}
    <div className="form-row">
      <label className="form-label"></label>
      <div className="input-group">
        <input
          type="text"
          name="detail1"
          value={formData.detail1}
          onChange={handleChange}
          className="form-input"
          placeholder="Detail 1"
        />
        <input
          type="text"
          name="detail2"
          value={formData.detail2}
          onChange={handleChange}
          className="form-input"
          placeholder="Detail 2"
        />
      </div>
    </div>

    {/* Fifth row: Farbe with dropdown */}
    <div className="form-row">
      <label className="form-label">Farbe</label>
      <div className="input-group single">
        <select
          name="farbe"
          value={formData.farbe}
          onChange={handleChange}
          className="form-select"
        >
          <option value="" disabled hidden>Farbe auswählen</option>
          {farbeOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  </form>
);

export default FahrzeugeBaseInfo;
