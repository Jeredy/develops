Here's the updated `README.md` for a project using **Next.js** and **NestJS** without the testing sections:

```markdown
# Develops

## Description

Brief description of the project. This can include its purpose, features, and any other relevant information.

---

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Jeredy/develops.git
   cd develops
   ```

2. **Install dependencies**:

   If you're using **npm**:

   ```bash
   npm install
   ```

   Or if you're using **yarn**:

   ```bash
   yarn install
   ```

3. **Environment variables setup**:

   Create a `.env.local` file in the root directory and define the necessary environment variables. Here's an example:

   ```env
   NEXT_PUBLIC_API_URL=https://api.example.com
   NEXT_PUBLIC_SECRET_API_KEY=your-secret-key-here
   API_SECRET_KEY=your-api-secret-key-here
   ```

   Replace the placeholder values with your actual API URLs and secret keys.

---

## Running the Application

The application consists of both the **Next.js frontend** and **NestJS backend**.

### Running the Frontend (Next.js):

To run the Next.js application in **development mode**:

```bash
npm run dev
```

Or with **yarn**:

```bash
yarn dev
```

The Next.js frontend should now be running on `http://localhost:3000`.

### Running the Backend (NestJS):

To start the NestJS backend server in **development mode**:

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

2. Install the backend dependencies:

   ```bash
   npm install
   ```

3. Run the backend server:

   ```bash
   npm run start:dev
   ```

The NestJS backend should now be running on `http://localhost:8080`.

---

## Environment Variables

Below are the necessary environment variables for the application:

### Frontend (`.env.local` for Next.js):

- `NEXT_PUBLIC_BASE_URL_DEVELOPMENTE`: The base URL for the API.
- `NEXT_PUBLIC_BASE_URL_PRODUCTION`: The base URL for the API.
- `NEXT_PUBLIC_SECRET_API_KEY`: The secret API key for frontend requests.

### Backend (`.env` for NestJS):

- `API_SECRET_KEY`: The secret key for validating API requests on the backend.

### Example `.env.local` for Next.js:

```env
NEXT_PUBLIC_BASE_URL_DEVELOPMENTE=https://api.example.com
NEXT_PUBLIC_BASE_URL_PRODUCTION=https://api.example.com
NEXT_PUBLIC_SECRET_API_KEY=your-secret-api-key
```

### Example `.env` for NestJS:

```env
API_SECRET_KEY=your-api-secret-key
```

Make sure to replace the placeholders with your actual values.

---

## Dependencies

To install the dependencies for both frontend and backend, run the following commands in their respective directories:

1. For the frontend (Next.js):

   ```bash
   cd frontend
   npm install
   ```

2. For the backend (NestJS):

   ```bash
   cd backend
   npm install
   ```

