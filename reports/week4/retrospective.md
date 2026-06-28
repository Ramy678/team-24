# Retrospective

## What went well

- We managed to close 
  - US-001-1 and US-001-2 (US-001: Propose dishes according to the budget), 
  - US-004_1, US-004-2, US-004-3, US-004-4 (US-004: Propose dishes according to preferences)
  - US-012-1 and US-012-2 (US-012: Button "I'll order dish")
  - US-013-1 and US-013-2 (US-013: Button "Another option")
- We migrate frontend to React
- We conducted a meeting with a customer

## What did not go well

- There were a lot of problems with the migration frontend to React, so there were a lot of conflicts in the files
- During development, two functional areas overlapped on the same files - one handling external connections and data filtering, the other integrating AI with the frontend and managing user preferences. This caused numerous merge conflicts.

## Action points

- Implement US-002: Ability to sign in
- Implement US-015: Managing history of orders
- Continue working on connecting all parts of the product