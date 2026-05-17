function MedicineTable({ medicines }) {
    const getRowClass = (medicine) => {
        const expiryDate = new Date(medicine.expiryDate);

        const diffInDays =
            (expiryDate - new Date()) / (1000 * 60 * 60 * 24);

        if (diffInDays < 30) {
            return "expiry-warning";
        }

        if (medicine.quantity < 10) {
            return "quantity-warning";
        }

        return "";
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Expiry Date</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>
                {medicines.map((medicine) => (
                    <tr key={medicine.id} className={getRowClass(medicine)}>
                        <td>{medicine.fullName}</td>
                        <td>{medicine.brand}</td>
                        <td>{medicine.expiryDate.split("T")[0]}</td>
                        <td>{medicine.quantity}</td>
                        <td>{medicine.price.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MedicineTable;