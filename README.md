# Express Boilerplate (TypeScript)

A robust and scalable boilerplate for building RESTful APIs using [Express.js](https://expressjs.com/) and [TypeScript](https://www.typescriptlang.org/). This setup emphasizes best practices, maintainability, and developer productivity.

## 🚀 Features

* **TypeScript Support**: Leverages TypeScript for type safety and improved developer experience.
* **Express.js Framework**: Utilizes Express.js for handling HTTP requests and routing.
* **ESLint & Prettier**: Integrated for consistent code formatting and linting.
* **Modular Structure**: Organized project structure promoting scalability and maintainability.
* **Environment Configuration**: Manage environment variables seamlessly using `.env` files.
* **Package Management with pnpm**: Efficient and fast package management using [pnpm](https://pnpm.io/).

## 📁 Project Structure

```bash
express-boilerplate/
├── src/
│   ├── controllers/    # Route handlers (TODO)
│   ├── routes/         # API routes
│   ├── middlewares/    # Custom middleware functions
│   ├── utils/          # Utility functions (TODO)
│   ├── app.ts          # Express app configuration
│   └── server.ts       # Application entry point
├── .env                # Environment variables
├── .gitignore
├── .prettierrc         # Prettier configuration
├── eslint.config.mjs   # ESLint configuration
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json       # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v20 or later)
* [pnpm](https://pnpm.io/) (v6 or later)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tibrahimdev/express-boilerplate.git
   cd express-boilerplate
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and define your environment variables as needed.

### Running the Application

* **Development Mode:**

  ```bash
  pnpm dev
  ```

* **Linting & Formatting:**

  ```bash
  pnpm lint
  ```

* **Production Build:**

  ```bash
  pnpm build
  pnpm start
  ```

## ✅ Scripts

* `pnpm dev`: Start the application in development mode with hot reloading.
* `pnpm build`: Compile TypeScript files to JavaScript.
* `pnpm start`: Run the compiled JavaScript in production mode.
* `pnpm lint`: Lint the codebase using ESLint.
* `pnpm format`: Format the codebase using Prettier.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
