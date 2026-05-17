using MedicineApi.Models;
using MedicineApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace MedicineApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicinesController : ControllerBase
    {
        private readonly MedicineService _service;

        public MedicinesController(MedicineService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var medicines = _service.GetAll();

            return Ok(medicines);
        }

        [HttpPost]
        public IActionResult AddMedicine([FromBody] Medicine medicine)
        {
            _service.Add(medicine);

            return Ok(new
            {
                message = "Medicine added successfully"
            });
        }
    }
}
