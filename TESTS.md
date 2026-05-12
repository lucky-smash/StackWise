
---

# TESTS.md

Even if you haven’t written full tests yet:

```md id="n4w1zc"
# Tests

## Current Test Coverage

The current MVP primarily focuses on validating audit engine behavior and backend API functionality manually during development.

### Manual Tests Performed

#### Audit Engine
- Verified overlapping chatbot tool detection
- Verified overlapping coding assistant detection
- Verified estimated savings calculations
- Verified optimization score reductions

#### Backend API
- Tested MongoDB connection using `/api/test`
- Tested lead storage using POST `/api/leads`
- Verified successful database writes using Postman

#### Frontend
- Tested lead capture form submission
- Verified loading and success states
- Tested responsive layout behavior

---

# Planned Automated Tests

Future automated tests would include:
- Audit engine unit tests
- API route integration tests
- Form validation tests
- Rate limiting tests