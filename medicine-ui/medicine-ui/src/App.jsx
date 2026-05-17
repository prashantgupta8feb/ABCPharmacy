import { useEffect, useState } from "react";
import axios from "axios";
import MedicineForm from "./MedicineForm";
import MedicineTable from "./MedicineTable";
import "./App.css";

function App() {
  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMedicines = async () => {
    const response = await axios.get(
      "http://localhost:5208/api/medicines",
    );

    setMedicines(response.data);
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  const filteredMedicines = medicines.filter((m) =>
    m.fullName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>ABC Pharmacy</h1>

      <input
        type="text"
        placeholder="Search medicine"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <MedicineForm onMedicineAdded={fetchMedicines} />

      <MedicineTable medicines={filteredMedicines} />
    </div>
  );
}

export default App;