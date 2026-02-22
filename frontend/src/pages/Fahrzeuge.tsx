import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Fahrzeuge.css';
import FahrzeugeBaseInfo from './Fahrzeuge/FahrzeugeBaseInfo';
import TabAnkauf from './Fahrzeuge/TabAnkauf';
import TabAusstattung from './Fahrzeuge/TabAusstattung';
import TabFahrzeug from './Fahrzeuge/TabFahrzeug';
import TabVerkauf from './Fahrzeuge/TabVerkauf';

interface Vehicle {
  id: number;
  
  // Base Info
  nr: string;
  nr1?: string;
  nr2?: string;
  typ1?: string;
  typ2?: string;
  fahrzeug?: string;
  detail1?: string;
  detail2?: string;
  farbe?: string;
  
  // Verkauf - Customer Info
  kundenname?: string;
  vorname?: string;
  nachname?: string;
  strasse?: string;
  plz?: string;
  ort?: string;
  land?: string;
  ustIdNr?: string;
  telefon?: string;
  
  // Verkauf - Pricing
  preis: number;
  preisTyp?: string;
  minPreis: number;
  minPreisTyp?: string;
  haendlerPreis: number;
  haendlerPreisTyp?: string;
  neupreis: number;
  neupreisTyp?: string;
  nettoVk: number;
  bruttoVk: number;
  
  // Verkauf - Dates and Details
  vkDatum?: string;
  transport?: string;
  waehrung?: string;
  mwst: number;
  zahlungsart?: string;
  
  // Verkauf - Checkboxes
  mwstAusweis: boolean;
  nurFuerExport: boolean;
  verkauft: boolean;
  nettoEG: boolean;
  bruttoEG: boolean;
  nettoExport: boolean;
  bruttoExport: boolean;
  differenzbest: boolean;
  praeferenztext: boolean;
  
  // Ankauf
  ankaufText1?: string;
  ankaufText2?: string;
  ankaufText3?: string;
  ankaufStrasse?: string;
  ankaufLand?: string;
  ankaufOrt?: string;
  ankaufPlz?: string;
  ankaufTelefon?: string;
  nettoEk: number;
  ankaufMwst: number;
  bruttoEk: number;
  kaufdatum?: string;
  ankaufWaehrung?: string;
  ankaufZahlungsart?: string;
  abmeldung?: string;
  
  // Fahrzeug - Numbers
  fahrgestellnummer?: string;
  motornummer?: string;
  briefnummer?: string;
  herstellerschluessel?: string;
  typschluessel?: string;
  schwackecode?: string;
  
  // Fahrzeug - Base Data
  innenfarbe?: string;
  polsterung?: string;
  getriebe?: string;
  kraftstoff?: string;
  schadstoffklasse?: string;
  
  // Fahrzeug - Technical Specs
  kw: number;
  ps: number;
  zylinder: number;
  gaenge: number;
  tueren: number;
  sitze: number;
  leergewicht: number;
  gesamtgewicht: number;
  modelljahr: number;
  laufleistung: number;
  anzahlHalter: number;
  
  // Fahrzeug - Additional Fields
  fahrzeugzustand?: string;
  erstzulassung?: string;
  garantiedauer?: string;
  hu?: string;
  au?: string;
  emissionen?: string;
  liefertermin?: string;
  lieferfrist?: string;
  
  // Fahrzeug - Checkboxes
  garantie: boolean;
  schaden: boolean;
  unfall: boolean;
  huau: boolean;
  verbrauch: boolean;
  
  // Fahrzeug - Consumption
  innerorts: number;
  ausserorts: number;
  kombiniert: number;
  
  // Ausstattung - Equipment Checkboxes
  abs: boolean;
  airbag1: boolean;
  airbag2: boolean;
  airbag4: boolean;
  alarmanlage: boolean;
  allrad: boolean;
  anhaengerkupplung: boolean;
  behindertengerecht: boolean;
  bordcomputer: boolean;
  cd: boolean;
  colorglas: boolean;
  dachtraeger: boolean;
  einparkhilfe: boolean;
  elFensterheber: boolean;
  elSitz: boolean;
  elSpiegel: boolean;
  elWegfahrsperre: boolean;
  katalysator: boolean;
  klimaanlage: boolean;
  klimaautomatik: boolean;
  ladebordwand: boolean;
  lederausstattung: boolean;
  leichtmetallfelgen: boolean;
  metallic: boolean;
  navigationssystem: boolean;
  nebelscheinwerfen: boolean;
  partikelfilter: boolean;
  radio: boolean;
  rueckbankTeilbar: boolean;
  schiebedach: boolean;
  schiebetuer: boolean;
  servolenkung: boolean;
  sitzheizung: boolean;
  sportausstattung: boolean;
  stabilitaetskontrolle: boolean;
  standheizung: boolean;
  taxi: boolean;
  telefonAusstattung: boolean;
  tempomat: boolean;
  traktionskontrolle: boolean;
  trennwand: boolean;
  tuning: boolean;
  xenonscheinwerfer: boolean;
  zentralverriegelung: boolean;
  
  // Ausstattung - Text Fields
  ausstattungText1?: string;
  ausstattungText2?: string;
  bemerkung?: string;
  
  // Legacy fields
  nettoBrutto: 'netto' | 'brutto';
  standzeit: number;
  typ?: string;
  marke?: string;
  modell?: string;
  baujahr?: number;
  kilometerstand?: number;
}

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

  // Comprehensive form state that matches the Vehicle interface
  const [vehicleData, setVehicleData] = useState<Vehicle>({
    id: 0,
    
    // Base Info
    nr: '',
    nr1: '',
    nr2: '',
    typ1: '',
    typ2: '',
    fahrzeug: '',
    detail1: '',
    detail2: '',
    farbe: '',
    
    // Verkauf - Customer Info
    kundenname: '',
    vorname: '',
    nachname: '',
    strasse: '',
    plz: '',
    ort: '',
    land: '',
    ustIdNr: '',
    telefon: '',
    
    // Verkauf - Pricing
    preis: 0,
    preisTyp: '',
    minPreis: 0,
    minPreisTyp: '',
    haendlerPreis: 0,
    haendlerPreisTyp: '',
    neupreis: 0,
    neupreisTyp: '',
    nettoVk: 0,
    bruttoVk: 0,
    
    // Verkauf - Dates and Details
    vkDatum: '',
    transport: '',
    waehrung: '',
    mwst: 0,
    zahlungsart: '',
    
    // Verkauf - Checkboxes
    mwstAusweis: false,
    nurFuerExport: false,
    verkauft: false,
    nettoEG: false,
    bruttoEG: false,
    nettoExport: false,
    bruttoExport: false,
    differenzbest: false,
    praeferenztext: false,
    
    // Ankauf
    ankaufText1: '',
    ankaufText2: '',
    ankaufText3: '',
    ankaufStrasse: '',
    ankaufLand: '',
    ankaufOrt: '',
    ankaufPlz: '',
    ankaufTelefon: '',
    nettoEk: 0,
    ankaufMwst: 0,
    bruttoEk: 0,
    kaufdatum: '',
    ankaufWaehrung: '',
    ankaufZahlungsart: '',
    abmeldung: '',
    
    // Fahrzeug - Numbers
    fahrgestellnummer: '',
    motornummer: '',
    briefnummer: '',
    herstellerschluessel: '',
    typschluessel: '',
    schwackecode: '',
    
    // Fahrzeug - Base Data
    innenfarbe: '',
    polsterung: '',
    getriebe: '',
    kraftstoff: '',
    schadstoffklasse: '',
    
    // Fahrzeug - Technical Specs
    kw: 0,
    ps: 0,
    zylinder: 0,
    gaenge: 0,
    tueren: 0,
    sitze: 0,
    leergewicht: 0,
    gesamtgewicht: 0,
    modelljahr: 0,
    laufleistung: 0,
    anzahlHalter: 0,
    
    // Fahrzeug - Additional Fields
    fahrzeugzustand: '',
    erstzulassung: '',
    garantiedauer: '',
    hu: '',
    au: '',
    emissionen: '',
    liefertermin: '',
    lieferfrist: '',
    
    // Fahrzeug - Checkboxes
    garantie: false,
    schaden: false,
    unfall: false,
    huau: false,
    verbrauch: false,
    
    // Fahrzeug - Consumption
    innerorts: 0,
    ausserorts: 0,
    kombiniert: 0,
    
    // Ausstattung - Equipment Checkboxes
    abs: false,
    airbag1: false,
    airbag2: false,
    airbag4: false,
    alarmanlage: false,
    allrad: false,
    anhaengerkupplung: false,
    behindertengerecht: false,
    bordcomputer: false,
    cd: false,
    colorglas: false,
    dachtraeger: false,
    einparkhilfe: false,
    elFensterheber: false,
    elSitz: false,
    elSpiegel: false,
    elWegfahrsperre: false,
    katalysator: false,
    klimaanlage: false,
    klimaautomatik: false,
    ladebordwand: false,
    lederausstattung: false,
    leichtmetallfelgen: false,
    metallic: false,
    navigationssystem: false,
    nebelscheinwerfen: false,
    partikelfilter: false,
    radio: false,
    rueckbankTeilbar: false,
    schiebedach: false,
    schiebetuer: false,
    servolenkung: false,
    sitzheizung: false,
    sportausstattung: false,
    stabilitaetskontrolle: false,
    standheizung: false,
    taxi: false,
    telefonAusstattung: false,
    tempomat: false,
    traktionskontrolle: false,
    trennwand: false,
    tuning: false,
    xenonscheinwerfer: false,
    zentralverriegelung: false,
    
    // Ausstattung - Text Fields
    ausstattungText1: '',
    ausstattungText2: '',
    bemerkung: '',
    
    // Legacy fields
    nettoBrutto: 'brutto',
    standzeit: 0,
    typ: '',
    marke: '',
    modell: '',
    baujahr: 0,
    kilometerstand: 0
  });

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVehicleId, setSelectedVehicleId] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const tabNames = [
    "Ankauf", "Verkauf", "Fahrzeug", "Ausstattung"
  ]

  const [currentTab, setCurrentTab] = useState('Ausstattung');

  // Fetch vehicles from API
  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Vehicle[]>('http://localhost:5001/api/vehicles');
      setVehicles(response.data);
      setError(null);
    } catch (err) {
      setError('Fehler beim Laden der Fahrzeuge');
      console.error('Error fetching vehicles:', err);
    } finally {
      setLoading(false);
    }
  };

  // Reset form to empty state
  const resetForm = () => {
    setVehicleData({
      id: 0,
      nr: '', nr1: '', nr2: '', typ1: '', typ2: '', fahrzeug: '', detail1: '', detail2: '', farbe: '',
      kundenname: '', vorname: '', nachname: '', strasse: '', plz: '', ort: '', land: '', ustIdNr: '', telefon: '',
      preis: 0, preisTyp: '', minPreis: 0, minPreisTyp: '', haendlerPreis: 0, haendlerPreisTyp: '', 
      neupreis: 0, neupreisTyp: '', nettoVk: 0, bruttoVk: 0, vkDatum: '', transport: '', waehrung: '', mwst: 0, zahlungsart: '',
      mwstAusweis: false, nurFuerExport: false, verkauft: false, nettoEG: false, bruttoEG: false, 
      nettoExport: false, bruttoExport: false, differenzbest: false, praeferenztext: false,
      ankaufText1: '', ankaufText2: '', ankaufText3: '', ankaufStrasse: '', ankaufLand: '', ankaufOrt: '', ankaufPlz: '', ankaufTelefon: '',
      nettoEk: 0, ankaufMwst: 0, bruttoEk: 0, kaufdatum: '', ankaufWaehrung: '', ankaufZahlungsart: '', abmeldung: '',
      fahrgestellnummer: '', motornummer: '', briefnummer: '', herstellerschluessel: '', typschluessel: '', schwackecode: '',
      innenfarbe: '', polsterung: '', getriebe: '', kraftstoff: '', schadstoffklasse: '',
      kw: 0, ps: 0, zylinder: 0, gaenge: 0, tueren: 0, sitze: 0, leergewicht: 0, gesamtgewicht: 0, modelljahr: 0, laufleistung: 0, anzahlHalter: 0,
      garantie: false, schaden: false, unfall: false, huau: false, verbrauch: false,
      innerorts: 0, ausserorts: 0, kombiniert: 0,
      abs: false, airbag1: false, airbag2: false, airbag4: false, alarmanlage: false, allrad: false, anhaengerkupplung: false,
      behindertengerecht: false, bordcomputer: false, cd: false, colorglas: false, dachtraeger: false, einparkhilfe: false,
      elFensterheber: false, elSitz: false, elSpiegel: false, elWegfahrsperre: false, katalysator: false, klimaanlage: false,
      klimaautomatik: false, ladebordwand: false, lederausstattung: false, leichtmetallfelgen: false, metallic: false,
      navigationssystem: false, nebelscheinwerfen: false, partikelfilter: false, radio: false, rueckbankTeilbar: false,
      schiebedach: false, schiebetuer: false, servolenkung: false, sitzheizung: false, sportausstattung: false,
      stabilitaetskontrolle: false, standheizung: false, taxi: false, telefonAusstattung: false, tempomat: false,
      traktionskontrolle: false, trennwand: false, tuning: false, xenonscheinwerfer: false, zentralverriegelung: false,
      ausstattungText1: '', ausstattungText2: '', bemerkung: '',
      nettoBrutto: 'brutto', standzeit: 0, typ: '', marke: '', modell: '', baujahr: 0, kilometerstand: 0
    });
    setSelectedVehicleId(null);
    setIsEditing(false);
  };

  // Load vehicle data into form
  const loadVehicleData = (vehicle: Vehicle) => {
    // Convert all null values to appropriate defaults to prevent React warnings
    const cleanVehicleData: Vehicle = {
      ...vehicle,
      // Base Info - ensure strings are never null
      nr: vehicle.nr ?? '',
      nr1: vehicle.nr1 ?? '',
      nr2: vehicle.nr2 ?? '',
      typ1: vehicle.typ1 ?? '',
      typ2: vehicle.typ2 ?? '',
      fahrzeug: vehicle.fahrzeug ?? '',
      detail1: vehicle.detail1 ?? '',
      detail2: vehicle.detail2 ?? '',
      farbe: vehicle.farbe ?? '',
      
      // Verkauf - Customer Info
      kundenname: vehicle.kundenname ?? '',
      vorname: vehicle.vorname ?? '',
      nachname: vehicle.nachname ?? '',
      strasse: vehicle.strasse ?? '',
      plz: vehicle.plz ?? '',
      ort: vehicle.ort ?? '',
      land: vehicle.land ?? '',
      ustIdNr: vehicle.ustIdNr ?? '',
      telefon: vehicle.telefon ?? '',
      
      // Verkauf - Details
      vkDatum: vehicle.vkDatum ?? '',
      transport: vehicle.transport ?? '',
      waehrung: vehicle.waehrung ?? '',
      zahlungsart: vehicle.zahlungsart ?? '',
      
      // Ankauf
      ankaufText1: vehicle.ankaufText1 ?? '',
      ankaufText2: vehicle.ankaufText2 ?? '',
      ankaufText3: vehicle.ankaufText3 ?? '',
      ankaufStrasse: vehicle.ankaufStrasse ?? '',
      ankaufLand: vehicle.ankaufLand ?? '',
      ankaufOrt: vehicle.ankaufOrt ?? '',
      ankaufPlz: vehicle.ankaufPlz ?? '',
      ankaufTelefon: vehicle.ankaufTelefon ?? '',
      kaufdatum: vehicle.kaufdatum ?? '',
      ankaufWaehrung: vehicle.ankaufWaehrung ?? '',
      ankaufZahlungsart: vehicle.ankaufZahlungsart ?? '',
      abmeldung: vehicle.abmeldung ?? '',
      
      // Fahrzeug - Additional Fields
      fahrzeugzustand: vehicle.fahrzeugzustand ?? '',
      erstzulassung: vehicle.erstzulassung ?? '',
      garantiedauer: vehicle.garantiedauer ?? '',
      hu: vehicle.hu ?? '',
      au: vehicle.au ?? '',
      emissionen: vehicle.emissionen ?? '',
      liefertermin: vehicle.liefertermin ?? '',
      lieferfrist: vehicle.lieferfrist ?? '',
      
      // Ausstattung - Text Fields
      ausstattungText1: vehicle.ausstattungText1 ?? '',
      ausstattungText2: vehicle.ausstattungText2 ?? '',
      bemerkung: vehicle.bemerkung ?? '',
      
      // Legacy fields
      nettoBrutto: vehicle.nettoBrutto ?? 'brutto',
      typ: vehicle.typ ?? '',
      marke: vehicle.marke ?? '',
      modell: vehicle.modell ?? '',
    };
    
    setVehicleData(cleanVehicleData);
    setSelectedVehicleId(vehicle.id);
    setIsEditing(true);
  };





  // Save vehicle data - FIXED VERSION
  const saveVehicleData = async () => {
    try {
      setLoading(true);
      
      // Prepare the data with proper defaults for empty form
      const dataToSave = {
        ...vehicleData
      } as any;
      
      // For new vehicles, let the backend generate the Nr automatically
      if (!isEditing) {
        delete dataToSave.nr;
      }
      
      // Fix critical fields that can't be empty
      if (!dataToSave.typ1 || dataToSave.typ1.trim() === '') {
        dataToSave.typ1 = 'PKW'; // Default vehicle type
      }
      
      if (!dataToSave.fahrzeug || dataToSave.fahrzeug.trim() === '') {
        dataToSave.fahrzeug = 'Unbekannt'; // Default vehicle name
      }
      
      // Ensure nettoBrutto has valid value
      if (!dataToSave.nettoBrutto || (dataToSave.nettoBrutto !== 'netto' && dataToSave.nettoBrutto !== 'brutto')) {
        dataToSave.nettoBrutto = 'brutto'; // Default to brutto
      }
      
      // Set typ from typ1 for backend compatibility
      dataToSave.typ = dataToSave.typ1;
      
      // For PUT requests, backend expects 'vehicle' field instead of 'fahrzeug'
      if (isEditing) {
        dataToSave.vehicle = dataToSave.fahrzeug || 'Unbekannt';
      }
      
      // Ensure telefon is always a string (never null for updates)
      if (isEditing && dataToSave.telefon === null) {
        dataToSave.telefon = '';
      }
      
      // Ensure proper data types for numeric fields
      const numericFields = [
        'preis', 'minPreis', 'haendlerPreis', 'neupreis', 'nettoVk', 'bruttoVk', 'mwst',
        'nettoEk', 'ankaufMwst', 'bruttoEk', 'kw', 'ps', 'zylinder', 'gaenge', 'tueren',
        'sitze', 'leergewicht', 'gesamtgewicht', 'modelljahr', 'laufleistung', 'anzahlHalter',
        'innerorts', 'ausserorts', 'kombiniert', 'standzeit', 'baujahr', 'kilometerstand'
      ];
      
      numericFields.forEach(field => {
        if (dataToSave[field] !== null && dataToSave[field] !== undefined) {
          const numValue = Number(dataToSave[field]);
          dataToSave[field] = isNaN(numValue) ? 0 : numValue;
        }
      });
      
      // Convert empty strings to null for optional string fields (except telefon for updates)
      const stringFields = Object.keys(dataToSave).filter(key => 
        !numericFields.includes(key) && 
        typeof dataToSave[key] === 'string' && 
        key !== 'typ1' && 
        key !== 'fahrzeug' && 
        key !== 'nettoBrutto' &&
        key !== 'typ' &&
        key !== 'vehicle' &&
        !(isEditing && key === 'telefon') // Don't null telefon for updates
      );
      
      stringFields.forEach(field => {
        if (dataToSave[field] === '' || dataToSave[field] === undefined) {
          dataToSave[field] = null;
        }
      });
      
      // Ensure boolean fields are proper booleans
      const booleanFields = [
        'mwstAusweis', 'nurFuerExport', 'verkauft', 'nettoEG', 'bruttoEG', 
        'nettoExport', 'bruttoExport', 'differenzbest', 'praeferenztext',
        'garantie', 'schaden', 'unfall', 'huau', 'verbrauch',
        'abs', 'airbag1', 'airbag2', 'airbag4', 'alarmanlage', 'allrad', 'anhaengerkupplung',
        'behindertengerecht', 'bordcomputer', 'cd', 'colorglas', 'dachtraeger', 'einparkhilfe',
        'elFensterheber', 'elSitz', 'elSpiegel', 'elWegfahrsperre', 'katalysator', 'klimaanlage',
        'klimaautomatik', 'ladebordwand', 'lederausstattung', 'leichtmetallfelgen', 'metallic',
        'navigationssystem', 'nebelscheinwerfen', 'partikelfilter', 'radio', 'rueckbankTeilbar',
        'schiebedach', 'schiebetuer', 'servolenkung', 'sitzheizung', 'sportausstattung',
        'stabilitaetskontrolle', 'standheizung', 'taxi', 'telefonAusstattung', 'tempomat',
        'traktionskontrolle', 'trennwand', 'tuning', 'xenonscheinwerfer', 'zentralverriegelung'
      ];
      
      booleanFields.forEach(field => {
        dataToSave[field] = Boolean(dataToSave[field]);
      });
      
      console.log('FIXED - Data being sent to API:', JSON.stringify(dataToSave, null, 2));
      
      if (isEditing && selectedVehicleId) {
        // Update existing vehicle
        await axios.put(`http://localhost:5001/api/vehicles/${selectedVehicleId}`, dataToSave);
      } else {
        // Create new vehicle
        await axios.post('http://localhost:5001/api/vehicles', dataToSave);
      }
      
      // Refresh vehicle list
      await fetchVehicles();
      
      // Reset form
      resetForm();
      
      setError(null);
    } catch (err: unknown) {
      setError('Fehler beim Speichern des Fahrzeugs');
      console.error('FIXED - Error saving vehicle:', err);
      // Log the full error for debugging
      if (err && typeof err === 'object' && 'response' in err) {
        const axiosError = err as any;
        console.error('FIXED - API Error Response:', axiosError.response?.data);
        console.error('FIXED - API Error Status:', axiosError.response?.status);
        console.error('FIXED - API Error Headers:', axiosError.response?.headers);
      }
      if (err && typeof err === 'object' && 'request' in err) {
        const axiosError = err as any;
        console.error('FIXED - Request that caused error:', axiosError.request);
      }
    } finally {
      setLoading(false);
    }
  };

  // Delete current vehicle
  const deleteCurrentVehicle = async () => {
    if (!selectedVehicleId) {
      alert('Bitte wählen Sie ein Fahrzeug zum Löschen aus.');
      return;
    }

    try {
      setLoading(true);
      await axios.delete(`http://localhost:5001/api/vehicles/${selectedVehicleId}`);
      
      // Refresh vehicle list
      await fetchVehicles();
      
      // Reset form and selection
      resetForm();
      setSelectedVehicleId(null);
      setIsEditing(false);
      
      setError(null);
    } catch (err) {
      setError('Fehler beim Löschen des Fahrzeugs');
      console.error('Error deleting vehicle:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add new vehicle with current form data
  const addNewVehicle = async () => {
    await saveVehicleData();
  };

  // Universal change handler for all form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setVehicleData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked 
              : type === 'number' ? Number(value) || 0
              : value
    }));
  };

  // Handle table row click
  const handleRowClick = (vehicle: Vehicle) => {
    loadVehicleData(vehicle);
  };
  
  const handleTabClick = (tab: string) => {
    setCurrentTab(tab);
  };

  const openTab = () => {
    switch (currentTab){
      case "Ankauf":
        return <TabAnkauf vehicleData={vehicleData} handleChange={handleChange} />;
      case "Verkauf":
        return <TabVerkauf vehicleData={vehicleData} handleChange={handleChange} onSave={saveVehicleData} isEditing={isEditing} />;
      case "Fahrzeug":
        return <TabFahrzeug vehicleData={vehicleData} handleChange={handleChange} />;
      case "Ausstattung":
        return <TabAusstattung vehicleData={vehicleData} handleChange={handleChange} />;
      default:
        return null;
    }
  }

  return (
    <div className="page-content">
      <h2>Fahrzeuge</h2>
      
      <div className="fahrzeuge-main-layout">
        {/* Left Column - Forms and Tabs */}
        <div className="fahrzeuge-left-column">
          <FahrzeugeBaseInfo
            vehicleData={vehicleData}
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
        
        {/* Right Column - Vehicle Table */}
        <div className="fahrzeuge-right-column">
          <div className="control-buttons">
        <button 
        onClick={addNewVehicle} 
        className="control-button add-button" 
        title="Neues Fahrzeug hinzufügen"
        disabled={isEditing}
        >
          +
        </button>
        <button 
          onClick={saveVehicleData} 
          className="control-button save-button" 
          title="Fahrzeug speichern"
          disabled={loading}
        >
          💾
        </button>
        <button 
          onClick={resetForm} 
          className="control-button cancel-button" 
          title="Formular zurücksetzen"
        >
          ×
        </button>
        <button 
          onClick={deleteCurrentVehicle} 
          className="control-button delete-button" 
          title="Ausgewähltes Fahrzeug löschen"
          disabled={!selectedVehicleId}
        >
          -
        </button>
      </div>

          <div className="vehicle-table-section">
            <h3>Fahrzeug-Übersicht</h3>
            {loading && <p>Lade Fahrzeuge...</p>}
            {error && <p className="error-message">{error}</p>}
            {!loading && !error && (
              <table className="vehicle-table">
                <thead>
                  <tr>
                    <th>Nr.</th>
                    <th>Typ</th>
                    <th>Fahrzeug</th>
                    <th>Preis</th>
                    <th>Netto/Brutto</th>
                    <th>Standzeit (Tage)</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles.length === 0 ? (
                    <tr>
                      <td colSpan={6} style={{ textAlign: 'center' }}>Keine Fahrzeuge gefunden</td>
                    </tr>
                  ) : (
                    vehicles.map((vehicle) => (
                      <tr 
                        key={vehicle.id} 
                        onClick={() => handleRowClick(vehicle)}
                        className={selectedVehicleId === vehicle.id ? 'selected-row' : ''}
                      >
                        <td>{vehicle.nr}</td>
                        <td>{vehicle.typ}</td>
                        <td>{vehicle.fahrzeug}</td>
                        <td>€{vehicle.preis.toLocaleString()}</td>
                        <td>{vehicle.nettoBrutto}</td>
                        <td>{vehicle.standzeit}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fahrzeuge;