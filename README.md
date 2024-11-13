# Next.js 14 Project with MUI, RTK Query, and More

## Introduction

This project is a modern web application built with Next.js 14, leveraging a powerful stack of technologies to create a robust, scalable, and user-friendly experience. Below is an overview of the key technologies used and instructions for setting up and running the project.

## Technologies Used

### Next.js 14
Next.js is a React framework that enables features such as server-side rendering and generating static websites. Version 14 brings performance improvements and new features to enhance the development experience.

### Material-UI (MUI)
MUI is a popular React UI framework that implements Google's Material Design. It provides a set of customizable, accessible, and responsive components to build user interfaces quickly.

### Redux Toolkit (RTK) and RTK Query
Redux Toolkit is the official, opinionated toolset for efficient Redux development. RTK Query is an advanced data fetching and caching tool, reducing the need for manual data fetching and state management code.

### React Hook Form
A performant, flexible, and extensible form library for React. It provides an easy way to validate forms with less code and better performance.

### Zod
Zod is a TypeScript-first schema declaration and validation library. It's used in this project for robust input validation.

### React Hot Toast
A lightweight, customizable toast notification library for React applications, providing a smooth user experience for displaying alerts and messages.

### Next.js Middleware
Middleware in Next.js allows you to run code before a request is completed, enabling custom server-side logic for authentication, redirects, and more.

## Getting Started

### Prerequisites
- Node.js (version 18 preferred)
- npm or yarn (preferred)

### Installation

Install dependencies:
  `yarn install`

### Running the Development Server
  `npm run dev`
  
  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
├── components/     # React components <br />
├── app/            # Next.js pages <br />
├── public/         # Static files <br />
├── styles/         # Global styles <br />
├── utils/          # Utility functions and custom hooks <br />
├── lib/            # API services (RTK Query) <br />
├── middleware.ts   # Next.js middleware <br />
└── types/          # Types for validation
