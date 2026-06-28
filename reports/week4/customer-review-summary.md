# Customer Review Summary - Sprint 2

**Date:** 28.06.2026  
**Time:** 5:00 pm

---

## Participants

| Participant | Role |
|-------------|------|
| Daria Gorshikova (dayeon761) | Interviewer |
| Polina Kharlova (Kharlova) | Note taker |
| Adelina Khafizova (adelinamikki) | Interviewer |
| Viktoriia Iakovleva (rxxtzz) | Note taker |
| Vilena Zulkarnaeva (vianevi) | Note taker |

## Team Members

- Daria Gorshikova (dayeon761)
- Polina Kharlova (Kharlova)
- Adelina Khafizova (adelinamikki)
- Omar Nader (Ramy678)
- Viktoriia Iakovleva (rxxtzz)
- Vilena Zulkarnaeva (vianevi)

---

## Sprint Goal reviewed

End-to-end flow works on the live deployment. Users fill a preferences questionnaire (with mandatory allergens), upload a menu photo with a budget, OCR extracts the text, the parser structures it, and the recommender returns a dish that matches preferences, contains no allergens, and fits the budget.

---

## Delivered increment discussed

### Artifacts Demonstrated

The team demonstrated the current state of the application deployed at **[Deployed App](https://team-24-navy.vercel.app)**

### Discussion Points

- Overall assessment of the current sprint increment.
- Budget filtering, Allergy/Preference selection, Menu upload.
- OCR and AI modules are not yet connected to the frontend.
- User preferences (allergies, likes, dislikes) reset upon page refresh.
- Cookies/localStorage vs. Simple Registration.
- Feasibility without user accounts.
- Relevance of "Cuisine" selection in a restaurant context.
- Adding specific taste questions (sweet, spicy, etc.).

### Decisions

- **Data Persistence Strategy:** Temporary workarounds (cookies/localStorage) for order history are rejected. A **simple registration mechanism** is required to make order history meaningful.
- **Priority Sequence:** 
  1. Implement minimal user registration/profile persistence.
  2. Implement "Order History" functionality.
- **UI Changes:** 
  - Remove "Cuisine" selection field (redundant in restaurant setting).
  - Add 2–3 specific taste preference questions (e.g., "Likes sweet", "Likes spicy") as dropdowns/buttons.
- **Feature Status:** 
  - "I’ll order this dish" button remains non-functional until backend integration is complete.
  - OCR and AI menu processing fixes are deferred to the next sprint.

---

## UAT results

| ID | Scenario | Related US | Status | Notes |
|----|----------|------------|--------|-------|
| **UAT-01** | Budget-Filtered Recommendation | US-001 | **PASSED** | The system correctly displayed a dish within the $15 budget limit using the default menu. No fetch errors occurred. |
| **UAT-02** | Order Dish Confirmation | US-012 | **PARTIAL** | The "Saved" message appeared but the history of the orders does not developed yet. |
| **UAT-03** | View Another Recommendation | US-013 | **PARTIAL** | The "Another option" button loads new dishes and the budget saved, but preferences (allergies/tastes) reset because of problems with AI integration. |

---

## Quality evidence discussed

The following quality metrics and checks were reviewed to ensure the stability of the Sprint 2 increment:

- **Deployment Status:** 
  - The application is successfully deployed on Vercel ([Link](https://team-24-navy.vercel.app)).
  - Zero downtime during the demo.

- **Link Integrity (Lychee):** 
  - Automated link checking was performed using Lychee.
  - Result: **0 broken links** found in `README.md` and project documentation.
  - *Note:* Links now point to the stable `main` branch commits as required.

- **Error Handling:** 
  - User-facing errors are handled gracefully via console logs and UI feedback.

---

## Feedback

### Positive
- Implemented features (budget filtering, allergy selection) work correctly.
- Main product ideas align with customer expectations.
- Demo was clear and demonstrated progress effectively.

### Constructive
- **Critical:** Preferences reset on refresh; data persistence is mandatory.
- **UI:** "Cuisine" field is unnecessary; replace with specific taste preferences.
- **Logic:** Order history without registration is illogical; prioritize simple sign-up.
- **Backend:** OCR and AI parts need urgent attention and integration.

---

## Customer approvals or requested changes

- Current sprint increment (frontend functionality).
- Decision to prioritize simple registration over cookie-based workarounds.
- UI changes: Removal of "Cuisine" field and addition of taste questions.
- Plan for the next sprint: Focus on profile persistence and backend integration.

---

## Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Complexity of implementing registration within one sprint | Medium | May delay other features | Keep registration minimal (email/password only), no social login |
| OCR/AI integration issues | High | Core feature remains broken | Allocate dedicated time for backend debugging; use mock data for frontend testing if needed |


---


## Action Points

| Assignee | Task | Due Date |
|----------|------|---------|
| Daria Gorshkova, Polina Kharlova | Implement simple user registration | 03.07.26 |
| Viktoriia Iakovleva, Vilena Zulkarnaeva | Update Preference UI: Remove "Cuisine", add taste questions | 03.07.26 |
| Adelina Khafizova, Omar Nader | Connect OCR/AI backend to frontend menu upload | 03.07.26 |
| Daria Gorshkova, Polina Kharlova, Viktoriia Iakovleva, Vilena Zulkarnaeva, Adelina Khafizova, Omar Nader | Develop Order History Page and Preference Persistence | 03.07.26 |

---

## Resulting Product Backlog or scope changes

| Item | Previous State | New State | Location |
|------|----------------|-----------|----------|
| Data Persistence | None (resets on refresh) | **Simple Registration Required** | Product Backlog |
| Preference UI | Includes "Cuisine" selection | **Removed "Cuisine", Added Taste Questions** | Figma / UI Tasks |
| Order History | Planned via cookies/localStorage | **Deferred until Registration is implemented** | User Stories |
| Sprint Priority | General bug fixes | **Focus on Profile Persistence & Backend Integration** | Sprint Plan |
