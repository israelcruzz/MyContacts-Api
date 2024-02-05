# MyContacts API

## Overview

MyContacts is a simple API for managing contacts with categories. It allows you to perform CRUD (Create, Read, Update, Delete) operations on both contacts and categories. The API is built using TypeScript, Node.js, and Prisma for database interaction.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- PostgreSQL database

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/israelcruzz/mycontacts.git
cd mycontacts
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root and set your database URL:

```env
DATABASE_URL=your_postgresql_database_url
```

4. Run the Prisma migration to create the database tables:

```bash
npx prisma migrate dev
```

5. Start the server:

```bash
npm start
```

The server will be running on `http://localhost:3030`.

## API Endpoints

### Contacts

- **List Contacts**

  ```http
  GET /contacts
  ```

- **Get Contact by ID**

  ```http
  GET /contacts/:id
  ```

- **Create Contact**

  ```http
  POST /contacts
  ```

- **Update Contact**

  ```http
  PUT /contacts/:id
  ```

- **Delete Contact**

  ```http
  DELETE /contacts/:id
  ```

### Categories

- **List Categories**

  ```http
  GET /categories
  ```

- **Get Category by ID**

  ```http
  GET /categories/:id
  ```

- **Create Category**

  ```http
  POST /categories
  ```

- **Update Category**

  ```http
  PUT /categories/:id
  ```

- **Delete Category**

  ```http
  DELETE /categories/:id
  ```

## Project Structure

- `src/` - Source code directory
  - `controllers/` - Controllers for handling HTTP requests
  - `database/` - Prisma database client setup
  - `repositories/` - Repository classes for database operations
  - `routes.ts` - API routes configuration
  - `server.ts` - Express server setup
- `schema.prisma` - Prisma schema definition
- `.env` - Environment variable configuration
- `package.json` - Node.js project configuration

## Dependencies

- `@prisma/client`: Prisma client for database interactions
- `cors`: CORS middleware for Express
- `dotenv`: Loads environment variables from a file
- `express`: Web framework for Node.js

## Scripts

- `npm start`: Start the server using `ts-node`

## Development Dependencies

- `@types/cors`: TypeScript type definitions for CORS
- `@types/express`: TypeScript type definitions for Express
- `prisma`: Prisma CLI for database migrations
- `ts-node`: TypeScript execution and REPL for Node.js
- `typescript`: TypeScript language support

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.