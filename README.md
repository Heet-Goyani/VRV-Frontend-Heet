# RBAC Based Dashboard

**Submitted by**: Heet Goyani

I developed a simple and user-friendly RBAC-based UI as part of my VRV Security Frontend Developer Internship project.

## Documentation
[Live Deployment](https://linktodocumentation)

## Tech Stack

- **Next.js**
- **Prisma**
- **PostgreSQL**
- **NeonDB**
- **Tailwind CSS**

## Features

- Add, edit, or delete users.
- Assign roles to users.
- Manage user statuses (Active/Inactive).
- Edit roles.
- Define roles with specific permissions (Read, Write, Delete).
- Include additional permissions such as user management and blocking.
- Allow assigning or modifying permissions for roles.
- Clearly display permissions for ease of understanding and modification.
- Mock API calls for CRUD operations on users, such as creating or deleting users.

## Environment Variables

To run this project, add the following environment variable to your `.env` file:

- **DATABASE_URL**: Sign up for a PostgreSQL-based database such as Neon or Supabase, or use a local PostgreSQL instance. Connect your database to your Prisma schema using the provided connection string and assign it to this variable.

## Deployment

To get started with the project, follow these steps:

### Install Dependencies

```bash
pnpm install
```

### Migrate Prisma Schema to Database

```bash
pnpm prisma migrate dev
```

### Push Database Schema and Seed Data

```bash
pnpm db:push
pnpm db:seed
```

### Run Locally

To deploy the project locally, use the following command:

```bash
pnpm run dev
```
