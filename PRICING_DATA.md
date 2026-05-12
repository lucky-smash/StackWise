# Pricing Data

## Overview

StackWise estimates potential savings by identifying overlapping AI tools and unnecessary subscription costs commonly found in startup workflows.

The pricing assumptions used in the MVP are simplified estimates based on publicly available pricing pages and common startup usage patterns.

---

# Estimated Monthly Tool Pricing

| Tool | Estimated Monthly Cost |
|------|------------------------|
| ChatGPT Plus | $20 |
| Claude Pro | $20 |
| Cursor Pro | $20 |
| GitHub Copilot | $10 |
| Gemini Advanced | $20 |
| Notion AI | $10 |

---

# Optimization Logic

The audit engine checks for:
- Multiple AI chat assistants being used simultaneously
- Coding assistant overlap
- Duplicate productivity AI subscriptions

Example:
- ChatGPT + Claude
- Cursor + GitHub Copilot

These combinations may indicate redundant spending.

---

# Savings Calculation Strategy

Estimated savings are calculated using:
- Tool overlap detection
- Team size multiplier
- Monthly subscription assumptions
- API usage level

---

# Limitations

Current pricing calculations are:
- Static
- Simplified for MVP development
- Not connected to real-time pricing APIs

Future versions may:
- Fetch live pricing data
- Support enterprise pricing
- Include regional pricing adjustments
- Add annual billing calculations

---

# Future Improvements

Potential enhancements:
- Dynamic SaaS pricing database
- AI-powered optimization recommendations
- ROI forecasting
- Usage-based pricing analysis
- Multi-currency support