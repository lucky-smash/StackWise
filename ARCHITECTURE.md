# StackWise Architecture

## Overview

StackWise is a lightweight SaaS-style web application that helps startups analyze AI tool usage, identify overlapping subscriptions, estimate savings opportunities, and capture qualified leads for future consultation.

The application is built using the Next.js App Router architecture with a modular frontend and backend structure.

---

# Tech Stack

## Frontend
- Next.js 15
- React
- TypeScript
- Tailwind CSS

## Backend
- Next.js API Routes
- MongoDB Atlas
- Mongoose ODM

## Deployment
- Vercel

---

# Application Flow

## 1. Audit Form Page (`/audit`)

Users enter:
- Team size
- Monthly AI spend
- Tools currently used
- API usage level

The form data is passed through query parameters to the results page.

---

## 2. Results Engine (`/results`)

The results page:
- Parses user input
- Runs optimization logic
- Detects overlapping AI tools
- Calculates estimated savings
- Displays actionable recommendations

Core business logic lives inside:

```txt
src/lib/auditEngine.ts


