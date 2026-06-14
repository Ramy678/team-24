# Week 2 Report – Orderly

## Project information
- **Name:** Orderly – Food Recommendation App
- **Short description:** A web app that helps users choose dishes from restaurant menus based on their preferences and budget.
- **License:** [MIT](../../LICENSE) 

## Documents
- [User Stories](user_stories.md)
- [MVP v0 Report](mvp-v0-report.md)
- [Customer Meeting Summary](customer-meeting-summary.md)
- [Customer Meeting Transcript](customer-meeting-transcript.md)
- [Analysis](analysis.md)
- [LLM Report](llm-report.md)

## Prototype (Figma)
[Figma Prototype](https://www.figma.com/proto/BK4oKfBZo6r8RxjTanLQ3z/Untitled?node-id=0-1&t=Jd7zt0doPR8pN6OL-1)

## MVP v0 deployment
- **Deployment URL:** https://keen-pegasus-a95a6a.netlify.app/
- **Run instructions:** Open the link above. No installation required.
- **Video demonstration:** https://youtu.be/CKgT0l3MgDk?si=0FWBhFiLGvoZRtDo

## Screenshots
- [Branch protection settings](images/branch-protection.png)
- [Reviewed MR example](images/mr-review.png)
- [Prototype screenshots](images/prototype.png)
- [MVP v0 screenshot](images/mvp-v0.png)

## Coverage

### Prototype (Figma)
The prototype covers the following user story IDs:
**US-001, US-002, US-004, US-005**

It demonstrates:
- Onboarding / preferences screen
- Budget input + menu upload
- Recommendation result with three action buttons
- History screen (placeholder)

### MVP v0 (technical foundation)
The deployed MVP v0 establishes the client-side infrastructure for:
- **US-001** - Propose dishes according to the budget
- **US-004** – Propose dishes according to preferences
- **US-005** - No allergen suggestions

Full implementation of these stories is planned for MVP v1.

## Customer meeting
- [Meeting summary](customer-meeting-summary.md)
- [Customer meeting transcript](customer-meeting-transcript.md) (customer permission obtained)

## Links verification (Lychee)

- **Configuration:** [.lychee.toml](../../.lychee.toml)
- **Latest pipeline:** [Lychee CI Run](https://github.com/Orderly-Team24/team-24/actions/runs/27505802893)
- **Excluded links justification:** 
  - `https://www.figma.com/*` – Figma blocks automated requests (403), excluded via `.lychee.toml`
  - `https://keen-pegasus-a95a6a.netlify.app/*` – excluded to avoid false positives
  - `http://localhost.*` – development environment
  - `https://github.com/.*/actions.*` – dynamic CI/CD links
- **Manual verification date:** 2026-06-14 – all excluded links confirmed accessible in browser 

## Merge Requests & Code Review
- **MR Template:** [Default.md](../../.github/merge-request-templates/Default.md)
- **Example reviewed PR:** [PR #16 - Create .lychee.toml](https://github.com/Orderly-Team24/team-24/pull/16)
