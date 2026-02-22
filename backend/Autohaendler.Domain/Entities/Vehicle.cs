namespace Autohaendler.Domain.Entities;

public class Vehicle
{
    public int Id { get; set; }
    
    // Base Info (Nr required, others optional)
    public string Nr { get; set; } = string.Empty;
    public string? Nr1 { get; set; }
    public string? Nr2 { get; set; }
    public string? Typ1 { get; set; }
    public string? Typ2 { get; set; }
    public string? Fahrzeug { get; set; }
    public string? Detail1 { get; set; }
    public string? Detail2 { get; set; }
    public string? Farbe { get; set; }
    
    // Verkauf Tab - Customer Info (all optional)
    public string? Kundenname { get; set; }
    public string? Vorname { get; set; }
    public string? Nachname { get; set; }
    public string? Strasse { get; set; }
    public string? Plz { get; set; }
    public string? Ort { get; set; }
    public string? Land { get; set; }
    public string? UstIdNr { get; set; }
    public string? Telefon { get; set; }
    
    // Verkauf Tab - Pricing (all optional)
    public decimal Preis { get; set; }
    public string? PreisTyp { get; set; }
    public decimal MinPreis { get; set; }
    public string? MinPreisTyp { get; set; }
    public decimal HaendlerPreis { get; set; }
    public string? HaendlerPreisTyp { get; set; }
    public decimal Neupreis { get; set; }
    public string? NeupreisTyp { get; set; }
    public decimal NettoVk { get; set; }
    public decimal BruttoVk { get; set; }
    
    // Verkauf Tab - Dates and Details (all optional)
    public DateTime? VkDatum { get; set; }
    public string? Transport { get; set; }
    public string? Waehrung { get; set; }
    public decimal Mwst { get; set; }
    public string? Zahlungsart { get; set; }
    
    // Verkauf Tab - Checkboxes (defaults to false)
    public bool MwstAusweis { get; set; }
    public bool NurFuerExport { get; set; }
    public bool Verkauft { get; set; }
    public bool NettoEG { get; set; }
    public bool BruttoEG { get; set; }
    public bool NettoExport { get; set; }
    public bool BruttoExport { get; set; }
    public bool Differenzbest { get; set; }
    public bool Praeferenztext { get; set; }
    
    // Ankauf Tab (all optional)
    public string? AnkaufText1 { get; set; }
    public string? AnkaufText2 { get; set; }
    public string? AnkaufText3 { get; set; }
    public string? AnkaufStrasse { get; set; }
    public string? AnkaufLand { get; set; }
    public string? AnkaufOrt { get; set; }
    public string? AnkaufPlz { get; set; }
    public string? AnkaufTelefon { get; set; }
    public decimal NettoEk { get; set; }
    public decimal AnkaufMwst { get; set; }
    public decimal BruttoEk { get; set; }
    public DateTime? Kaufdatum { get; set; }
    public string? AnkaufWaehrung { get; set; }
    public string? AnkaufZahlungsart { get; set; }
    public DateTime? Abmeldung { get; set; }
    
    // Fahrzeug Tab - Numbers (all optional)
    public string? Fahrgestellnummer { get; set; }
    public string? Motornummer { get; set; }
    public string? Briefnummer { get; set; }
    public string? Herstellerschluessel { get; set; }
    public string? Typschluessel { get; set; }
    public string? Schwackecode { get; set; }
    
    // Fahrzeug Tab - Base Data (all optional)
    public string? Innenfarbe { get; set; }
    public string? Polsterung { get; set; }
    public string? Getriebe { get; set; }
    public string? Kraftstoff { get; set; }
    public string? Schadstoffklasse { get; set; }
    
    // Fahrzeug Tab - Technical Specs (defaults to 0)
    public int KW { get; set; }
    public int PS { get; set; }
    public int Zylinder { get; set; }
    public int Gaenge { get; set; }
    public int Tueren { get; set; }
    public int Sitze { get; set; }
    public int Leergewicht { get; set; }
    public int Gesamtgewicht { get; set; }
    public int Modelljahr { get; set; }
    public int Laufleistung { get; set; }
    public int AnzahlHalter { get; set; }
    
    // Fahrzeug Tab - Checkboxes (defaults to false)
    public bool Garantie { get; set; }
    public bool Schaden { get; set; }
    public bool Unfall { get; set; }
    public bool HUAU { get; set; }
    public bool Verbrauch { get; set; }
    
    // Fahrzeug Tab - Consumption (defaults to 0)
    public decimal Innerorts { get; set; }
    public decimal Ausserorts { get; set; }
    public decimal Kombiniert { get; set; }
    
    // Ausstattung Tab - Equipment Checkboxes (defaults to false)
    public bool Abs { get; set; }
    public bool Airbag1 { get; set; }
    public bool Airbag2 { get; set; }
    public bool Airbag4 { get; set; }
    public bool Alarmanlage { get; set; }
    public bool Allrad { get; set; }
    public bool Anhaengerkupplung { get; set; }
    public bool Behindertengerecht { get; set; }
    public bool Bordcomputer { get; set; }
    public bool CD { get; set; }
    public bool Colorglas { get; set; }
    public bool Dachtraeger { get; set; }
    public bool Einparkhilfe { get; set; }
    public bool ElFensterheber { get; set; }
    public bool ElSitz { get; set; }
    public bool ElSpiegel { get; set; }
    public bool ElWegfahrsperre { get; set; }
    public bool Katalysator { get; set; }
    public bool Klimaanlage { get; set; }
    public bool Klimaautomatik { get; set; }
    public bool Ladebordwand { get; set; }
    public bool Lederausstattung { get; set; }
    public bool Leichtmetallfelgen { get; set; }
    public bool Metallic { get; set; }
    public bool Navigationssystem { get; set; }
    public bool Nebelscheinwerfen { get; set; }
    public bool Partikelfilter { get; set; }
    public bool Radio { get; set; }
    public bool RueckbankTeilbar { get; set; }
    public bool Schiebedach { get; set; }
    public bool Schiebetuer { get; set; }
    public bool Servolenkung { get; set; }
    public bool Sitzheizung { get; set; }
    public bool Sportausstattung { get; set; }
    public bool Stabilitaetskontrolle { get; set; }
    public bool Standheizung { get; set; }
    public bool Taxi { get; set; }
    public bool TelefonAusstattung { get; set; }
    public bool Tempomat { get; set; }
    public bool Traktionskontrolle { get; set; }
    public bool Trennwand { get; set; }
    public bool Tuning { get; set; }
    public bool Xenonscheinwerfer { get; set; }
    public bool Zentralverriegelung { get; set; }
    
    // Ausstattung Tab - Text Fields (all optional)
    public string? AusstattungText1 { get; set; }
    public string? AusstattungText2 { get; set; }
    public string? Bemerkung { get; set; }
    
    // Legacy fields for compatibility
    public string? Typ { get; set; }
    public string NettoBrutto { get; set; } = "brutto"; // Default value
    public int Standzeit { get; set; } // Days since on lot    
    public string? Marke { get; set; }
    public string? Modell { get; set; }
    public int? Baujahr { get; set; }
    public int? Kilometerstand { get; set; }
    public DateTime? Erstzulassung { get; set; }
    public DateTime? Liefertermin { get; set; }
    public DateTime? AngebotsDatum { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}