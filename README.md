# Mern Project - Auth Redux App

## Introduction

This is a modern mern Auth Redux Toolkit Application built with React, Node, Express and MongoDB by Ifeanyi Omeata.

## Development Tools/Stack

- React [https://react.dev/](https://react.dev/)
- Node [https://nodejs.org/en/](https://nodejs.org/en/)
- Express [https://expressjs.com/](https://expressjs.com/)
- MongoDB [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)
- React-Toastify [https://www.npmjs.com/package/react-toastify](https://www.npmjs.com/package/react-toastify)
- Axios [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)

## Demo

## Project Steps (Tutorial)

<details>
<summary>1. Create Server.js </summary>

# Create Server.js 

### [https://github.com/omeatai/mern-project-auth-redux/commit/f3aa0241e68ce6a9d841ed224c5032eb43b33bd4](https://github.com/omeatai/mern-project-auth-redux/commit/f3aa0241e68ce6a9d841ed224c5032eb43b33bd4)

# Initialise npm

```x
npm init -y
```

# Install Dependencies (express, dotenv, mongoose, bcryptjs, jsonwebtoken, cookie-parser)

```x
npm i express dotenv mongoose bcryptjs jsonwebtoken cookie-parser
```

# Install Nodemon

```x
npm i -D nodemon
```

<img width="1097" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/72510804-4671-4933-aff7-3c4e6c9406ef">
<img width="1097" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/0b91f307-ac5d-44ed-a46a-efb719c396cd">
<img width="1097" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/7ff71eef-3597-4ae6-8555-cd9b279b394c">
<img width="1097" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/4b68d9a3-d543-43b5-ae95-ccffb1bd7544">
<img width="1157" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/e1e0ec25-7b30-4396-8726-6c5676b6506b">

# #End</details>

<details>
<summary>2. Setup User Routes and Controller </summary>

# Setup User Routes and Controller

# User Routes

```x
**POST /api/users**   		 - Register a user
**POST /api/users/auth** 	 - Authenticate a user and get token
**POST /api/users/logout**  - Logout user and clear cookie
**GET /api/users/profile** 	 - Get user profile
**PUT /api/users/profile**     - Update user profile
```

<img width="1094" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/800bbe49-e62e-43f7-85a7-195ecc151051">
<img width="1094" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/4868d59e-7778-48e6-a6be-2cfda8ddcaae">
<img width="1094" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/88d09d34-0488-4f51-bfc9-9a3a313971c5">
<img width="1252" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/274561c1-e33c-4fa6-bc05-48186663a09f">
<img width="1250" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/ecda6f52-b9bf-46c8-a62e-078d3bb764c3">
<img width="1250" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/208cdd78-bfe3-4760-bcff-c2964c950555">
<img width="1295" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/71a18759-b972-4e41-9d32-1cfe7cca2fda">

# #End</details>

<details>
<summary>3. Setup Async Handler </summary>

# Setup Async Handler 

### [https://github.com/omeatai/mern-project-auth-redux/commit/28bfc79595adbfb0b3745f38bc1971e4839f49c3](https://github.com/omeatai/mern-project-auth-redux/commit/28bfc79595adbfb0b3745f38bc1971e4839f49c3)

#Install Express-Async-Handler

```x
npm i express-async-handler
```

<img width="1094" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/9ee921ef-bfd9-415d-a137-f51239c85e73">

# #End</details>

<details>
<summary>4. Custom Error Middleware </summary>

# Custom Error Middleware 

### [https://github.com/omeatai/mern-project-auth-redux/commit/7921e7d2404e4a8f898075edd1e31db5bb8f4713](https://github.com/omeatai/mern-project-auth-redux/commit/7921e7d2404e4a8f898075edd1e31db5bb8f4713)

<img width="1096" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/8dc2be8f-b546-4ce0-9757-4cc5842abdc6">
<img width="1096" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/6416dcef-39a8-455b-9788-d7849520a2f9">
<img width="1096" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/33b06c53-7e0b-4884-8650-a09a31abb3cd">
<img width="1096" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/00db59cf-8ce2-4591-bba4-e6ca0e9a7293">
<img width="1254" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/f875fdef-e403-4f84-9ef6-9b9743757715">

# #End</details>

<details>
<summary>5. User Controller Functions and Routes </summary>

# User Controller Functions and Routes

### [https://github.com/omeatai/mern-project-auth-redux/commit/f7d7c35dfb7f255b46e9cd5a81134873e1f51a3c](https://github.com/omeatai/mern-project-auth-redux/commit/f7d7c35dfb7f255b46e9cd5a81134873e1f51a3c)

<img width="1096" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/f68fac81-1aa8-40f2-a532-baee3450ddc5">
<img width="1096" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/dfb2cbfa-5b65-4079-a2e8-5d956b707655">
<img width="1096" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/0af785d0-fb74-4c69-89dd-e48c4efa6d30">
<img width="1205" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/9457329d-3340-465f-9b3d-eb46deab2aac">
<img width="1205" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/7c02b690-c399-487b-b35f-0c9b067009ad">
<img width="1205" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/ccdd674b-ccbc-4823-9ae1-601c195d4c83">
<img width="1205" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/ba9c223e-33c0-41cc-81ac-56cf398e133d">
<img width="1205" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/abb598c8-b0e3-442e-bb08-1d00b376297b">

# #End</details>

<details>
<summary>6. Setup MongoDB Database </summary>

# Setup MongoDB Database

<img width="1214" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/e92a5d2d-2d31-4fb9-9894-26196110fbbc">
<img width="1267" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/12290347-c4a8-4efb-93a5-b615275afe29">
<img width="1267" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/704f91ae-e274-44ad-860f-de906ea0fbd7">
<img width="1267" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/0876ceb3-4602-4e04-9397-34608abbdedd">
<img width="1267" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/f0bd7987-ba71-4b6e-a85d-4eb735a6a002">
<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/9ef06181-c2ee-4123-8da4-61acfc0c35b9">
<img width="1265" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/89968bc7-6931-4a4a-b640-372793e7d8e1">
<img width="1069" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/00274e1d-64f4-46b6-8277-94f5b0c69935">
<img width="1095" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/138f4f94-32f7-49b9-9ba5-35e078a29c02">
<img width="1095" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/51ed877e-5d44-48a0-b5e4-e94139955c4f">
<img width="1095" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/ae09cd7c-06ed-4cc3-b4a6-f668dbdd90d8">

# #End</details>

<details>
<summary>7. Create user Model </summary>

# Create user Model


```x

```

```x

```

```x

```

```x

```

```x

```

```x

```

```x

```

```x

```

```x

```

```x

```

```x

```

# #End</details>

