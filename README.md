# Fire-Up MERN Stack Restaurant Website.

## [Live Link](https://fire-up-restaurant.vercel.app/)
Fire-Up is a Restaurant where users can buy foods,can add Foods to sell and see all foods that they added and bought. Pagination, Price filtering, Foods categories Filtering and Search Functionality makes the website absolutely users friendly.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Protected Routes](#protected-routes)
- [Screenshots](#screenshots)

## Features

- Only logged in users can buy foods and see all foods that they bought and users can't buy more than available quantity.
- Logged in users can add the Foods, see his added Foods and able to Edit & Delete the added Foods.
- Best Six ordered Foods by users Are shown in the Home page.
- Search Functionality, Pagination and filtering on Food Category & Price Category make it Awesome.
- Food Order Route is Private, after login user redirected to the same route.
- All Data are stored in the database MongoDB and Securing with jwt(json web token) using cookies.
- Have Social Login Features and Registering Users with strong Password Enforcement.

## Tech Stack
- React
- MongoDB
- NOde.js
- Express.js
- Tailwind
- DaisyUI
- Firebase Auth
- React Firebase hooks
- Toastify
- JSON Web Token

## Installation

To run the project locally, follow these steps:

1. Clone the repository from GitHub.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.

```bas
git clone https://github.com/Aahmed-Hossain/fire-up-restaurant
cd fire-up-restaurant
npm
npm run dev
```
## Protected Routes

- User cant access [Order Foods Page](https://fire-up-restaurant.vercel.app/orderNow/65566b654cf6ab30b46e5625) without authentication

## Screenshots

<p>User Login: </p>
<img src="https://i.ibb.co/TqWmcZF/fire-Up-Restaurant-login-f.png" width="450px"/>

<p>Top Foods Zone: </p>
<img src="https://i.ibb.co/r5Kfj96/fire-Up-Restaurant-home-f.png" width="450px"/>

<p> **Ordered Foods:** </p>
<img src="https://i.ibb.co/6bbN15D/fire-Up-Restaurant-orderlist1.png" width="450px"/>
<p>Added Foods: </p>
<img src="https://i.ibb.co/6cMDZKg/fire-Up-Restaurant-added-Foods1.png" width="450px"/>
