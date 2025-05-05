# 📘 CrediKhaata – Loan Ledger UI for Shopkeepers

**CrediKhaata** is a fully responsive, production-grade React.js web application built to help small shopkeepers manage credit transactions (loans, repayments, and balances) with customers. Designed with simplicity and real-world usability in mind, it offers a modern, intuitive interface optimized for daily business use.

---

## 🔗 Live Demo

➡️ [Live on Netlify](link)

---

## 🚀 Features

- ✅ **Secure Login & Signup** with form validation and UI feedback
- ✅ **Dashboard** showing summary of customers, total loan amount, total repaid, and outstanding dues
- ✅ **Add Customer**, **Record Loan**, and **Record Repayment** using dynamic modal forms
- ✅ **Customer Details Page** with transaction history, current balance, and timeline of activity
- ✅ **PDF Export** of customer ledger statements using `jsPDF`
- ✅ **Dark Mode Toggle** with saved theme preference
- ✅ **Mobile-First Design** with responsive layouts and accessibility
- ✅ **Protected Routes** for authenticated users using custom route guards
- ✅ **Toast Alerts** for actions like adding, updating, deleting records

---

## 🧩 Tech Stack

| Technology         | Role / Usage                          |
|--------------------|----------------------------------------|
| React.js (v18+)    | Frontend framework                     |
| Tailwind CSS       | Utility-first, responsive UI styling   |
| React Router DOM   | Routing and navigation                 |
| Context API        | Lightweight state management           |
| react-hook-form    | Form handling with validations         |
| react-toastify     | Beautiful toast notifications          |
| jsPDF              | Generate downloadable PDF statements   |
| Netlify            | Hosting + continuous deployment        |

---

## 🗂️ Folder Structure

```

src/
├── components/       # Reusable UI: Navbar, InputField, Modal, Button, etc.
├── context/          # AuthContext, CustomerContext
├── data/             # Mock customer and transaction data (JSON)
├── hooks/            # Custom hooks (e.g., useDarkMode)
├── pages/            # Views: Login, Signup, Dashboard, CustomerDetail
├── routes/           # ProtectedRoute wrapper
├── App.js            # Route configuration & layout
└── index.js          # Main entry point

````

---

## 🧪 How to Run Locally

```bash
# Step 1: Clone the repo
git clone https://github.com/NareshNaik-501/Credi-Khaata
cd credi-khaata

# Step 2: Install dependencies
npm install

# Step 3: Start development server
npm start

# App will be running at:
http://localhost:3000
````

---

## 🧾 Sample Login

Use these mock credentials to explore the app:

```
Email:    customer@example.com
Password: password
```

---

## 🏗️ Build for Production

To create an optimized build before deployment:

```bash
npm run build
```

---

## 📤 Deployment (Netlify)

To deploy your app:

1. Connect your GitHub repo to Netlify
2. Set the following:

   * **Build Command**: `npm run build`
   * **Publish Directory**: `build`
3. Trigger deploy – site will be live

Live Site: [link](https://)

---

## 🧠 Design Philosophy

* 🔹 **Minimalist + Practical UI** for small business owners with no tech background
* 🔹 **All major actions accessible within 1-2 clicks**
* 🔹 **Persistent theme** with dark/light mode toggle
* 🔹 **Form inputs** are fast, validated, and clean
* 🔹 **PDF exports** give shopkeepers physical records of all dues
* 🔹 **Auth context + protected routing** simulate real-world app security

---

## 🎯 Realistic Components

* **Navbar**: Theme toggle, Logout, and context-aware navigation
* **Dashboard**: Real-time customer summary, quick actions (Add, View, Export)
* **Customer Card**: Shows name, loan status, repayment due
* **Modals**: Clean UI for adding loans, repayments, and customers
* **PDF Report Generator**: Converts customer ledger to printable format

---

## 🧱 Built With Developer Excellence

* 💡 Clean & reusable components
* 🌈 Tailwind utilities for responsive design
* 🧪 LocalStorage for theme persistence
* 🧼 ESLint & Prettier setup ready for team collaboration
* 🔒 ProtectedRoute component ensures only authenticated users access key pages

---

## 👨‍💻 Author

Created by **Prasanth**
🌐 GitHub: [@NareshNaik-501](https://github.com/NareshNaik-501)

## 📄 License

This project is licensed under the MIT License. You are free to use, modify, and distribute it for personal or commercial use.

---

## 💬 Contributing

If you find a bug or want to contribute a feature, feel free to fork this repo, raise a PR, or submit an issue. Contributions are welcome!

---

## 🔚 Final Words

CrediKhaata is more than a UI — it's a digital bridge to empower small shopkeepers with clarity, simplicity, and modern tech. Use it, build upon it, or deploy it for a real kirana shop.

"# Credi-Khaata" 
"# Credi-Khaata-project" 
"# Credi-Khaata-project" 
"# Credi-Khaata-project" 
"# Credi-Khaata-project" 
"# CrediKhaata" 
"# CrediKhaata" 
