# Reflection

## 1. Hardest Bug

One of the hardest issues I faced was understanding how MongoDB connections work inside Next.js App Router applications. Initially, I kept getting connection-related confusion while trying to structure reusable backend utilities.

I first assumed each API route should directly connect to MongoDB individually, but later realized that repeated connections during development could create issues because of Next.js hot reloading behavior.

After researching Mongoose connection caching patterns, I created a reusable `connectDB()` utility using a global cached connection approach. This solved the issue and also helped me better understand backend architecture patterns.

The debugging process taught me the importance of reusable infrastructure code instead of writing isolated logic inside every route.