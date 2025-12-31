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

# ScreenShots


<img width="1907" height="892" alt="calling_apis" src="https://github.com/user-attachments/assets/312d0a05-2f3c-49ef-b175-6e3c8d3e8bcd" />
<img width="1912" height="968" alt="login" src="https://github.com/user-attachments/assets/01d61a13-d35e-49fe-865e-ac3da6df292a" />
<img width="1665" height="261" alt="localStorage" src="https://github.com/user-attachments/assets/e5b098eb-72ad-4c80-b66a-e5335dba5c59" />
<img width="1895" height="891" alt="Dashboard3" src="https://github.com/user-attachments/assets/9b17788e-65a7-4c7f-8e9b-e932af796906" />
<img width="1571" height="823" alt="Dashboard1" src="https://github.com/user-attachments/assets/7dd9e52b-746e-4434-967d-0836564de10e" />
<img width="1910" height="912" alt="Dashboard" src="https://github.com/user-attachments/assets/a56c5345-cf2e-475a-814f-c6b39e6bb7ba" />



```
