import { useState } from "react";
import axios from "axios";

function MedicineForm({ onMedicineAdded }) {
    const [formData, setFormData] = useState({
        fullName: "",
        notes: "",
        expiryDate: "",
        quantity: "Quantity",
        price: "Price",
        brand: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post(
            "http://localhost:5208/api/medicines",
            formData
        );

        setFormData({
            fullName: "",
            notes: "",
            expiryDate: "",
            quantity: 0,
            price: 0,
            brand: "",
        });

        onMedicineAdded();
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                name="fullName"
                placeholder="Medicine Name"
                value={formData.fullName}
                onChange={handleChange}
                required
            />

            <input
                name="brand"
                placeholder="Brand"
                value={formData.brand}
                onChange={handleChange}
                required
            />

            <input
                name="notes"
                placeholder="Notes"
                value={formData.notes}
                onChange={handleChange}
            />

            <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
            />

            <input
                type="number"
                step="0.01"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
            />

            <button type="submit">Add Medicine</button>
        </form>
    );
}

export default MedicineForm;