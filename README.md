# ABC Pharmacy - Medicine Management System

A Single Page Application (SPA) developed using **ASP.NET Core Web API** and **ReactJS** to manage pharmacy medicines inventory and sales-related tracking.

---

# Tech Stack

## Backend
- ASP.NET Core Web API (.NET 9)
- REST API
- JSON File Storage
- Swagger UI

## Frontend
- ReactJS
- Vite
- Axios
- CSS

---

# Features

## Medicine Management
- Add new medicines
- View available medicines
- Store medicine details in JSON file

## Search Functionality
- Search medicines by medicine name

## Conditional Highlighting
- Red background for medicines expiring within 30 days
- Yellow background for medicines with quantity less than 10

## API Documentation
- Swagger UI integrated

---

# Medicine Attributes

| Attribute | Type |
|---|---|
| Full Name | Text |
| Notes | Text |
| Expiry Date | Date |
| Quantity | Number |
| Price | Decimal (2 places) |
| Brand | Text |

---
# Solution Architecture

```mermaid
flowchart TD

    A[React Frontend<br/>Vite + ReactJS] -->|Axios HTTP Requests| B[ASP.NET Core Web API]

    subgraph Frontend
        A1[MedicineForm Component]
        A2[MedicineTable Component]
        A3[Search Functionality]
        A4[Conditional Row Highlighting]
    end

    A --> A1
    A --> A2
    A --> A3
    A --> A4

    subgraph Backend
        B1[MedicinesController]
        B2[MedicineService]
        B3[Medicine Model]
    end

    B --> B1
    B1 --> B2
    B2 --> B3

    B2 -->|Read / Write| C[(medicines.json)]

    subgraph Storage
        C
    end```

---

# Request Flow

```text
User Action (UI)
       |
       v
React Components
       |
       v
Axios HTTP Request
       |
       v
ASP.NET Core Controller
       |
       v
Service Layer
       |
       v
JSON File Storage
       |
       v
API Response
       |
       v
React UI Update
```

---

# Project Structure

```text
ABCPharmacy/
│
├── MedicineApi/
│   ├── Controllers/
│   │   └── MedicinesController.cs
│   │
│   ├── Models/
│   │   └── Medicine.cs
│   │
│   ├── Services/
│   │   └── MedicineService.cs
│   │
│   ├── Data/
│   │   └── medicines.json
│   │
│   ├── Program.cs
│   └── MedicineApi.csproj
│
├── medicine-ui/
│   ├── src/
│   │   ├── components/
│   │   │   ├── MedicineForm.jsx
│   │   │   └── MedicineTable.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# Backend Setup

## Create Web API

```bash
dotnet new webapi -n MedicineApi --use-controllers -f net9.0
```

## Navigate to API Project

```bash
cd MedicineApi
```

## Restore Packages

```bash
dotnet restore
```

## Run API

```bash
dotnet run
```

## Swagger URL

```text
http://localhost:5208/swagger
```

---

# Frontend Setup

## Create React App

```bash
npm create vite@latest medicine-ui -- --template react
```

## Navigate to Frontend

```bash
cd medicine-ui
```

## Install Dependencies

```bash
npm install
```

## Install Axios

```bash
npm install axios
```

## Run React App

```bash
npm run dev
```

## Frontend URL

```text
http://localhost:5173
```

---

# API Endpoints

## Get All Medicines

```http
GET /api/medicines
```

## Add Medicine

```http
POST /api/medicines
```

---

# Sample Medicine JSON

```json
[
  {
    "id": 1,
    "fullName": "Paracetamol 500mg",
    "notes": "Pain relief medicine",
    "expiryDate": "2026-06-20",
    "quantity": 8,
    "price": 50.00,
    "brand": "Cipla"
  }
]
```

---

# UI Color Indicators

| Condition | Color |
|---|---|
| Expiry less than 30 days | Red |
| Quantity less than 10 | Yellow |

---

# Design Principles Used

- Single Page Application Architecture
- RESTful API Design
- Separation of Concerns
- Service Layer Pattern
- Component-Based React Architecture
- Dependency Injection
- JSON-Based Lightweight Persistence

---

# Future Enhancements

- Edit Medicine
- Delete Medicine
- Pagination
- Authentication & Authorization
- Database Integration (SQL Server)
- Docker Support
- Unit Testing
- Logging & Monitoring

---

# Author

Prashant Gupta
