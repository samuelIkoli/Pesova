# Pesova

## Table of Contents
  - [Project Configuration](#project-configuration)
- [Getting Started](#getting-started-running-the-server)
  - [Tech Stack](#tech-stack)
  - [Testing](#testing)
- [Endpoints](#endpoints) 
  - [APIs](#apis) 
  - [Request](#request) 
  - [Response](#response) 
  - [Response Status](#response-status) 



## 📁 Project Configuration

The project is divided into:

- Controllers: found in `controllers` folder. Coordinates the interaction between the UI and the backend services.

- Model: found in `models` directory. Database Schema of the events app.

- Routes: found in `routes` directory. URL endpoints and their corresponding method/action.


### 🔧 Tech Stack

- NodeJS
- ExpressJS
- MongoDB (Mongoose as ODM)
- Cloudinary


## 🌐 Endpoints

# USERS API Documentation

This document provides documentation for the API endpoints specified below.

## Table of Contents

- [User Endpoints](#user-endpoints)

  - [Get All Users](#get-all-users)
  - [Get User by Id](#get-user-by-Id)
  - [create cover Photo](#create-user)
  - [create cover Photo](#login-user)
  - [Update User](#update-user)


---

## Users Endpoints


### Login User

Create a new user record.

- **URL**: `/login/google`
- **Method**: `GET`
- **Request**: None


### Get User By Id

Retrieve details of a specific user by their id.

- **URL**: `/api/:user_id`
- **Method**: `GET`
- **Request**: None
- **Response**: If user exists, (Success - HTTP Status Code 200) and details of username searched, else (Failed - HTTP Status Code 400).


### Update User

Update the details of a specific user.

- **URL**: `/api/:user_id` Where `:user_id` should be replaced with the **`CURRENT`** id of the already existing user.
- **Method**: `PUT`
- **Request**:

  ```json
  {
    "name": "updated name",
    "profilePictures": "updated profilePictures (file uploads)",
    "bio": "updated bio",
    "city": "updated city",
    "country": "updated country"
  }
  ```
- **Response**: If successfully updated, (Success - HTTP Status Code 200) and details of new user is returned, else (Failed - HTTP Status Code 400)
  ```json
   {
    "name": "updated name",
    "profilePictures": "updated profilePictures (file uploads)",
    "bio": "updated bio",
    "city": "updated city",
    "country": "updated country"
  }
  ```


## 🔗 Links

* [Server URL](http://ec2-18-119-101-235.us-east-2.compute.amazonaws.com:3000/)

## 🤝 The Team

