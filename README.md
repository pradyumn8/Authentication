# MERN Stack Authentication System  

A complete authentication system built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The project includes **Email Verification**, **Password Reset**, and a secure 6-digit OTP feature.  

## 🌟 Features  
- User Registration and Login  
- Email Verification with OTP  
- Password Reset functionality using OTP  
- Secure authentication using **JWT (JsonWebToken)**  
- User-friendly UI with Tailwind CSS  

## 🛠️ Tech Stack  

### **Backend**  
- **Node.js**  
- **Express.js**  
- **MongoDB** with Mongoose ORM  
- Libraries:  
  - `bcryptjs`  
  - `cookie-parser`  
  - `cors`  
  - `dotenv`  
  - `jsonwebtoken`  
  - `nodemailer`  

### **Frontend**  
- **React.js**  
- **Tailwind CSS**  
- Libraries:  
  - `axios`  
  - `react-router-dom`  
  - `react-toastify`  

## 🚀 Project Overview  

This project implements a fully functional **MERN Stack Authentication System**:  

1. **Backend**:  
   - API endpoints for user authentication (Registration, Login, Password Reset, etc.)  
   - OTP generation and email dispatch using **nodemailer**.  
   - Secure password hashing with **bcryptjs**.  

2. **Frontend**:  
   - Responsive UI using **Tailwind CSS**.  
   - Forms for **Login**, **Registration**, and **Password Reset**.  
   - OTP input fields for email verification and password reset.  
   - Integration with backend APIs using **Axios**.  

## 📥 Installation and Setup
### Clone the repository
```bash
git clone https://github.com/pradyumn8/Authentication.git
```
### Navigate into the project directory
 ```bash
 cd server
 ```

### Install dependencies
   ```bash
  npm install
   ```
### Run the Project
   ```bash
  npm run server
   ```
### Navigate into the project directory
 ```bash
 cd client
 ```

### Install dependencies
   ```bash
  npm install
   ```
### Run the Project
   ```bash
  npm run dev
   ```
#### Visit http://localhost:5153 in your browser.

### Contributing
#### Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

