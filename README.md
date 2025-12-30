# Project Title


    # 🖥️ Cliniqon Frontend – React + Vite

    The screenshots are provided in Screenshots folder 

    This project is the **Frontend Dashboard UI** built using **React + Vite**, consuming APIs from the **Laravel Dashboard API**.

It includes:

- Authentication (JWT)
- Dashboard summary cards
- Earnings & balance charts
- Projects listing
- Daily schedule / activity timeline (Right Panel)
- Bootstrap-based responsive UI
- Lucide Icons

---

## 🛠 Tech Stack

- React 18
- Vite
- Bootstrap 5
- Axios
- Lucide-react (Icons)
- SCSS / CSS
- Laravel API (Backend)

---


## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone <frontend-repository-url>
cd cliniqone_frontend
2️⃣ Install Dependencies
bash

npm install
3️⃣ Environment Setup
Create .env file in root directory:

env

VITE_API_BASE_URL={{API_URL}}
Ensure backend Laravel server is running.

4️⃣ Start Development Server
bash

npm run dev
Application will be available at:

arduino

http://localhost:5173
🔐 Authentication Flow
User logs in using backend /api/login

JWT token is stored using AccessToken.js

Token is automatically attached to Axios headers

Protected dashboard APIs are accessed securely

📡 API Integration
All APIs are consumed from Laravel backend:

bash

/api/dashboard/*
Axios Instance
js

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default api;
📊 Dashboard Features
✅ Summary Cards
Total Earnings

Withdraw Amount

Total Projects

Ongoing Projects

✅ Earnings & Balance Charts
Monthly earnings chart

Balance overview

✅ Projects List
Pagination support

Status filters (all / ongoing / completed)

✅ Daily Schedule Timeline
Meeting / Task / Reminder types

Bootstrap grid layout

Lucide icons

Clean right-panel timeline UI

🗂 Schedule Component (Right Panel)
Displays user’s daily activities

Uses:

Bootstrap grid

Custom CSS

Lucide icons

API:

bash

GET /api/dashboard/daily-schedule?date=YYYY-MM-DD

🎨 UI & Styling
Bootstrap utility classes

Custom SCSS

Responsive layout

Minimal & modern dashboard design

🔄 State Management
React Hooks (useState, useEffect)

API state handled per component

Optional Redux/Zustand support if required

🧪 Dummy Data Support
During UI development:

Static dummy JSON can be used

Easily switch to live API using Axios

🔗 Backend Repository
Ensure backend is running:

nginx

Laravel Dashboard API
Backend URL:

API_URL

🧑‍💻 Maintainer
Ajaydas M
Laravel & React Developer

📄 License
This project is for internal / learning / dashboard use.







```
