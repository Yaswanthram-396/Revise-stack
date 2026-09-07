# Productivity Tracker

A small full-stack productivity app with JWT authentication, books, recipes, and an authenticated expense tracker.

## Live link

Start the web app locally and open the expense tracker at [http://localhost:5173/expenses](http://localhost:5173/expenses).

## Expense Tracker

The expense tracker supports:

- Authenticated expense records scoped to the signed-in user
- Add, edit, and delete expenses
- Categories: Food, Transport, Shopping, Bills, Health, and Other
- Month selector and category filter
- Monthly total for the selected view

## Run locally

Requirements: Node.js and pnpm.

1. Add `DB_URL` and `JWT_SECRET` to `apps/api/.env`.
2. Run `pnpm install` from the repository root.
3. Run `pnpm dev`.
4. Open [http://localhost:5173/expenses](http://localhost:5173/expenses) and sign in or create an account.

The API runs at `http://localhost:3001/api` by default. Set `VITE_API_URL` in `apps/web/.env` when the API is hosted elsewhere.

## Expense API

All expense endpoints require `Authorization: Bearer <token>`.

- `GET /api/expenses?month=YYYY-MM`
- `POST /api/expenses`
- `PUT /api/expenses/:id`
- `DELETE /api/expenses/:id`

Expense payloads use `title`, `amount`, `category`, `date`, and optional `notes`.
