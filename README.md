# Donezon

Donezo is an advanced to-do application inspired by Todoist, designed to demonstrate and practice full-stack development skills using the MERN stack, supplemented with Next.js, Supabase, and shadcn/ui components. The app allows users to manage tasks, organize projects, and collaborate with others efficiently.

## Table of Contents

- [Summary](#summary)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Summary

'My Todo App' is built to offer a seamless task management experience, with features like quick task entry, project categorization, priority setting, collaborative project sharing, and more. The aim is to create a productive environment where users can easily plan and track their daily activities.

## Technologies

- **Frontend**: Next.js, shadcn/ui
- **Backend**: Supabase (PostgreSQL, Authentication, Realtime Subscriptions)
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

## Architecture

### Frontend

- **Next.js**: React framework for building the user interface with server-side rendering capabilities.
- **shadcn/ui**: Pre-built UI components used to accelerate the development of the frontend.

### Backend

- **Supabase**:
  - *PostgreSQL Database*: Stores user data, tasks, projects, and labels.
  - *Authentication*: Manages user sign-in and security.
  - *Realtime Subscriptions*: Pushes updates to the frontend app in real-time as data changes.

### Deployment

- **Vercel**: Platform for deploying the Next.js application, configured for CI/CD and optimized performance.

## Getting Started

To get a local copy up and running, follow these simple steps.

```bash
# Clone the repository
git clone https://github.com/your-username/my-todo-app.git

# Navigate to the project directory
cd my-todo-app

# Install dependencies
npm install

# Start the development server
npm run dev
