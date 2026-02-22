using Microsoft.EntityFrameworkCore;
using Autohaendler.Domain.Entities;
using Autohaendler.Domain.Repositories;
using Autohaendler.Infrastructure.Data;

namespace Autohaendler.Infrastructure.Repositories;

public class VehicleRepository : IVehicleRepository
{
    private readonly AutohaendlerDbContext _context;

    public VehicleRepository(AutohaendlerDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Vehicle>> GetAllAsync()
    {
        return await _context.Vehicles
            .OrderByDescending(v => v.CreatedAt)
            .ToListAsync();
    }

    public async Task<Vehicle?> GetByIdAsync(int id)
    {
        return await _context.Vehicles
            .FirstOrDefaultAsync(v => v.Id == id);
    }

    public async Task<Vehicle> AddAsync(Vehicle vehicle)
    {
        vehicle.CreatedAt = DateTime.UtcNow;
        vehicle.UpdatedAt = DateTime.UtcNow;
        
        _context.Vehicles.Add(vehicle);
        await _context.SaveChangesAsync();
        return vehicle;
    }

    public async Task<Vehicle> UpdateAsync(Vehicle vehicle)
    {
        vehicle.UpdatedAt = DateTime.UtcNow;
        
        _context.Entry(vehicle).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return vehicle;
    }

    public async Task DeleteAsync(int id)
    {
        var vehicle = await GetByIdAsync(id);
        if (vehicle != null)
        {
            _context.Vehicles.Remove(vehicle);
            await _context.SaveChangesAsync();
        }
    }
}