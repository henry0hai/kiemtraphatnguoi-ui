# kiemtraphatnguoi-ui
UI allow using API from kiemtraphatnguoi API

> Note: the UI layout is copy from Hoàng Phúc - FoxN


## Features

- Input a license plate number and vehicle type to query traffic violation information.
- Displays violation details such as time, location, and actions.
- Fully responsive UI built with Tailwind CSS.
- Simple backend integration with kiemtraphatnguoi API.

## Prerequisites

- Node.js installed on your system.
- Docker (optional, for containerized deployment).

## Installation

1. Clone the Repository
2. Install Dependencies

```bash
npm install
```

## Usage

### Run Locally

1. Make sure the kiemtraphatnguoi API is running on http://localhost:8080.
2. Start the frontend:

```bash
npm start
```

3. Open your browser and navigate to http://localhost:3000.

## Docker Deployment

1. Build the Docker Image

```bash
docker build -t kiemtraphatnguoi-ui .
```

2. Run the Docker Container

```bash
docker run -p 3000:3000 --name kiemtraphatnguoi-ui-container kiemtraphatnguoi-ui
```

3. Access the Application

Open your browser and navigate to http://localhost:3000.

## Credits

UI Layout: Adapted from Hoàng Phúc - FoxN.

Backend API: [kiemtraphatnguoi](https://github.com/henry0hai/kiemtraphatnguoi).
