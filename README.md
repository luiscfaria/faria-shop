# Faria Curated Art

This is project of an art eCommerce. 

## Overview

### Screenshot - Home Screen

![Desktop Design](/app-images/homescreen.PNG)


### Links

- Live Site URL: https://......app/

## Technologies

### Built with

- React.js
- Bootstrap
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- Paypal Payment API

### Features

- Shopping Cart
- User Profile
- User Orders
- Admin Profile
- Admin User Management
- Admin Order Management
- Admin Product Management
- Check out process
- Payment process

### Screenshot - Product Screen

![Product Screen](/app-images/productscreen.PNG)

### Screenshot - Order Screen

![order Screen](/app-images/orderscreen.PNG)

### Screenshot - Admin Product Management Screen

![Product List Screen](/app-images/productlistscreen.PNG)

## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

Note: In case you want to simulate a payment you can get a personal simulation account on https://developer.paypal.com/developer/. 
- Log in to a dashborad
- On the left side, click on Sandbox->Account
- Create a Personal account and get the login and password

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Database

Commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```



