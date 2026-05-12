## Day 1 — 2026-05-10

**Hours worked:** 2

**What I did:**
- Read assignment requirements
- Explored project scope
- Researched AI pricing tools

**What I learned:**
- Assignment focuses heavily on product thinking, not only coding

**Blockers / what I'm stuck on:**
- Understanding overall project scope

**Plan for tomorrow:**
- Improve audit engine logic and reduce hardcoded rules
- Add better tool categorization and pricing comparison
- Improve UI layout to feel more SaaS-like
- Add result cards and better mobile responsiveness
- Explore optimization tradeoffs and recommendation scoring

Note:
This assignment work started earlier, but the development log was documented later while organizing the repository and project structure.(Started on 8 may 2026)


## Day 2 — 2026-05-11

**Hours worked:** 2

**What I did:**
- Redesigned the application flow into separate pages (`/audit` and `/results`)
- Improved the landing page structure and SaaS-style UI
- Added loading/analyzing screen before showing audit results
- Built a dashboard-style results page with metric cards and recommendations
- Improved audit engine logic for overlapping chatbot and coding tools
- Added optimization scoring and annual savings calculations
- Improved component organization and routing structure in Next.js
- Pushed project updates to GitHub

**What I learned:**
- Better UI/UX significantly improves perceived product quality
- Separating pages improves scalability and application structure
- Learned how Next.js App Router API routes work using `route.ts`
- Understood how `/api/test` maps automatically through file-based routing
- Learned basics of MongoDB Atlas connection using Mongoose
- Understood why database connection caching is important in Next.js development
- Learned how `.env.local` is used for securing backend credentials

**Blockers / what I'm stuck on:**
- Deciding how advanced the audit engine should become without overcomplicating the assignment
- Balancing assignment requirements with building a portfolio-worthy SaaS product
- Initially got confused by Next.js App Router backend routing structure and API route organization
- Took time to understand how MongoDB connection utilities and caching patterns work in Next.js
- Still exploring best practices for structuring backend logic in a scalable way

**Plan for tomorrow:**
- Improve audit engine with dynamic pricing calculations
- Add more intelligent recommendation generation
- Improve responsiveness and mobile UI polish
- Add animations and better visual feedback
- Start implementing AI-generated personalized summaries using Gemini API
- Continue refining results dashboard and recommendation cards

## Day 3 — 2026-05-12

**Hours worked:** 2

**What I did:**
- Integrated MongoDB Atlas with the Next.js backend
- Created reusable MongoDB connection utility using Mongoose
- Learned and implemented Next.js App Router API routes
- Built `/api/test` route for verifying database connection
- Created Lead schema/model using Mongoose
- Implemented POST `/api/leads` API endpoint
- Successfully stored lead data into MongoDB Atlas using Postman
- Tested backend API endpoints and request flow using Postman
- Built lead capture section on results page
- Connected frontend lead form to backend API
- Successfully stored lead data in MongoDB Atlas
- Implemented end-to-end full-stack data flow

**What I learned:**
- How MongoDB Atlas cloud databases connect with Next.js applications
- Basics of Mongoose schemas, models, and document creation
- Importance of database connection caching in Next.js development
- How API requests flow from frontend → API route → database
- Difference between frontend routes and backend API routes in Next.js App Router
- How environment variables are used to securely manage backend credentials

**Blockers / what I'm stuck on:**
- Initially got confused about Next.js App Router backend routing structure and API organization
- Took time to understand reusable MongoDB connection utilities and caching patterns
- Still exploring best practices for structuring scalable backend logic cleanly
- Need to integrate frontend lead capture flow with the backend API

**Plan for tomorrow:**
- Integrate frontend lead capture form with `/api/leads`
- Add loading and success states for lead submission
- Start Gemini API integration for AI-generated personalized summaries
- Implement basic API rate limiting
- Finalize remaining assignment polish and deployment improvements

## Day 4 — 2026-05-13

**Hours worked:** 2

**What I did:**
- Integrated Gemini AI API into the StackWise application
- Built `/api/ai-summary` backend route for AI-generated optimization summaries
- Created reusable `AiSummaryCard` component for displaying AI insights
- Connected AI summary generation with the audit results flow
- Added fallback handling for AI API failures
- Improved end-to-end user experience from audit → recommendations → AI insights
- Added and organized project documentation files:
  - ARCHITECTURE.md
  - GTM.md
  - METRICS.md
  - PRICING_DATA.md
  - USER_INTERVIEWS.md
  - PROMPTS.md
  - REFLECTION.md
  - TESTS.md
- Deployed latest production build successfully on Vercel
- Verified MongoDB Atlas + AI API integration in production

**What I learned:**
- How to integrate external AI APIs into a Next.js application
- Structuring backend AI routes using App Router API handlers
- Importance of fallback UI and graceful API failure handling
- Better understanding of product-oriented engineering workflows
- How deployment environments handle API keys and environment variables

**Blockers / what I'm stuck on:**
- Still exploring how to make AI summaries more context-aware and personalized
- Need better prompt engineering for more actionable recommendations
- Learning how to balance fast shipping with scalable architecture decisions

**Plan for tomorrow:**
- Improve AI-generated recommendations quality
- Add loading and streaming states for AI responses
- Refine UI polish and responsiveness
- Add analytics/event tracking ideas
- Continue improving product positioning and onboarding experience