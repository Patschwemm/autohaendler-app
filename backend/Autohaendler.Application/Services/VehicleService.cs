using Autohaendler.Domain.Entities;
using Autohaendler.Domain.Repositories;

namespace Autohaendler.Application.Services;

public class VehicleService
{
    private readonly IVehicleRepository _vehicleRepository;

    public VehicleService(IVehicleRepository vehicleRepository)
    {
        _vehicleRepository = vehicleRepository;
    }

    public async Task<IEnumerable<Vehicle>> GetAllVehiclesAsync()
    {
        return await _vehicleRepository.GetAllAsync();
    }

    public async Task<Vehicle?> GetVehicleByIdAsync(int id)
    {
        return await _vehicleRepository.GetByIdAsync(id);
    }

    public async Task<Vehicle> CreateVehicleAsync(Vehicle vehicle)
    {
        // Auto-generate Nr if not provided or empty
        if (string.IsNullOrWhiteSpace(vehicle.Nr))
        {
            // Get the highest existing Nr and increment by 1
            var allVehicles = await _vehicleRepository.GetAllAsync();
            var maxNr = 0;
            
            foreach (var existingVehicle in allVehicles)
            {
                if (int.TryParse(existingVehicle.Nr, out var nr))
                {
                    if (nr > maxNr)
                        maxNr = nr;
                }
            }
            
            // Start from 1 if no vehicles exist, otherwise increment
            var nextNr = maxNr + 1;
            vehicle.Nr = nextNr.ToString();
        }
        
        // Set creation timestamp
        vehicle.CreatedAt = DateTime.UtcNow;
        vehicle.UpdatedAt = DateTime.UtcNow;
        
        return await _vehicleRepository.AddAsync(vehicle);
    }

    public async Task<Vehicle> UpdateVehicleAsync(Vehicle vehicle)
    {
        // Set update timestamp
        vehicle.UpdatedAt = DateTime.UtcNow;
        
        return await _vehicleRepository.UpdateAsync(vehicle);
    }

    public async Task DeleteVehicleAsync(int id)
    {
        await _vehicleRepository.DeleteAsync(id);
    }
}