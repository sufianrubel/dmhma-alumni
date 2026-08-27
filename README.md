# DMHMA Alumni Association Management System

A modern, secure, modular, and scalable **Alumni Association Management System** for the **Dhaka Medical Health Management Association (DMHMA)**, designed to centralize alumni membership, profiles, communication, events, administration, and organizational operations.

Built with **Laravel 13, PHP 8.3+, React 19, Inertia.js 3, TypeScript, Tailwind CSS 4, Vite 8, MySQL, nWidart Laravel Modules, Spatie packages, Pest, and PHPStan**.

---

## Table of Contents

- [Overview](#overview)
- [Project Goals](#project-goals)
- [Core Capabilities](#core-capabilities)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Module Architecture](#module-architecture)
- [Application Structure](#application-structure)
- [Authentication and Authorization](#authentication-and-authorization)
- [Data and Privacy](#data-and-privacy)
- [Development Requirements](#development-requirements)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Frontend Development](#frontend-development)
- [Creating Modules](#creating-modules)
- [Testing](#testing)
- [Static Analysis and Code Quality](#static-analysis-and-code-quality)
- [Build and Production](#build-and-production)
- [Git Workflow](#git-workflow)
- [Documentation](#documentation)
- [Development Principles](#development-principles)
- [Security Principles](#security-principles)
- [Contribution Guidelines](#contribution-guidelines)
- [Project Status](#project-status)
- [License](#license)

---

## Overview

The **DMHMA Alumni Association Management System** provides a centralized platform for managing alumni information and association operations.

The system is designed around a modular architecture so that business capabilities can evolve independently while maintaining clear boundaries between domains.

The platform is intended to support:

- Alumni registration and membership
- Alumni profile management
- Membership lifecycle management
- Alumni directory
- Education and professional information
- Events and participation
- Announcements and communications
- Administrative operations
- Role-based access control
- Auditability and organizational accountability
- Reporting and operational insights

The application is designed for long-term maintainability, security, extensibility, and operational reliability.

---

## Project Goals

The primary goals of the system are to:

1. Establish a centralized and reliable alumni database.
2. Digitize alumni registration and membership workflows.
3. Provide alumni with secure access to their profiles.
4. Enable administrators to manage association operations efficiently.
5. Establish clear role-based access and authorization boundaries.
6. Reduce duplicate and inconsistent alumni records.
7. Provide structured communication between the association and alumni.
8. Provide a foundation for future association-management capabilities.
9. Maintain strong data privacy and security practices.
10. Keep the application modular and maintainable as the organization grows.

---

## Core Capabilities

The system is organized around business modules.

### Alumni Registration & Membership

- Online alumni registration
- Membership application
- Membership approval and rejection
- Membership number generation
- Membership status management
- Membership lifecycle tracking
- Membership renewal support
- Administrative membership management

### Alumni Profile Management

- Personal information
- Profile photograph
- Contact information
- Address information
- Educational history
- Professional information
- Employment information
- Social/profile information where permitted
- Profile completion tracking

### Alumni Directory

- Searchable alumni directory
- Filtering
- Profile visibility controls
- Administrative directory management
- Privacy-aware information exposure

### Events

- Event creation
- Event management
- Event publishing
- Registration
- Participant management
- Event status
- Attendance tracking where applicable

### Communication

- Association announcements
- Notifications
- Communication preferences
- Targeted administrative communication
- System notifications

### Administration

- Administrative dashboard
- User management
- Role management
- Permission management
- Membership administration
- Content administration
- Operational monitoring

### Auditability

- Administrative activity tracking
- Important state-change auditing
- User/account activity where appropriate
- Security-relevant event logging

---

## Technology Stack

| Layer | Technology |
|---|---|
| Backend | Laravel 13 |
| Language | PHP 8.3+ |
| Frontend | React 19 |
| Application Bridge | Inertia.js 3 |
| Language - Frontend | TypeScript |
| CSS | Tailwind CSS 4 |
| Build Tool | Vite 8 |
| Database | MySQL |
| Module System | nWidart Laravel Modules |
| Authorization | Spatie Laravel Permission |
| Testing | Pest |
| Static Analysis | PHPStan |
| Package Management | Composer / npm |
| Version Control | Git |
| Repository Platform | GitHub |

> PostgreSQL may be supported where explicitly required by the project environment, but MySQL is the primary database target unless otherwise documented.

---

## System Architecture

The application follows a **modular monolith** architecture.

The modular monolith approach provides:

- Clear business-domain boundaries
- Independent module organization
- Shared infrastructure
- Simple deployment
- Transactional consistency
- Lower operational complexity than a distributed microservice architecture
- A practical path for future scaling

Business functionality should be placed inside the appropriate domain module rather than accumulating unrelated logic inside global application directories.

### Architectural principles

The application prioritizes:

- Separation of concerns
- Explicit module boundaries
- Thin controllers
- Form Request validation
- Policy-based authorization
- Service/Action classes for business operations
- Eloquent models for persistence concerns
- Events for meaningful domain/application events
- Inertia pages for server-driven application navigation
- React components for reusable UI
- TypeScript for frontend type safety
- Automated testing
- Static analysis
- Secure-by-default behavior

Detailed architectural rules are documented in:

`docs/ARCHITECTURE.md`

---

## Module Architecture

The project uses **nWidart Laravel Modules** to organize business domains.

A typical module structure is:

```text
Modules/
├── Core/
├── Alumni/
├── Membership/
├── Events/
├── Announcements/
├── Notifications/
└── ...
```

The exact module list and responsibilities are defined in:

`docs/MODULES.md`

### Module responsibilities

Each module should own its domain-specific:

- Models
- Migrations
- Factories
- Seeders where appropriate
- Controllers
- Form Requests
- Policies
- Actions/Services
- Resources
- Events
- Listeners
- Routes
- Inertia pages
- React components
- Tests

Modules should avoid unnecessary coupling to other modules.

When one module needs functionality owned by another module, use an explicit and maintainable integration boundary.

---

## Application Structure

A simplified project structure is:

```text
.
├── app/
│   ├── Console/
│   ├── Exceptions/
│   ├── Http/
│   ├── Models/
│   └── Providers/
│
├── bootstrap/
│
├── config/
│
├── database/
│   ├── factories/
│   ├── migrations/
│   └── seeders/
│
├── docs/
│   ├── ARCHITECTURE.md
│   ├── DATABASE.md
│   ├── DEVELOPMENT.md
│   ├── GIT_WORKFLOW.md
│   ├── MODULES.md
│   ├── SECURITY.md
│   └── TESTING.md
│
├── Modules/
│   ├── Core/
│   ├── Alumni/
│   ├── Membership/
│   └── ...
│
├── public/
│
├── resources/
│   ├── css/
│   ├── js/
│   └── views/
│
├── routes/
│
├── storage/
│
├── tests/
│
├── AGENTS.md
├── composer.json
├── package.json
├── phpunit.xml
├── tsconfig.json
├── vite.config.ts
└── README.md
```

The actual repository structure is authoritative over this illustrative structure.

---

## Authentication and Authorization

Security is a core system requirement.

The application uses authenticated access combined with role-based and policy-based authorization.

Authorization must be enforced on the server.

Frontend visibility is **not** considered an authorization mechanism.

### Authorization principles

Every protected operation should consider:

1. Is the user authenticated?
2. Does the user have the required role/permission?
3. Does the user have access to the specific resource?
4. Is the requested operation permitted in the current resource state?

Use:

- Middleware
- Policies
- Gates
- Permissions
- Form Request authorization
- Server-side validation

as appropriate.

### RBAC

Administrative capabilities should be protected through explicit roles and permissions.

Permissions should follow a predictable convention, for example:

```text
alumni.view
alumni.create
alumni.update
alumni.delete

membership.view
membership.approve
membership.reject

events.view
events.create
events.update
events.delete
```

The exact authorization model is defined in the project's security and architecture documentation.

---

## Data and Privacy

The system handles personal and organizational information and therefore follows privacy-conscious design principles.

### Data principles

- Collect only necessary information.
- Validate all user-controlled input.
- Never trust client-side authorization.
- Protect sensitive attributes.
- Apply appropriate database constraints.
- Use explicit relationships.
- Avoid unnecessary data exposure.
- Do not expose private information through public endpoints.
- Use authorization-aware resources and queries.
- Maintain appropriate audit records for sensitive administrative actions.

### Database conventions

Database structure, relationships, indexes, constraints, status fields, and migration conventions are documented in:

`docs/DATABASE.md`

The Laravel migrations remain the executable source of truth for the database schema.

---

## Development Requirements

Before starting development, install:

### Required

- PHP 8.3 or newer
- Composer
- Node.js compatible with the project's Vite/tooling requirements
- npm
- MySQL
- Git

### Recommended

- PHP extensions required by Laravel and project dependencies
- A supported IDE/editor such as PhpStorm or VS Code
- GitHub account with repository access
- Local HTTPS environment where required for integration testing

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd dmhma-alumni
```

Install PHP dependencies:

```bash
composer install
```

Install frontend dependencies:

```bash
npm install
```

Create the environment file:

```bash
cp .env.example .env
```

Generate the application key:

```bash
php artisan key:generate
```

Configure the database and application settings in `.env`.

Run migrations:

```bash
php artisan migrate
```

If project seeders are available:

```bash
php artisan db:seed
```

Create the storage symlink:

```bash
php artisan storage:link
```

---

## Environment Configuration

Never commit `.env` or other environment-specific secrets to the repository.

Typical local configuration includes:

```dotenv
APP_NAME="DMHMA Alumni"
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=dmhma_alumni
DB_USERNAME=root
DB_PASSWORD=

CACHE_STORE=file
SESSION_DRIVER=database
QUEUE_CONNECTION=database
```

The actual environment variables required by the application are defined by the project's configuration files and deployment environment.

### Secret management

Secrets must be supplied through the deployment environment or an approved secret-management solution.

Never commit:

- API keys
- Passwords
- Tokens
- Private keys
- Production credentials
- Database credentials
- Session secrets

---

## Database Setup

Create the database before running migrations.

Example:

```sql
CREATE DATABASE dmhma_alumni
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;
```

Then configure `.env` and run:

```bash
php artisan migrate
```

For local development:

```bash
php artisan migrate:fresh --seed
```

> Never run destructive database commands against production without explicit authorization and a verified backup/recovery strategy.

For complete database documentation, see:

`docs/DATABASE.md`

---

## Running the Application

Start the Laravel development server:

```bash
php artisan serve
```

Start the Vite development server:

```bash
npm run dev
```

If the project uses a combined development command, use the project's configured Composer/NPM script instead.

Typical local URL:

```text
http://localhost:8000
```

---

## Frontend Development

The frontend uses:

- React 19
- TypeScript
- Inertia.js
- Tailwind CSS
- Vite

Frontend code should prioritize:

- Reusable components
- Strong TypeScript types
- Accessible UI
- Responsive design
- Server-authoritative data
- Clear loading/error states
- Consistent form handling
- Minimal unnecessary client-side state

Avoid duplicating backend business rules in React.

The backend remains authoritative for:

- Validation
- Authorization
- Business rules
- Resource ownership
- State transitions

---

## Creating Modules

New business domains should normally be implemented as nWidart modules.

Example:

```bash
php artisan module:make Alumni
```

Depending on the module requirements, additional resources can then be generated using the project's established module-generation conventions.

Before creating a new module:

1. Check `docs/MODULES.md`.
2. Determine whether an existing module already owns the responsibility.
3. Avoid creating modules for trivial functionality.
4. Define the module's responsibility clearly.
5. Establish dependencies explicitly.
6. Add appropriate tests.

Do not introduce a new module solely to move a small amount of code.

---

## Testing

The project uses **Pest** for automated testing.

Run the complete test suite:

```bash
php artisan test
```

or:

```bash
./vendor/bin/pest
```

Run a specific test:

```bash
./vendor/bin/pest tests/Feature/ExampleTest.php
```

### Testing expectations

New functionality should include appropriate tests covering, where applicable:

- Happy paths
- Validation
- Authorization
- Authentication
- Business rules
- Database behavior
- State transitions
- Edge cases
- Failure scenarios

For privileged functionality, authorization tests are particularly important.

See:

`docs/TESTING.md`

---

## Static Analysis and Code Quality

PHP code should pass static analysis with PHPStan.

Example:

```bash
./vendor/bin/phpstan analyse
```

Frontend type checking should also pass:

```bash
npm run typecheck
```

if the repository provides that script.

Run formatting/linting commands defined by the project before submitting changes.

A feature should not be considered complete merely because it works manually.

The expected quality gates are:

```text
Tests
  ↓
Static Analysis
  ↓
Type Checking
  ↓
Linting / Formatting
  ↓
Review
```

---

## Build and Production

Build frontend assets:

```bash
npm run build
```

Production deployment should use optimized Laravel configuration.

Typical deployment steps include:

```bash
composer install --no-dev --optimize-autoloader

php artisan migrate --force

php artisan config:cache
php artisan route:cache
php artisan view:cache

npm ci
npm run build
```

The exact production deployment procedure should be defined according to the hosting/infrastructure environment.

### Production requirements

Production deployments should include:

- HTTPS
- Secure environment configuration
- Database backups
- Application monitoring
- Error logging
- Queue workers where required
- Scheduled task execution where required
- Proper filesystem permissions
- Appropriate cache configuration
- Restricted debug mode

Never enable:

```dotenv
APP_DEBUG=true
```

in production.

---

## Git Workflow

The project follows a GitFlow-oriented development process.

Primary branches:

```text
main
└── develop
```

Feature and maintenance branches may include:

```text
feature/*
bugfix/*
release/*
hotfix/*
```

Typical workflow:

```text
develop
   │
   ├── feature/alumni-registration
   │
   ├── feature/membership-management
   │
   └── bugfix/profile-validation
```

Changes should be:

1. Developed in an appropriate branch.
2. Tested locally.
3. Reviewed.
4. Submitted through a pull request.
5. Merged according to repository policy.

See:

`docs/GIT_WORKFLOW.md`

---

## Documentation

The project documentation is organized by responsibility.

| Document | Purpose |
|---|---|
| `README.md` | Project overview, setup, and orientation |
| `AGENTS.md` | AI coding-agent instructions |
| `docs/ARCHITECTURE.md` | Application architecture |
| `docs/MODULES.md` | Module boundaries and responsibilities |
| `docs/DATABASE.md` | Database/domain model |
| `docs/DEVELOPMENT.md` | Development standards and workflow |
| `docs/GIT_WORKFLOW.md` | GitFlow and contribution workflow |
| `docs/SECURITY.md` | Security and privacy practices |
| `docs/TESTING.md` | Testing strategy and standards |
| `docs/CONTRIBUTING.md` | Contribution guidelines |
| `docs/DECISIONS/` | Architectural decision records |

### Documentation rule

Documentation should be updated when a change materially affects:

- Architecture
- Database design
- Module boundaries
- Security
- Development workflow
- Public behavior
- Important architectural decisions

---

## Development Principles

All development should follow these principles.

### 1. Keep business logic out of controllers

Controllers should coordinate HTTP concerns rather than becoming large business-logic containers.

Prefer:

```text
Controller
    ↓
Form Request
    ↓
Action / Service
    ↓
Domain Model
    ↓
Database
```

where appropriate.

---

### 2. Validate at the server

All external input must be validated server-side.

Client-side validation may improve UX but must never replace backend validation.

---

### 3. Authorize every protected operation

Authentication answers:

> Who is the user?

Authorization answers:

> Is this user allowed to perform this operation on this resource?

Both must be handled correctly.

---

### 4. Prefer explicit code

Avoid unnecessary abstractions, magic behavior, or overly generic frameworks inside the application.

Code should be easy for another developer to understand and maintain.

---

### 5. Avoid premature abstraction

Do not introduce a repository, service, interface, event, or additional architectural layer unless it provides meaningful value.

Use the simplest architecture that satisfies the business requirement while preserving maintainability.

---

### 6. Respect module boundaries

A module should own its business domain.

Avoid:

```text
Module A
   ↓
Module B internal implementation
   ↓
Module C internal implementation
```

Prefer explicit public interfaces or application/domain events where appropriate.

---

### 7. Database integrity matters

Use appropriate:

- Foreign keys
- Unique constraints
- Indexes
- Nullable definitions
- Cascading rules
- Check constraints where supported/appropriate

Do not rely exclusively on application-level validation for data integrity.

---

### 8. Test behavior, not implementation details

Tests should primarily verify observable behavior and business requirements rather than tightly coupling themselves to internal implementation.

---

### 9. Security over convenience

When security and convenience conflict, protect the system and its data.

Never bypass:

- Authorization
- Validation
- CSRF protection
- Authentication
- Input sanitization
- Secure file handling
- Access controls

simply to simplify implementation.

---

## Security Principles

Security is a first-class requirement.

The application should follow Laravel's security mechanisms and established secure-development practices.

### Mandatory principles

- Server-side authorization
- Server-side validation
- Secure authentication
- Password hashing
- CSRF protection
- Output escaping
- Parameterized database queries
- Secure file upload handling
- Least-privilege access
- Secure session handling
- Sensitive-data minimization
- Audit logging for important administrative operations
- Secure production configuration

### Security incidents

Potential security vulnerabilities must be handled promptly and should not be publicly disclosed through ordinary issue reports before appropriate assessment.

See:

`docs/SECURITY.md`

---

## AI Coding Agent Guidelines

This repository is designed to be maintained with AI-assisted development.

The authoritative AI development instructions are contained in:

`AGENTS.md`

AI coding agents must:

1. Read `AGENTS.md` before modifying the repository.
2. Understand the relevant module before making changes.
3. Inspect existing implementations before creating new abstractions.
4. Respect existing architecture.
5. Follow authorization and validation requirements.
6. Avoid modifying unrelated files.
7. Add or update tests for behavioral changes.
8. Run appropriate quality checks.
9. Avoid destructive operations without explicit authorization.
10. Update documentation when architectural behavior changes.

AI agents should not infer project requirements solely from a user's short request when existing project documentation provides more authoritative requirements.

---

## Phase-1 Scope

The project is developed incrementally.

Phase-1 functionality should remain focused on the approved association-management requirements.

Do not introduce unrelated capabilities simply because they may be useful in the future.

Examples of features that should not be introduced without explicit approval include:

- Microservice decomposition
- Unnecessary external integrations
- Complex real-time infrastructure
- AI/ML features
- Advanced analytics platforms
- Payment infrastructure not included in the approved scope
- Mobile applications
- Multi-tenant architecture
- Other future-phase capabilities

Future functionality should be documented and prioritized separately rather than silently introduced into Phase-1.

---

## Definition of Done

A feature is considered complete when, where applicable:

- Requirements are understood.
- Correct module ownership is established.
- Database changes are implemented safely.
- Validation is implemented.
- Authorization is implemented.
- Business logic is appropriately structured.
- UI/UX is implemented.
- TypeScript types are correct.
- Automated tests are added/updated.
- Static analysis passes.
- Frontend checks pass.
- Formatting/linting passes.
- Relevant documentation is updated.
- No unrelated regressions are introduced.

---

## Project Status

**Status:** Active Development

The application is being developed incrementally according to the project's approved roadmap and Phase-1 scope.

Project documentation should be treated as a living source of project knowledge and updated as architecture and requirements evolve.

---

## License

Copyright © DMHMA Alumni Association.

The project's licensing terms should be defined by the repository owner and organization.

If a specific open-source or proprietary license is adopted, this section and the repository should be updated accordingly.

---

## Maintainers

**DMHMA Alumni Association**

For project ownership, administration, or technical-maintainer information, refer to the repository's official project configuration and organizational documentation.

---

## Acknowledgements

This project is built using the open-source ecosystem around:

- Laravel
- React
- Inertia.js
- TypeScript
- Tailwind CSS
- Vite
- MySQL
- nWidart Laravel Modules
- Spatie Laravel packages
- Pest
- PHPStan

The project respects the licenses and terms of all third-party dependencies used by the application.

---

## Quick Reference

### Install

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan storage:link
```

### Development

```bash
php artisan serve
npm run dev
```

### Testing

```bash
php artisan test
```

### Static Analysis

```bash
./vendor/bin/phpstan analyse
```

### Production Build

```bash
npm run build
```

---

**DMHMA Alumni Association Management System**  
*A secure, modular, and maintainable platform for managing the DMHMA alumni community.*