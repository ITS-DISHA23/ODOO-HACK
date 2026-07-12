# 🚛 TransitOps – Smart Transport Operations Platform

A modern **Fleet & Transport Management System** that helps organizations efficiently manage vehicles, drivers, trips, maintenance schedules, fuel records, and operational analytics through an intuitive dashboard.

TransitOps is a **full-stack web application** built with a modern React frontend, Express backend, and SQLite database. It provides secure authentication, real-time fleet workflows, interactive analytics, and centralized transport management.

---

# 📌 Problem Statement

Managing transport operations manually often leads to:

- Vehicle scheduling conflicts
- Driver assignment issues
- Poor fleet visibility
- Inefficient trip planning
- Missed maintenance schedules
- Difficulty tracking fuel expenses
- Lack of operational analytics

TransitOps provides a centralized platform to streamline transport operations through digital workflows, automation, and real-time monitoring.

---

# 🎯 Objectives

- Centralize fleet management
- Improve vehicle utilization
- Simplify driver management
- Digitize trip assignment workflows
- Track maintenance history
- Monitor fuel expenses
- Provide operational analytics
- Secure access using authentication

---

# 🚀 Features

## 🔐 Authentication

Secure user authentication with backend validation.

### Features

- User Registration
- Secure Login
- Session Management
- Protected Routes
- Backend Authentication APIs

---

## 📊 Dashboard

A real-time dashboard providing a complete overview of fleet operations.

### KPI Cards

- 🚚 Total Vehicles
- 👨‍✈️ Total Drivers
- 🛣 Active Trips
- ✅ Available Vehicles

### Interactive Analytics

- Vehicle Status Pie Chart
- Trip Analytics Bar Chart

### Fleet Map

- Interactive OpenStreetMap
- Live Vehicle Locations
- Vehicle Status Popups

---

## 🚚 Vehicle Management

Manage the complete fleet with full CRUD functionality.

### Features

- Add Vehicle
- Edit Vehicle
- Delete Vehicle
- Search Vehicles
- Filter by Status

### Vehicle Status

- Available
- On Trip
- Maintenance

---

## 👨‍✈️ Driver Management

Manage driver information and availability.

### Features

- Add Driver
- Edit Driver
- Delete Driver
- Search Drivers
- Filter by Status

### Driver Status

- Available
- Assigned
- Off Duty

---

## 🛣 Trip Management

Assign vehicles and drivers to transportation trips.

### Features

- Create Trip
- Assign Available Vehicle
- Assign Available Driver
- Complete Trip

### Automatic Workflow

```
Available Vehicle
        ↓
Assign Trip
        ↓
Vehicle → On Trip

Driver → Assigned

Complete Trip
        ↓
Vehicle → Available

Driver → Available
```

### Business Validations

- Only available vehicles can be assigned.
- Only available drivers can be assigned.
- Vehicle and driver status update automatically.
- Vehicles under maintenance cannot be assigned.

---

## 🔧 Maintenance Management

Manage vehicle servicing and maintenance records.

### Features

- Create Maintenance Request
- Update Maintenance Status
- View Maintenance Records
- Complete Maintenance
- Delete Maintenance Record

### Workflow

```
Vehicle Available
        ↓
Maintenance Created
        ↓
Vehicle → Maintenance

Maintenance Completed
        ↓
Vehicle → Available
```

### Business Rules

- Vehicles under maintenance cannot be assigned to trips.
- Completing maintenance automatically restores vehicle availability.

---

## ⛽ Fuel Logs

Track vehicle fuel usage and expenses.

### Features

- Add Fuel Log
- Select Vehicle
- Select Driver
- Fuel Type
- Fuel Quantity
- Fuel Cost
- Odometer Reading
- Fuel Date
- Delete Fuel Log

---

## 📈 Reports & Analytics

Generate operational summaries and business insights.

### Includes

- Fleet Summary
- Vehicle Statistics
- Driver Statistics
- Trip Statistics
- Fuel Expense Summary
- Print Reports

---

# 📌 Business Rules

✔ Vehicle registration number must be unique.

✔ Only available vehicles can be assigned to trips.

✔ Only available drivers can be assigned to trips.

✔ Vehicles under maintenance cannot be assigned.

✔ Completing a trip automatically changes:

- Vehicle → Available
- Driver → Available

✔ Creating maintenance automatically changes:

- Vehicle → Maintenance

✔ Completing maintenance automatically changes:

- Vehicle → Available

✔ Fuel logs require:

- Vehicle
- Driver
- Fuel Quantity
- Cost
- Odometer
- Date

---

# 📂 Project Modules

```
TransitOps
│
├── Authentication
├── Dashboard
├── Vehicle Management
├── Driver Management
├── Trip Management
├── Maintenance Management
├── Fuel Logs
├── Reports & Analytics
├── Fleet Map
├── Backend API
└── Database
```

---

# 🏗️ System Architecture

```
                React + Vite
                      │
                      │ REST APIs
                      ▼
             Node.js + Express.js
                      │
                      ▼
                SQLite Database
```

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- React Icons

## Backend

- Node.js
- Express.js

## Database

- SQLite

## Data Visualization

- Chart.js
- React ChartJS 2

## Maps

- React Leaflet
- OpenStreetMap

## State Management

- React Context API

---

# 🔄 System Workflow

```
User Login
      ↓
Dashboard
      ↓
Manage Vehicles
      ↓
Manage Drivers
      ↓
Assign Trips
      ↓
Track Maintenance
      ↓
Track Fuel Logs
      ↓
Generate Reports
```

---

# 📷 Application Screens

- 🔐 Login Page
- 📊 Dashboard
- 🚚 Vehicle Management
- 👨‍✈️ Driver Management
- 🛣 Trip Management
- 🔧 Maintenance Management
- ⛽ Fuel Logs
- 📈 Reports & Analytics
- 🗺 Fleet Map

---

# 🌟 Future Enhancements

- Role-Based Access Control (Admin, Fleet Manager, Driver)
- PostgreSQL Integration
- GPS Live Vehicle Tracking
- Route Optimization
- AI-Based Predictive Maintenance
- Fuel Consumption Prediction
- Email & SMS Notifications
- Export Reports to PDF
- QR Code Vehicle Identification
- Dark Mode
- Mobile Application

---

# 👥 Team

## Team Name

**TrackWise**

---

Built during **Odoo Hackathon 2026** as a modern full-stack Fleet Management System featuring secure authentication, Express backend APIs, SQLite database integration, interactive dashboards, fleet visualization, maintenance management, fuel tracking, and operational analytics.
