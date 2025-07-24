# 🧁 Crave – Bakery Website

A full-featured, cute and cozy bakery website built with modern web technologies like **Bun**, **React**, **Express**, and **PostgreSQL**. Designed with love to showcase bakery products, allow online orders, and provide a delightful user experience.

---

## 🛠 Tech Stack

| Layer        | Tech                                     |
|--------------|------------------------------------------|
| Language     | [TypeScript](https://www.typescriptlang.org/) |
| Runtime      | [Bun](https://bun.sh/)                   |
| Frontend     | [React](https://react.dev/) + [shadcn/ui](https://ui.shadcn.com/) |
| Validation   | [Zod](https://zod.dev/)                  |
| Backend API  | [Express](https://expressjs.com/)        |
| Database     | [PostgreSQL](https://www.postgresql.org/) |
| ORM          | [Prisma](https://www.prisma.io/)         |
| Design System| [Storybook](https://storybook.js.org/)   |
| Dev Env      | [Docker](https://www.docker.com/)        |

---

## 📁 Project Structure

crave/
│
├── app/
│   ├── frontend/        # Public website (React + shadcn + Vite)
│   ├── backend/         # API (Express + Bun)
│   └── admin/           # Admin dashboard (React or shadcn/ui based)
│
├── packages/
│   ├── ui/              # Shared UI components (shadcn/ui + Storybook)
│   ├── types/           # Shared TypeScript types & interfaces
│   ├── zod-schemas/     # Shared Zod schemas
│   └── hooks/           # Shared React/Bun hooks (optional)
│
├── prisma/              # Prisma schema and migrations
│   ├── schema.prisma
│   └── migrations/
│
├── docker/              # Docker and deployment configs
│   ├── Dockerfile.frontend
│   ├── Dockerfile.backend
│   ├── Dockerfile.admin
│   └── docker-compose.yml
│
├── .env                 # Env vars (root level shared)
├── bun.lockb            # Bun lockfile
├── README.md
├── tsconfig.json        # Base TS config (used via extends)
└── bunfig.toml          # Bun config (can include workspaces)




## Features
🍰 Cute, responsive UI for bakery lovers

📦 Modular monorepo (Bun-powered)

🧁 Product menu, gallery, and online order flow

🧾 Form validation with Zod

🔐 API with type-safe inputs

📚 Shared UI components with Storybook

🐘 PostgreSQL DB with Prisma ORM

🐳 Dockerized for smooth deployment


---

## 🚀 Getting Started

### 1️⃣ Clone & Install

```bash
git clone https://github.com/vaishnavisingh1/crave.git
cd crave
bun install



