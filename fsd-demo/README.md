# FSD Demo Setup Guide

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/goyalsushant/b50.git
```

---

## Step 2: Navigate to the Project Directory

```bash
cd b50/fsd-demo
```

---

## Step 3: Start the Backend

Navigate to the backend folder:

```bash
cd BE
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:3000
```

---

## Step 4: Start the Frontend

Open a new terminal and navigate to the frontend folder:

```bash
cd b50/fsd-demo/FE
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

---

## Application URLs

| Service | URL |
|----------|------|
| Backend | http://localhost:3000 |
| Frontend | http://localhost:5173 |

---

## Project Structure

```text
fsd-demo/
├── BE/    # Backend Application
└── FE/    # Frontend Application
```