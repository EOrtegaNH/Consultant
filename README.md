# Riverbend Auto Rental — Front Desk

**Role:** Consultant
**Levels applied:** Good Practices → Junior/Proficient · Architectural Patterns → Junior/Proficient · Backend Frameworks → Junior/Proficient · Frontend Frameworks → Junior/Proficient · Agentic AI → Junior/Proficient · CI/CD → Junior/Proficient · Infrastructure → Junior/Proficient · TDD → Junior/Proficient
**Time:** 120m
**ID:** ex-consultant-005

---

## Instructions

This exercise has two parts:

1. **Practical** — implement the Acceptance Criteria described in the [Objective](#objective) section.
   The exercise covers both the backend (`src/`) and the frontend (`frontend/`).
   Read the code in each, understand the current behavior, and make the changes needed
   to satisfy each AC. The backend and frontend are part of the same scenario but each
   AC is independently solvable.
   Before you start, follow the setup steps in [SETUP.md](./SETUP.md).

2. **Theory** — open [THEORY.md](./THEORY.md) and answer the questions there.
   For each question, tick the option you believe is correct.
   Questions marked with 🔍 include a **"Your reasoning"** section — you **must** explain
   why you chose your answer. Skipping the reasoning will result in a half-point penalty
   even if the selected option is correct.

When both parts are complete, open a PR and notify your PL for review.

---

## Context

Riverbend Auto Rental runs a single branch where front-desk staff book vehicles for
walk-in and phone customers. A small service records each booking, works out how many
days the vehicle is out and what the customer owes, and produces the confirmation message
the customer receives. A web dashboard lets staff review the current bookings at the desk.
The branch is growing, and the team is starting to ask the booking flow and the dashboard
to do a little more than they were first built for.

## Objective

### Backend

**As a** developer working on `src/`
**I need to** record an internal vehicle-preparation note for the depot crew every time a
booking is made, in addition to the customer's confirmation message
**So that** the crew knows which vehicle to ready for each upcoming pickup, while the way a
booking is validated, priced, and stored stays exactly as it is today

#### Acceptance Criteria

- [ ] **AC1:**
      **Given** a valid booking request arrives at the desk
      **When** the booking is recorded
      **Then** a depot preparation note for that booking is recorded and can be reviewed,
      *in addition to* the existing customer confirmation message, and the booking's
      validation, day/price calculation, and stored record are unchanged for the same input.

### Frontend

**As a** developer working on `frontend/`
**I need to** show a second list on the dashboard containing only the rentals being picked
up today, presented the same way as the main rentals list
**So that** front-desk staff can see today's pickups at a glance alongside the full list

#### Acceptance Criteria

- [ ] **AC1:**
      **Given** the dashboard is open
      **When** it finishes loading the rentals
      **Then** it shows the full rentals list **and** a separate "Today's pickups" list
      (only rentals whose pickup date is today), both using the same row presentation and
      both reflecting the same loaded data.

## Constraints

> ⚠️ Breaking a constraint applies a proportional penalty to your practical score.
> Each constraint carries equal weight — violating 1 of N constraints reduces your
> practical score by 1/N regardless of how well the objective was solved.

### Backend

- Do not remove existing behavior — the customer confirmation message must still be produced.
- Keep the public API stable — existing endpoints and their response shapes must not change.
- For the same booking request, the validation outcome, the computed days and total, and the
  stored rental record must be identical to today's behavior.

### Frontend

- Do not remove existing behavior — the full rentals list must still render.
- The two lists must share the same row presentation — do not copy the row markup into a
  second place.
- Load the rental data without issuing a separate request for each list.
