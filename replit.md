# Dental Clinic Web Application

## Overview

This is a full-stack web application for Dr. Neha's Dental Care clinic, built with React frontend and Express backend. The application serves as a professional website for the dental clinic with appointment booking functionality, service information, and patient communication features.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom dental clinic theme (teal/white color scheme)
- **UI Components**: Radix UI components with shadcn/ui styling system
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: React Router for client-side navigation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with tsx and Vite middleware integration

## Key Components

### Frontend Pages
- **Home**: Hero section with clinic introduction and key services
- **Services**: Detailed service listings with pricing and booking options
- **About**: Information about Dr. Neha and clinic values
- **Book Now**: Appointment booking interface with WhatsApp integration
- **Contact**: Contact information and location details

### UI Components
- **Navbar**: Responsive navigation with mobile menu
- **WhatsApp Button**: Fixed floating button for instant messaging
- **Layout**: Consistent wrapper for all pages
- **UI Library**: Complete set of accessible components (buttons, cards, forms, etc.)

### Backend Structure
- **Routes**: RESTful API endpoints for patients, appointments, and treatments
- **Storage**: PostgreSQL database with Drizzle ORM and comprehensive dental clinic schema
- **Database**: Neon serverless PostgreSQL with tables for patients, appointments, and treatments
- **Middleware**: Request logging, error handling, and JSON parsing
- **Static Serving**: Vite integration for development, static files for production

## Data Flow

### Client-Server Communication
1. Frontend makes API calls to `/api/*` endpoints
2. Server processes requests through Express middleware
3. Storage interface abstracts database operations
4. Responses are logged and returned to client

### User Interactions
1. Users browse services and clinic information
2. Appointment booking redirects to WhatsApp for immediate communication
3. Contact forms and phone calls provide alternative communication channels
4. Mobile-responsive design ensures accessibility across devices

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18 with hooks and context
- **Styling**: Tailwind CSS with custom theme variables
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Zod validation
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel for image galleries

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Authentication**: Currently using in-memory storage (ready for database migration)
- **Development Tools**: tsx for TypeScript execution, esbuild for production builds

### Third-Party Integrations
- **WhatsApp Business API**: Direct messaging integration
- **Google Maps**: Location and directions (referenced in contact page)
- **Calendly**: Appointment booking system (referenced but not implemented)

## Deployment Strategy

### Development Mode
- Vite dev server with hot module replacement
- Express server with middleware integration
- Automatic TypeScript compilation
- Error overlay for debugging

### Production Build
- Vite builds optimized React application to `dist/public`
- esbuild bundles Express server to `dist/index.js`
- Static file serving from built assets
- Environment variable configuration for database

### Database Configuration
- PostgreSQL database with Neon serverless hosting
- Schema definition in `./shared/schema.ts` with comprehensive dental clinic tables
- Database tables: users, patients, appointments, treatments with proper relations
- Drizzle ORM with type-safe database operations
- RESTful API endpoints for all major entities
- PostgreSQL connection via `DATABASE_URL` environment variable

### Key Design Decisions

1. **Monorepo Structure**: Shared types and schemas between frontend and backend
2. **TypeScript Throughout**: Full type safety across the entire application
3. **Memory Storage**: Temporary solution allowing easy migration to PostgreSQL
4. **WhatsApp Integration**: Immediate patient communication without complex booking system
5. **Responsive Design**: Mobile-first approach with Tailwind CSS
6. **Component Library**: Radix UI for accessibility and shadcn/ui for consistent styling
7. **Modern Tooling**: Vite for fast development, esbuild for production builds

The application is designed to be easily extensible, with clear separation of concerns and modern development practices throughout.

### Recent Changes

#### January 28, 2025 - Dental Specialties Integration
✓ Added comprehensive "Branches of Dentistry" section to Services page with 8 specialty areas
✓ Enhanced About page with Dr. Neha's expertise areas and professional specializations
✓ Updated Home page with dental specialty awareness section
✓ Integrated doctor's key points on dental branches including:
  - General Dentistry (primary care and prevention)
  - Pediatric Dentistry (children's oral health)
  - Orthodontics (teeth and jaw alignment)
  - Periodontics (gum disease treatment)
  - Endodontics (root canal therapy)
  - Prosthodontics (tooth restoration and replacement)
  - Oral & Maxillofacial Surgery (surgical procedures)
  - Cosmetic Dentistry (aesthetic treatments)
✓ Added detailed service descriptions, goals, and specialization focus for each branch
✓ Enhanced user education about different dental specialties and their purposes