# User Acceptance Tests

UAT scenarios are maintained product assets. Results are recorded per Sprint execution.

---

## UAT-01 — Budget-Filtered Recommendation

**Related US:** [US-001 – Propose dishes according to the budget](https://github.com/Orderly-Team24/team-24/issues/57)

**Precondition:** The app is deployed and accessible at https://team-24-navy.vercel.app/

**Steps:**
1. Open the app. The questionnaire page loads automatically.
2. Select a cuisine type (e.g. Italian).
3. Click "No allergies" (or select specific allergies).
4. Click **"Next: Upload Menu →"**.
5. On the Budget & Menu Photo page, enter a max budget (e.g. `15`).
6. Click **"Skip photo — use default menu →"**.
7. Wait for the recommendation to load.

**Expected result:**
- A recommendation card is displayed.
- The recommended dish price is ≤ $15.
- No error or "Failed to fetch" message is shown.

**Status history:**

| Sprint | Date | Executed by | Result | Notes |
|--------|------|-------------|--------|-------|
| Sprint 2 | <!-- fill after UAT --> | Customer | <!-- Pass / Fail --> | <!-- notes --> |

---

## UAT-02 — Menu Photo Upload and Recommendation

**Related US:** [US-011 – Upload photo of a menu](https://github.com/Orderly-Team24/team-24/issues/62)

**Precondition:** The app is deployed. The user has a JPEG or PNG photo of a restaurant menu (max 8 MB).

**Steps:**
1. Open the app. The questionnaire page loads automatically.
2. Select a cuisine type and set allergies (or click "No allergies").
3. Click **"Next: Upload Menu →"**.
4. On the Budget & Menu Photo page, click **"Choose Menu Photo"**.
5. Select a JPEG or PNG menu photo from the device.
6. Click **"Send for processing"**.
7. Wait for the upload to complete and the recommendation to load.

**Expected result:**
- The photo is accepted without a format or size error.
- OCR extracts text from the photo and parses the menu.
- A recommendation card is displayed with a dish from the uploaded menu.

**Status history:**

| Sprint | Date | Executed by | Result | Notes |
|--------|------|-------------|--------|-------|
| Sprint 2 | <!-- fill after UAT --> | Customer | <!-- Pass / Fail --> | <!-- notes --> |

---

## UAT-03 — Save a Dish to Order History

**Related US:** [US-012 – Button "I'll order dish"](https://github.com/Orderly-Team24/team-24/issues/146)

**Precondition:** The app is deployed. The user has completed the questionnaire and reached the recommendation page.

**Steps:**
1. Complete UAT-01 or UAT-02 to reach the recommendation card.
2. Click the **"I'll order it"** button on the recommendation card.
3. Observe the button state.
4. Try clicking the button again.

**Expected result:**
- The button changes to **"Saved ✓"** and becomes disabled.
- No error message is shown.
- Clicking the button again has no effect (no duplicate saved).

**Status history:**

| Sprint | Date | Executed by | Result | Notes |
|--------|------|-------------|--------|-------|
| Sprint 2 | <!-- fill after UAT --> | Customer | <!-- Pass / Fail --> | <!-- notes --> |
