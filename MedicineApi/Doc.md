# ABC Pharmacy Assessment Solution (.NET Core Web API + JavaScript SPA)

## Tech Stack

* Backend: ASP.NET Core Web API (.NET 8)
* Frontend: React JS
* Storage: JSON file on server side
* Styling: Basic CSS

---

# Project Structure

```txt
ABCPharmacy/
│
├── backend/
│   ├── Controllers/
│   │   └── MedicinesController.cs
│   ├── Models/
│   │   └── Medicine.cs
│   ├── Services/
│   │   └── MedicineService.cs
│   ├── Data/
│   │   └── medicines.json
│   ├── Program.cs
│   └── backend.csproj
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── MedicineForm.jsx
│   │   │   └── MedicineTable.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

# Step 1 — Create Backend Project

## Create Web API

```bash
mkdir ABCPharmacy
cd ABCPharmacy

mkdir MedicineApi
cd MedicineApi

dotnet new webapi -n MedicineApi --use-controllers -f net9.0
```

## Run Backend

```bash
dotnet run
```

Backend URL:

```txt
http://localhost:5208
```

---

# Step 2 — Create Frontend React App

Open another terminal:

```bash
cd ABCPharmacy

npm create vite@latest medicine-ui -- --template react

cd medicine-ui
npm install
npm run dev
```

Frontend URL:

```txt
http://localhost:5173
```

---

# Backend Implementation

# Model

## Models/Medicine.cs

```csharp
namespace MedicineApi.Models
{
    public class Medicine
    {
        public int Id { get; set; }

        public string FullName { get; set; } = string.Empty;

        public string Notes { get; set; } = string.Empty;

        public DateTime ExpiryDate { get; set; }

        public int Quantity { get; set; }

        public decimal Price { get; set; }

        public string Brand { get; set; } = string.Empty;
    }
}

```

---

# Service Layer

## Services/MedicineService.cs


---

# Controller

## Controllers/MedicinesController.cs

---

# Program.cs

## Program.cs


---

# Sample JSON Data

## Data/medicines.json


---

# Frontend Implementation

# Install Axios

```bash
npm install axios
```

---

# App.jsx

## src/App.jsx


---

# MedicineForm.jsx

## src/components/MedicineForm.jsx


---

# MedicineTable.jsx

## src/components/MedicineTable.jsx


---

# App.css

## src/App.css

---

# Functionalities Covered

## Implemented Requirements

* Add medicine details
* View medicine list
* Store data in JSON file
* Search medicine by name
* Red row for expiry less than 30 days
* Yellow row for quantity less than 10
* SPA architecture
* ASP.NET Core Web API
* React frontend

---

# How to Run Complete Application

# Run Backend

```bash
cd backend

dotnet run
```

---

# Run Frontend

```bash
cd frontend

npm install
npm run dev
```

---

# Important Notes for Submission

### Architecture

* Used layered architecture
* Service layer added for separation of concerns
* React SPA communicates with backend via REST API
* JSON file used as lightweight persistence layer

### Good Practices Used

* Dependency Injection
* Async frontend API calls
* Component-based React design
* CORS configuration
* Search filtering
* Conditional row styling

### Future Improvements

* Add Edit/Delete APIs
* Add Validation
* Add Logging
* Add Unit Testing
* Replace JSON with SQL Server
* Add Authentication & Authorization
* Dockerize application

---

# Quick Explanation

"This solution is built using ASP.NET Core Web API and ReactJS as a Single Page Application. Medicines are stored in a JSON file on the server side as required. The frontend consumes REST APIs to add and fetch medicines. Search functionality is implemented using client-side filtering. Conditional row highlighting is implemented for low stock and near-expiry medicines using dynamic CSS classes."
