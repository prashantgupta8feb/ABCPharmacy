using MedicineApi.Models;
using System.Text.Json;

namespace MedicineApi.Services
{
    public class MedicineService
    {
        private readonly string _filePath;

        public MedicineService()
        {
            _filePath = Path.Combine(Directory.GetCurrentDirectory(), "Data", "medicines.json");

            if (!File.Exists(_filePath))
            {
                Directory.CreateDirectory(Path.GetDirectoryName(_filePath)!);
                File.WriteAllText(_filePath, "[]");
            }
        }

        public List<Medicine> GetAll()
        {
            var json = File.ReadAllText(_filePath);

            return JsonSerializer.Deserialize<List<Medicine>>(json)
                   ?? new List<Medicine>();
        }

        public void Add(Medicine medicine)
        {
            var medicines = GetAll();

            medicine.Id = medicines.Count == 0
                ? 1
                : medicines.Max(x => x.Id) + 1;

            medicines.Add(medicine);

            var json = JsonSerializer.Serialize(medicines,
                new JsonSerializerOptions
                {
                    WriteIndented = true
                });

            File.WriteAllText(_filePath, json);
        }
    }
}
