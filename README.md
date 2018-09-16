# Ecommerce - Client
Get Server Here https://github.com/julianjca/ecommerce-server

## Simple Ecommerce site with express and vue js

This is a project for Hacktiv 8 Coding Bootcamp

## REST API

List of routes

Route | HTTP | Description
------|------|------------
`/login` | POST | Login
`/register` | POST | Register
`/auth` | GET | User Authentication
`/checkout` | POST | Checkout Payment
`/categories` | POST | Create Category
`/categories/:id` | PUT | Update Category
`/categories` | GET | Get all Category
`/categories/Lid` | DELETE | Delete Category
`/categories/:id` | GET | Get Category By ID
`/products` | POST | Create Product
`/products/:id` | PUT | Update Product
`/products` | GET | Get all Product
`/products/Lid` | DELETE | Delete Product
`/products/:id` | GET | Get Product By ID

## Usage
With only npm:
```
cd server
npm install
nodemon app.js

cd client
live-server (install live server first if you don't have it npm install live-server
```

Access from localhost http://localhost:3000 for API/server side and http://localhost:8080 for client side
