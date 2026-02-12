# Korra Software System

Shifting system from file based & hard human work to automated software

## Overview

This is a Next.js application with full-stack capabilities (frontend + backend) integrated with Supabase for authentication and data management. The system is designed to manage two main departments:

1. **Sales Department** - Handles sales operations, customer relationships, and revenue tracking
2. **Technical Office Department** - Manages technical projects, documentation, and engineering tasks

## Features

### Authentication
- User signup with email and password
- User login with Supabase authentication
- Server-side API routes for authentication

### Department Structure
- **Sales Department**: Customer management, orders, quotations, and revenue tracking
- **Technical Office**: Project management, technical documentation, and task management
- **Shared Components**: Reusable components for both departments
- **Department Coordination**: API endpoint for cross-department data sharing

## Tech Stack

- **Frontend**: Next.js 16 with React 19
- **Backend**: Next.js API Routes
- **Styling**: Tailwind CSS
- **Database & Auth**: Supabase
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ahmed-Fadl-Freelancing/Korra-Software-System-Model.git
cd Korra-Software-System-Model
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   - Update `.env.local` with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                          # Next.js app directory
│   ├── api/                      # API routes
│   │   ├── auth/                 # Authentication endpoints
│   │   │   ├── login/            # Login API
│   │   │   └── signup/           # Signup API
│   │   └── coordination/         # Shared department API
│   ├── sales/                    # Sales department
│   │   ├── api/                  # Sales-specific APIs
│   │   │   └── customers/        # Customer management API
│   │   └── page.tsx              # Sales dashboard
│   ├── technical-office/         # Technical office department
│   │   ├── api/                  # Tech office-specific APIs
│   │   │   └── projects/         # Project management API
│   │   └── page.tsx              # Tech office dashboard
│   ├── signup/                   # Signup page
│   ├── login/                    # Login page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── auth/                     # Authentication components
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   └── shared/                   # Shared components
│       ├── DepartmentNavbar.tsx
│       └── StatCard.tsx
├── lib/                          # Utility libraries
│   └── supabase.ts               # Supabase client setup
└── package.json                  # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - Authenticate user

### Sales Department
- `GET /api/sales/api/customers` - Get all customers
- `POST /api/sales/api/customers` - Create new customer

### Technical Office
- `GET /api/technical-office/api/projects` - Get all projects
- `POST /api/technical-office/api/projects` - Create new project

### Coordination
- `GET /api/coordination` - Get cross-department coordination data

## Department Integration

Both departments are designed to work independently but can share data through:
- Shared API endpoints (`/api/coordination`)
- Shared components in `components/shared/`
- Common authentication and user management

## Supabase Setup

To set up your Supabase database, you'll need to create the following tables:

1. **Users** (handled by Supabase Auth automatically)
2. **Customers** (for Sales Department)
3. **Projects** (for Technical Office)
4. Additional tables as needed for your specific requirements

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

ISC
