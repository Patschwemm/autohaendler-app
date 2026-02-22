using Microsoft.EntityFrameworkCore;
using Autohaendler.Domain.Entities;

namespace Autohaendler.Infrastructure.Data;

public class AutohaendlerDbContext : DbContext
{
    public AutohaendlerDbContext(DbContextOptions<AutohaendlerDbContext> options)
        : base(options)
    {
    }

    public DbSet<Vehicle> Vehicles { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        // Configure Vehicle entity
        modelBuilder.Entity<Vehicle>(entity =>
        {
            entity.HasKey(e => e.Id);
            
            // Base Info - Nr is required, others optional
            entity.Property(e => e.Nr).HasMaxLength(50).IsRequired();
            entity.Property(e => e.Nr1).HasMaxLength(50);
            entity.Property(e => e.Nr2).HasMaxLength(50);
            entity.Property(e => e.Typ1).HasMaxLength(100);
            entity.Property(e => e.Typ2).HasMaxLength(100);
            entity.Property(e => e.Fahrzeug).HasMaxLength(200);
            entity.Property(e => e.Detail1).HasMaxLength(200);
            entity.Property(e => e.Detail2).HasMaxLength(200);
            entity.Property(e => e.Farbe).HasMaxLength(50);
            
            // Verkauf - Customer Info (all optional)
            entity.Property(e => e.Kundenname).HasMaxLength(200);
            entity.Property(e => e.Vorname).HasMaxLength(100);
            entity.Property(e => e.Nachname).HasMaxLength(100);
            entity.Property(e => e.Strasse).HasMaxLength(200);
            entity.Property(e => e.Plz).HasMaxLength(20);
            entity.Property(e => e.Ort).HasMaxLength(100);
            entity.Property(e => e.Land).HasMaxLength(100);
            entity.Property(e => e.UstIdNr).HasMaxLength(50);
            entity.Property(e => e.Telefon).HasMaxLength(50);
            
            // Verkauf - Pricing (all optional)
            entity.Property(e => e.Preis).HasPrecision(18, 2);
            entity.Property(e => e.PreisTyp).HasMaxLength(20);
            entity.Property(e => e.MinPreis).HasPrecision(18, 2);
            entity.Property(e => e.MinPreisTyp).HasMaxLength(20);
            entity.Property(e => e.HaendlerPreis).HasPrecision(18, 2);
            entity.Property(e => e.HaendlerPreisTyp).HasMaxLength(20);
            entity.Property(e => e.Neupreis).HasPrecision(18, 2);
            entity.Property(e => e.NeupreisTyp).HasMaxLength(20);
            entity.Property(e => e.NettoVk).HasPrecision(18, 2);
            entity.Property(e => e.BruttoVk).HasPrecision(18, 2);
            
            // Verkauf - Other (all optional)
            entity.Property(e => e.Transport).HasMaxLength(100);
            entity.Property(e => e.Waehrung).HasMaxLength(10);
            entity.Property(e => e.Mwst).HasPrecision(5, 2);
            entity.Property(e => e.Zahlungsart).HasMaxLength(100);
            
            // Ankauf (all optional)
            entity.Property(e => e.AnkaufText1).HasMaxLength(200);
            entity.Property(e => e.AnkaufText2).HasMaxLength(200);
            entity.Property(e => e.AnkaufText3).HasMaxLength(200);
            entity.Property(e => e.AnkaufStrasse).HasMaxLength(200);
            entity.Property(e => e.AnkaufLand).HasMaxLength(100);
            entity.Property(e => e.AnkaufOrt).HasMaxLength(100);
            entity.Property(e => e.AnkaufPlz).HasMaxLength(20);
            entity.Property(e => e.AnkaufTelefon).HasMaxLength(50);
            entity.Property(e => e.NettoEk).HasPrecision(18, 2);
            entity.Property(e => e.AnkaufMwst).HasPrecision(5, 2);
            entity.Property(e => e.BruttoEk).HasPrecision(18, 2);
            entity.Property(e => e.AnkaufWaehrung).HasMaxLength(10);
            entity.Property(e => e.AnkaufZahlungsart).HasMaxLength(100);
            
            // Fahrzeug - Numbers and IDs (all optional)
            entity.Property(e => e.Fahrgestellnummer).HasMaxLength(100);
            entity.Property(e => e.Motornummer).HasMaxLength(100);
            entity.Property(e => e.Briefnummer).HasMaxLength(100);
            entity.Property(e => e.Herstellerschluessel).HasMaxLength(50);
            entity.Property(e => e.Typschluessel).HasMaxLength(50);
            entity.Property(e => e.Schwackecode).HasMaxLength(50);
            
            // Fahrzeug - Base Data (all optional)
            entity.Property(e => e.Innenfarbe).HasMaxLength(50);
            entity.Property(e => e.Polsterung).HasMaxLength(50);
            entity.Property(e => e.Getriebe).HasMaxLength(50);
            entity.Property(e => e.Kraftstoff).HasMaxLength(50);
            entity.Property(e => e.Schadstoffklasse).HasMaxLength(50);
            
            // Fahrzeug - Consumption (all optional)
            entity.Property(e => e.Innerorts).HasPrecision(5, 2);
            entity.Property(e => e.Ausserorts).HasPrecision(5, 2);
            entity.Property(e => e.Kombiniert).HasPrecision(5, 2);
            
            // Ausstattung - Text Fields (all optional)
            entity.Property(e => e.AusstattungText1).HasMaxLength(500);
            entity.Property(e => e.AusstattungText2).HasMaxLength(500);
            entity.Property(e => e.Bemerkung).HasMaxLength(2000);
            
            // Legacy fields (all optional except Typ and NettoBrutto for compatibility)
            entity.Property(e => e.Typ).HasMaxLength(100);
            entity.Property(e => e.NettoBrutto).HasMaxLength(10);
            entity.Property(e => e.Marke).HasMaxLength(100);
            entity.Property(e => e.Modell).HasMaxLength(100);
            
            // Set default values for audit fields
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("datetime('now')");
            entity.Property(e => e.UpdatedAt).HasDefaultValueSql("datetime('now')");
        });

        // Clear existing seed data - will be managed through UI now
    }
}