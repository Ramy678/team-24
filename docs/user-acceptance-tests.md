# User Acceptance Tests

UAT scenarios are maintained product assets. Results are recorded per Sprint execution.

---

## UAT-01 — Budget-Filtered Recommendation

**Related US:** [US-001 – Propose dishes according to the budget](https://github.com/Orderly-Team24/team-24/issues/57)

**Precondition:** The app is deployed and accessible. The user has no preferences saved.

**Steps:**
1. Open the app at the deployed URL.
2. Navigate to the food recommender page.
3. Enter a max budget (e.g. `$10`).
4. Submit the form.

**Expected result:**
- The app returns a recommendation card.
- The recommended dish price is ≤ $10.
- No 5xx error is shown.

**Status history:**

| Sprint | Date | Executed by | Result | Notes |
|--------|------|-------------|--------|-------|
| Sprint 2 | <!-- fill after UAT --> | Customer | <!-- Pass / Fail --> | <!-- notes --> |

---

## UAT-02 — Menu Photo Upload and Recommendation

**Related US:** [US-011 – Upload photo of a menu](https://github.com/Orderly-Team24/team-24/issues/62)

**Precondition:** The app is deployed. The user has a JPEG or PNG photo of a restaurant menu.

**Steps:**
1. Open the app and navigate to the photo upload page.
2. Select a menu photo from the device.
3. Submit the photo.
4. Observe the recommendation displayed.

**Expected result:**
- The photo is accepted (no format/size error).
- OCR extracts text from the photo.
- A dish recommendation is displayed based on the extracted menu.

**Status history:**

| Sprint | Date | Executed by | Result | Notes |
|--------|------|-------------|--------|-------|
| Sprint 2 | <!-- fill after UAT --> | Customer | <!-- Pass / Fail --> | <!-- notes --> |

---

## UAT-03 — Save a Dish to Order History

**Related US:** [US-012 – Button "I'll order dish"](https://github.com/Orderly-Team24/team-24/issues/146)

**Precondition:** The app is deployed. A recommendation has been displayed to the user.

**Steps:**
1. Open the app and get a dish recommendation.
2. Click the "I'll order it" button on the recommendation card.
3. Observe the button state change.

**Expected result:**
- The button changes state (e.g. shows "Saved" or becomes disabled).
- No error is shown.
- Clicking again does not create a duplicate entry.

**Status history:**

| Sprint | Date | Executed by | Result | Notes |
|--------|------|-------------|--------|-------|
| Sprint 2 | <!-- fill after UAT --> | Customer | <!-- Pass / Fail --> | <!-- notes --> |
