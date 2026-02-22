using Microsoft.AspNetCore.Mvc;
using Autohaendler.Application.Services;
using Autohaendler.Domain.Entities;

namespace Autohaendler.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VehiclesController : ControllerBase
{
    private readonly VehicleService _vehicleService;
    private readonly ILogger<VehiclesController> _logger;

    public VehiclesController(VehicleService vehicleService, ILogger<VehiclesController> logger)
    {
        _vehicleService = vehicleService;
        _logger = logger;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Vehicle>>> GetVehicles()
    {
        try
        {
            var vehicles = await _vehicleService.GetAllVehiclesAsync();
            return Ok(vehicles);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving vehicles");
            return StatusCode(500, "Internal server error");
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Vehicle>> GetVehicle(int id)
    {
        try
        {
            var vehicle = await _vehicleService.GetVehicleByIdAsync(id);
            
            if (vehicle == null)
            {
                return NotFound();
            }

            return Ok(vehicle);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving vehicle with id {VehicleId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    [HttpPost]
    public async Task<ActionResult<Vehicle>> CreateVehicle(Vehicle vehicle)
    {
        try
        {
            var createdVehicle = await _vehicleService.CreateVehicleAsync(vehicle);
            return CreatedAtAction(nameof(GetVehicle), new { id = createdVehicle.Id }, createdVehicle);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating vehicle");
            return StatusCode(500, "Internal server error");
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateVehicle(int id, Vehicle vehicle)
    {
        try
        {
            if (id != vehicle.Id)
            {
                return BadRequest();
            }

            var updatedVehicle = await _vehicleService.UpdateVehicleAsync(vehicle);
            return Ok(updatedVehicle);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating vehicle with id {VehicleId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteVehicle(int id)
    {
        try
        {
            await _vehicleService.DeleteVehicleAsync(id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting vehicle with id {VehicleId}", id);
            return StatusCode(500, "Internal server error");
        }
    }
}