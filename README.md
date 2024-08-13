# CDN - Complete Developer Network: Freelancer Management System

Welcome to the CDN Freelancer Management System! This project provides a comprehensive solution for managing a directory of freelancers. It includes a RESTful API built with .NET Core and a frontend interface developed using ReactJS.

## Project Overview

The system enables CRUD (Create, Read, Update, Delete) operations on freelancer data. The user interface allows for easy interaction with the API, offering a seamless experience for managing freelancer information.

## Features

- **API Endpoints:**
  - `GET /Users` - Retrieve a list of freelancers.
  - `POST /Users/AddUser` - Register a new freelancer.
  - `PATCH /Users/UpdateUser/{id:guid}` - Update an existing freelancer's details.
  - `DELETE /Users/DeleteUser/{id:guid}` - Delete a freelancer.

- **User Model Attributes:**
  - `username` (string)
  - `mail` (string)
  - `phone_number` (string)
  - `skillsets` (array of strings)
  - `hobby` (string)

- **Frontend Operations:**
  - View a list of freelancers.
  - Register a new freelancer.
  - Delete a freelancer.
  - Update freelancer details.

## Getting Started

### Prerequisites

- [.NET Core SDK](https://dotnet.microsoft.com/download) (for the backend)
- [Node.js and npm](https://nodejs.org/) (for the frontend)
- [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server)


### Backend Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/LeongJJ/cdnBE.git
   cd cdnBE

2. **Install Dependencies:**

   ```bash
   dotnet restore

3. **Configure the Database:**

   Open appsettings.json and update the connection string with your Microsoft SQL Server database credentials.

4. **Apply Migrations:**

   ```bash
   dotnet ef database update

5. **Run the API:**

   ```bash
   dotnet run

### Frontend Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/LeongJJ/cdnFE.git
   cd cdnFE

2. **Install Dependencies:**

   ```bash
   npm install

3. **Start the React Application:**

   ```bash
   npm start
