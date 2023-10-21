# Pesova

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

- [User Endpoints](#user-endpoints)
  - [Get All Users](#get-all-users)
  - [Get User by Id](#get-user-by-Id)
  - [create cover Photo](#create-user)
  - [create cover Photo](#create-user-cover-photo)
  - [Update User](#update-user)
  
---

## Users Endpoints

### Get All Users

Retrieve details of a specific user by their id.

- **URL**: `/pesova`
- **Method**: `GET`
- **Request**: None
- **Response**: (Success - HTTP Status Code 200) and details of all users, else (Failed - HTTP Status Code 400).
    ```json
   {
    "_id": "6532c020b29bdad36e24010a",
    "fullName": "Samuel Ikoli",
    "email": "s.ikoli@yahoo.com",
    "city": "Abuja",
    "country": "Nigeria",
    "bio": "HNG FINALIST BY THE GRACE OF GOD",
    "profilePictures": [],
    "coverPhoto": [],
    "__v": 0
  }
  ```
### Get User By Id

Retrieve details of a specific user by their id.

- **URL**: `/pesova/:user_id`
- **Method**: `GET`
- **Request**: None
- **Response**: If user exists, (Success - HTTP Status Code 200) and details of username searched, else (Failed - HTTP Status Code 400).
    ```json
   {
    "_id": "6532c020b29bdad36e24010a",
    "fullName": "Samuel Ikoli",
    "email": "s.ikoli@yahoo.com",
    "city": "Abuja",
    "country": "Nigeria",
    "bio": "HNG FINALIST BY THE GRACE OF GOD",
    "profilePictures": [],
    "coverPhoto": [],
    "__v": 0
  }
  ```

### Create User

Create a new user record.

- **URL**: `/pesova`
- **Method**: `POST`
- **Request**:

  ```json
  {
    "name": "name",
    "email": "email",
    "profilePictures": "profilePictures (file uploads)",
    "bio": "bio",
    "city": "city",
    "country": "country"
  }
  ```
- **Response**: If successfully created, (Success - HTTP Status Code 200) and details of new user is returned, else (Failed - HTTP Status Code 400) e.g.
  ```json
   {
    "_id": "6532c020b29bdad36e24010a",
    "fullName": "Ayibanimi",
    "email": "s.ikoli@yahoo.com",
    "city": "Abuja",
    "country": "Nigeria",
    "bio": "HNG FINALIST BY THE GRACE OF GOD",
    "profilePictures": [],
    "coverPhoto": [],
    "__v": 0
  }
  ```

### Create User Cover Photo

Update or create the cover photo of a specific user.

- **URL**: `/pesova-cover-photo/:user_id` Where `:user_id` should be replaced with the **`CURRENT`** id of the already existing user.
- **Method**: `POST`
- **Request**:

  ```json
  {
    "coverPhoto": "updated profilePictures (file uploads)"
  }
  ```
- **Response**: If successfully updated, (Success - HTTP Status Code 200) and details of new user is returned, else (Failed - HTTP Status Code 400)

### Update User

Update the details of a specific user.

- **URL**: `/pesova/:user_id` Where `:user_id` should be replaced with the **`CURRENT`** id of the already existing user.
- **Method**: `PATCH`
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

* [Server URL](https://pesova.vercel.app/)

## 🤝 The Team

