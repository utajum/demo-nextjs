## Project Overview 📚

This project is a web application that displays data in a grid format. It uses Next.js for the frontend, GraphQL for the API, and Postgres for the database. The application is containerized using Docker.

## Approach 🚀

Due to the problems in multiple designs and design inconsistencies, I decided to implement the design that was included in the email as an image and in the PDF as well. For more information, please refer to the [differences.pdf](https://github.com/utajum/demo-nextjs/blob/master/public/differences.pdf) file.

## Development Strategy 📝

The development of this project was executed in a systematic and well-planned manner. The project was divided into distinct stages, each focusing on a specific aspect of the application. This approach ensured that each part of the application was built and tested individually before integrating them together.

1. **Seed Data and Docker Configuration:** The project initiation involved the configuration of Docker and the establishment of the Postgres database. I then focused on seed data, writing scripts located in the `seed-data` directory to populate the database. This preliminary setup served as the groundwork for the subsequent stages of the project.

2. **Docker and Postgraphile Integration:** The next stage involved integrating Postgraphile with Docker. Postgraphile, a tool I chose for its ease of use and robust API, was used to automatically generate a highly performant GraphQL API from the Postgres database. This integration involved creating a Docker service for the GraphQL server in the `docker-compose.yml` file. For more information on Postgraphile, you can refer to its [documentation](https://www.graphile.org/postgraphile/introduction/).

3. **Environment-Based Logic:** To enhance the developer experience, I used the `is-docker` npm package. This package allows the application to modify its behavior based on the current environment.

4. **Frontend Implementation:** This phase was dedicated to establishing the frontend architecture. The `src/app` directory holds the primary application code, while layout components (`layout.tsx`, `DefaultLayout.tsx`), and CSS styles (`style.css` and `satoshi.css`) are located in the `src/components` directory. The `src/components/Grid` directory includes several components for grid functionality, such as `GridComponent.tsx`, `TableRow.tsx`, `DocumentNode.ts`, and `Icons.tsx`. Tailwind CSS was customized for this project. For data fetching and caching, `@tanstack/react-query` was used, but due to the complexity of the SSR setup, the 'use client' directive was used to save time. It is a demo after all. For data visualization in a table, I used `react-virtuoso`.

5. **Documentation:** The final stage of the project was dedicated to creating comprehensive documentation. This included detailed explanations of the codebase, usage instructions, and troubleshooting guides. The documentation was written in a clear and concise manner.

## Technology Stack 💻

- **Frontend:** Next.js, React, Tailwind CSS
- **API:** GraphQL - Postgraphile
- **Database:** Postgres
- **Containerization:** Docker
- **Data Fetching:** React Query
- **Data Visualization:** React Virtuoso

## Database Setup 🗄️

The project uses a Postgres database, which is set up using scripts found in the `seed-data` directory. The `migrate.mjs` script connects to the database and calls the `createTable` and `loadData` functions to create the necessary tables and populate them with seed data.

To manually seed the database run:

```bash
npm run docker-start-only-db
npm run migrate
```

## Operating System Compatibility 🖥️

This project has been tested only on Linux 🐧. While it may work on other operating systems, I cannot guarantee full compatibility.

## Local Development 🛠️

Follow these steps to set up the project for local development:

1. **Clone the repository to your local machine.** 📋

   ```bash
   git clone https://github.com/utajum/demo-nextjs
   ```

2. **Navigate to the project directory.** 📁

   ```bash
   cd demo-nextjs
   ```

3. **Install the project dependencies.** 📦

   ```bash
   npm install
   ```

4. **Start the local development server.** 🚀

   ```bash
   npm run local-dev
   ```

   The `npm run local-dev` command concurrently starts the following services:

   - 🐘 **Postgres database** in Docker
   - ⚛️ **GraphQL server**
   - 🌐 **Next.js development server**

   Once started, the application will be accessible at [http://localhost:3000](http://localhost:3000).

> **Note:** You need to seed the database once using the `npm run migrate` command.

> **Note:** You need to have Docker installed and running on your machine to use the `npm run local-dev` command.

### Services URLs:

- **Main Application:** [http://localhost:3000](http://localhost:3000)
- **GraphiQL GUI/IDE:** [http://localhost:5000/graphiql](http://localhost:5000/graphiql)

## Docker Deployment 🐳

This application can be run using Docker, which ensures that it works in the same way across all environments. Follow these steps to run the application using Docker:

```bash
npm run docker-start
```

This will run:

- 🐘 **Postgres database** in Docker
- ⚛️ **GraphQL server** in Docker
- 🌐 **Next.js production build server** in Docker

### Services URLs:

- **Main Application:** [http://localhost:4000](http://localhost:4000)
- **GraphiQL GUI/IDE:** [http://localhost:5000/graphiql](http://localhost:5000/graphiql)

> **Note:** You need to have Docker installed and running on your machine to use these commands.

## Troubleshooting 🛠️

If you encounter issues when trying to run the application with Docker, you can try the following steps:

1. **Stop all Docker containers.** 🛑

   ```bash
   npm run docker-down
   ```

   This command will stop and remove all Docker containers defined in the `docker/docker-compose.yml` file.

2. **Start the application again.** 🔄
   ```bash
   npm run docker-start
   ```

If you continue to experience issues, please check the Docker documentation or the application's issue tracker for potential solutions. If that does not help, consider hiring me to fix your problems.
