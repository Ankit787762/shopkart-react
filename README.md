# ShopKart - Full-Stack E-Commerce Store

## Preview

<img width="1906" height="914" alt="ShopKart Preview" src="https://github.com/user-attachments/assets/e2255ed5-6914-4a4b-a188-5491ef6dffc7" />

ShopKart is a responsive full-stack e-commerce web application built with React, Node.js, Express.js, and MongoDB. It provides product browsing, search, cart management, user authentication, and admin functionality.

## Features

### User Features

* User registration and login
* User authentication using backend sessions/cookies
* Browse electronics products
* Search products by name
* View detailed product information
* Add products to cart
* Increase or decrease product quantity
* Remove items from cart
* Dynamic cart item count
* Automatic total price calculation
* Responsive user interface
* About page

### Admin Features

* Admin authentication
* Admin dashboard
* Product management
* Add, update, and delete products
* Backend APIs for product operations

### Backend Features

* RESTful APIs using Express.js
* MongoDB database integration
* Mongoose for database operations
* Authentication APIs
* Cart APIs
* Product CRUD APIs
* Controller and route-based backend structure
* Environment variables using dotenv

## Technologies Used

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* JavaScript (ES6+)
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv

## Project Structure

```text
ShopKart
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   │
│   └── package.json
│
└── server
    ├── controllers
    ├── models
    ├── routes
    ├── middleware
    ├── config
    └── server.js
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Ankit787762/shopkart-react.git
```

### 2. Navigate to the project directory

```bash
cd shopkart-react
```

### 3. Install frontend dependencies

```bash
cd client
npm install
```

### 4. Install backend dependencies

```bash
cd ../server
npm install
```

### 5. Configure environment variables

Create a `.env` file inside the `server` directory:

```env
MONGO_URI=
PORT=
```

Add any other environment variables required by your backend.

### 6. Start the backend

```bash
npm run dev
```

### 7. Start the frontend

Open another terminal:

```bash
cd client
npm run dev
```

## API Functionality

The backend provides APIs for:

* User authentication
* User registration
* User logout
* Current user information
* Product CRUD operations
* Cart management

## Future Improvements

* Wishlist functionality
* Product reviews and ratings
* Payment gateway integration
* Order management
* Order history
* Product filtering and sorting
* Improved admin dashboard
* Dark mode

## Author

**Ankit Swami**
