# Neha Dental – Clinic Booking-Management App

> A frontend + backend booking application built for Neha Dental clinic’s appointment management.  
> Built using Next.js, Supabase and modern UI tooling.

---

## 📖 Project Overview  
Neha Dental is designed to streamline appointment bookings for a dental clinic, enabling patients to book time slots and administrators/doctors to manage bookings and patient data.  
It was built as a proof-of-concept, showcasing modern tech (Supabase, Next.js, Tailwind) and quick delivery of a real-world workflow.

---

## ✨ Core Features  
- ✅ Patient booking form: users select date, time, service and submit booking  
- ✅ Admin/Doctor view: manage appointments (accept/reject/cancel)  
- ✅ Authentication using Supabase Auth  
- ✅ Data persistence using Supabase (Auth + Database)  
- ✅ Responsive UI built with Next.js and TailwindCSS  
- ⚠️ Work-in-Progress: Some parts still under development (e.g., notifications, full clinic workflow)

---

## 🧠 Tech Stack  
| Layer | Technologies |
|-------|-------------|
| Frontend | Next.js, React, TailwindCSS |
| Backend / Database | Supabase (Auth + Postgres) |
| Authentication | Supabase Auth |
| Deployment (Local/Dev) | Vercel / Localhost |

---

## 🏗️ Folder Structure  
nehadental/
├── client/ # Next.js frontend
│ ├── pages/ or app/ # Routes for booking, login, admin
│ ├── components/ # Reusable UI components
│ └── styles/ # Tailwind & global styles
├── server/ (if used) # API or Supabase functions
├── shared/ # Shared types/utilities (if any)
├── .env # Environment variables (Supabase URL & Key)
└── package.json

---

## ⚙️ Setup & Installation  
1. Clone the repository  
```bash
git clone https://github.com/Bharathreddy374/nehadental.git
cd nehadental
cd client
npm install

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url  
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```
🔮 Future Roadmap / Improvements

🛎️ Add real-time notifications (email/SMS) for bookings

📊 Build analytics dashboard for clinic (daily bookings, services breakdown)

🔐 Role-based access control for Admin vs Doctor vs Patient

☁️ Deploy backend/API functions (Supabase Edge Functions) and setup CI/CD

🎨 Improve UI/UX with animations, dark mode toggle, advanced filters

👨‍💻 Author

P Bharath Reddy
📧 bharathreddy372k4@gmail.com

GitHub: https://github.com/Bharathreddy374




