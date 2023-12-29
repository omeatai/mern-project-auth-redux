# Mern Project - Auth Redux Toolkit App

## Introduction

This is a modern mern Auth Redux Toolkit Application built with React Bootstrap, Node, Express and MongoDB by Ifeanyi Omeata.

## Development Tools/Stack

- React [https://react.dev/](https://react.dev/)
- React Bootstrap [https://react-bootstrap.netlify.app/docs/getting-started/introduction](https://react-bootstrap.netlify.app/docs/getting-started/introduction)
- Bootstrap [https://getbootstrap.com/](https://getbootstrap.com/)
- Redux Toolkit [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)
- Node [https://nodejs.org/en/](https://nodejs.org/en/)
- Express [https://expressjs.com/](https://expressjs.com/)
- MongoDB [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)
- React-Toastify [https://www.npmjs.com/package/react-toastify](https://www.npmjs.com/package/react-toastify)
- Axios [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)
- Vite [https://vitejs.dev/](https://vitejs.dev/)

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

### [https://github.com/omeatai/mern-project-auth-redux/commit/7fc635be57d3be03934cc47d572ff39573d7b1d4](https://github.com/omeatai/mern-project-auth-redux/commit/7fc635be57d3be03934cc47d572ff39573d7b1d4)

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
<summary>7. Create User Model </summary>

# Create User Model

### [https://github.com/omeatai/mern-project-auth-redux/commit/ce4f3c953c033e898ef1d2fccc81327b721439b7](https://github.com/omeatai/mern-project-auth-redux/commit/ce4f3c953c033e898ef1d2fccc81327b721439b7)

### [https://github.com/omeatai/mern-project-auth-redux/commit/1a524216267dcc4c8c6141ac2972b3992de0a9e8](https://github.com/omeatai/mern-project-auth-redux/commit/1a524216267dcc4c8c6141ac2972b3992de0a9e8)

<img width="1095" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/6b5141c9-e4ab-4fc5-89ee-16df28779972">
<img width="1095" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/21832352-9870-4079-8c92-59805121fc82">
<img width="1095" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/d4d0eef0-18b3-4440-a28e-b07b17a75be9">
<img width="1095" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/8b1fe90c-0b94-4260-b7bf-eef8cf2803be">

# #End</details>

<details>
<summary>8. Register User Logic </summary>

# Register User Logic

### [https://github.com/omeatai/mern-project-auth-redux/commit/17c7691a6a9c041fa77ea894d965f1aeeb904f0e](https://github.com/omeatai/mern-project-auth-redux/commit/17c7691a6a9c041fa77ea894d965f1aeeb904f0e)

<img width="1095" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/4b1688b3-f411-461f-b97b-deaa47091d94">
<img width="1095" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/a0ae5f4d-a945-4d82-8b10-39d4492ce66a">
<img width="1095" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/7aed2549-376c-4fd4-9a0d-5a1612c23a74">
<img width="1095" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/b73c5861-00ac-4242-9862-8bb988fe6df1">
<img width="1204" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/397f3688-0f1c-4194-922a-9845537a40be">
<img width="1042" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/74d31eb3-9338-4f0d-bfc0-d590f40edc69">

# #End</details>

<details>
<summary>9. Generate JWT and save in http-only Cookie </summary>

# Generate JWT and save in http-only Cookie 

### [https://github.com/omeatai/mern-project-auth-redux/commit/a2b5c0cd2b82a868bd750b7b5cbc79c3db0006be](https://github.com/omeatai/mern-project-auth-redux/commit/a2b5c0cd2b82a868bd750b7b5cbc79c3db0006be)

<img width="1092" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/1a0dca74-3da2-4c6c-9981-b69e825b1b28">
<img width="1092" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/d5c7b543-076f-4454-845b-f8fbcec409ba">
<img width="1204" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/c58e1056-c6cd-4d24-89bb-f5b4f8f5ed90">
<img width="1204" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/fff314fc-375d-4750-98a1-ed9711c496b2">

# #End</details>

<details>
<summary>10. Login/Auth User Logic </summary>

# Login/Auth User Logic 

### [https://github.com/omeatai/mern-project-auth-redux/commit/076276ffb9b42f138035153179e8a32523e43495](https://github.com/omeatai/mern-project-auth-redux/commit/076276ffb9b42f138035153179e8a32523e43495)

<img width="1095" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/7a900ba7-b2b7-4474-b613-ec558a70da54">
<img width="1095" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/9ca2ba6c-9448-4dca-8daf-126f524677d9">
<img width="1183" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/5cff7c3a-21b8-40ad-8756-d63efa39606f">
<img width="1183" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/7daa1826-f550-4cdd-adc2-15179c7dc3f7">
<img width="1183" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/cb7f8d6d-c30b-457d-b82d-5093dd816aae">
<img width="1183" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/f0fbc1aa-4cd9-4bfc-a277-8768cf454b8d">

# #End</details>

<details>
<summary>11. Logout User Logic </summary>

# Logout User Logic

### [https://github.com/omeatai/mern-project-auth-redux/commit/c37ed9d70b5fca7da7447a6539959c4a7d3b649e](https://github.com/omeatai/mern-project-auth-redux/commit/c37ed9d70b5fca7da7447a6539959c4a7d3b649e)

<img width="1094" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/1a453a83-b0c4-41aa-9303-1af5bc00c770">
<img width="1184" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/ab6efcb8-fd7e-4db1-8f95-25c8d5788ade">
<img width="1184" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/f985f9bf-776c-48ea-93a2-b2b0fe79600f">

# #End</details>

<details>
<summary>12. Protect Routes with Auth Middleware </summary>

# Protect Routes with Auth Middleware

### [https://github.com/omeatai/mern-project-auth-redux/commit/2c0809980926293e480e2f9427d96285b47ff60b](https://github.com/omeatai/mern-project-auth-redux/commit/2c0809980926293e480e2f9427d96285b47ff60b)

<img width="1184" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/39dc03a3-b1d6-469f-b360-182447e8624d">
<img width="1184" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/878954e4-4b86-4738-83fc-cd747570e61a">
<img width="1099" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/bd72e3e9-e70d-4046-a9e9-714521e2c866">
<img width="1099" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/f8b36e8b-d6d5-46d3-81fa-90994fae68b5">
<img width="1184" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/ac9256bb-16e8-44b7-b7a0-db334488536f">
<img width="1184" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/ae117fc0-076a-4fec-bb3b-e3cb83f6d83b">
<img width="1186" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/e4ee7a04-fdfe-4d8b-927a-a864bff5b4b1">
<img width="1186" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/21906b58-7855-4441-b56f-ad0025ead273">
<img width="1186" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/e7ff6f69-9089-4472-9cca-8af0f4319edf">
<img width="1093" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/2d44ff36-8092-4f62-80c4-cfc3e0d49d4a">
<img width="1185" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/25b9ed13-98e2-446a-8cb0-797f2bafef79">
<img width="1094" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/201a0046-4330-4491-b073-e4cd99413e24">
<img width="1187" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/9c275b01-8661-4ceb-b67c-f5807bff9787">

# #End</details>

<details>
<summary>13. Update User Logic </summary>

# Update User Logic

### [https://github.com/omeatai/mern-project-auth-redux/commit/34ab5447c1390128eb0dcb10503dfdf4402c4208](https://github.com/omeatai/mern-project-auth-redux/commit/34ab5447c1390128eb0dcb10503dfdf4402c4208)

<img width="1099" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/d370d5d9-631d-4d43-a53b-69ae304cd698">
<img width="1185" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/eb517604-8b32-49ad-9407-53f204541185">
<img width="1185" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/bb253729-5d73-4e82-974f-9f7a825157be">
<img width="1026" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/31b20066-ea6e-4636-9b9d-afa58255f6ce">

# #End</details>

<details>
<summary>14. Setup Frontend </summary>

# Setup Frontend

### [https://github.com/omeatai/mern-project-auth-redux/commit/4e18b83a1863f89f2f693888fb098b9158ad9f64](https://github.com/omeatai/mern-project-auth-redux/commit/4e18b83a1863f89f2f693888fb098b9158ad9f64)

# Install React with Vite

```x
npm create vite@latest frontend
cd frontend
npm install
```

<img width="1087" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/c4acb925-600c-4b35-adfc-9f39d576594d">
<img width="1087" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/04603d84-fd86-4744-93bb-44c8b900fcec">
<img width="1087" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/62754092-8999-462c-ab84-eed528772cf5">

# #End</details>

<details>
<summary>15. Setup Concurrently </summary>

# Setup Concurrently

### [https://github.com/omeatai/mern-project-auth-redux/commit/21974287f67ff9061d9148f97a4e1deadc3092fe](https://github.com/omeatai/mern-project-auth-redux/commit/21974287f67ff9061d9148f97a4e1deadc3092fe)

```x
npm i -D concurrently
```

# Package.json

```x
"dev": "concurrently \"npm run server\" \"npm run client\""
```

# Start Frontend and Backend Concurrently

```x
npm run dev
```

<img width="1087" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/82771c99-6cdc-4624-b59c-1b315d7ecf9c">
<img width="1087" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/0addb01a-7cd6-4e67-bd4f-fa158587b95b">
<img width="1292" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/0d9b5491-6fa7-4b2d-92ec-bff64fb07bf0">
<img width="1292" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/bd45f6d4-3583-4499-bfc0-b896b982140f">

# #End</details>

<details>
<summary>16. Setup React Bootstrap and App Component </summary>

# Setup React Bootstrap and App Component

### [https://github.com/omeatai/mern-project-auth-redux/commit/a543d35c78592b66b4b84adbef23f3056519edeb](https://github.com/omeatai/mern-project-auth-redux/commit/a543d35c78592b66b4b84adbef23f3056519edeb)

# Install React-Bootstrap, React-Icons and Bootstrap

```x
cd frontend
npm i react-bootstrap react-icons bootstrap
```

<img width="1091" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/9da54396-acf8-40b0-bda2-ff5111e6532c">
<img width="1091" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/8ea7cdab-d4bd-413f-ad2c-530d0c1c4b6b">
<img width="1091" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/7dabe384-5e54-40af-b038-740cefe756c5">
<img width="1091" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/450d70db-bbdc-4289-9d6f-fabdfd7ceaa5">
<img width="1293" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/9378eaa0-8083-4f17-9707-cd70e1a7ae6f">

# #End</details>

<details>
<summary>17. Setup Header and Hero Components </summary>

# Setup Header and Hero Components

### [https://github.com/omeatai/mern-project-auth-redux/commit/a1725a6d3024dacd1332fe92ee7c944f831841bb](https://github.com/omeatai/mern-project-auth-redux/commit/a1725a6d3024dacd1332fe92ee7c944f831841bb)

<img width="1142" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/23751c66-cc30-4af9-9246-e98bf0946507">
<img width="1142" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/0d45614e-e244-4246-812f-0873b8ea9b02">
<img width="1142" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/3acf60c2-8f3e-4670-af7e-d3b609b87f70">
<img width="1142" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/62b8163a-a910-4ffd-ac2e-cb5b340bb2a1">
<img width="1266" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/9c3f91a0-10c1-4151-9da9-85ef6966a1bb">

# #End</details>

<details>
<summary>18. Setup React Router DOM </summary>

# Setup React Router DOM

### [https://github.com/omeatai/mern-project-auth-redux/commit/34e47d44f82cbcba39bd123190bd4df4f2ead8ea](https://github.com/omeatai/mern-project-auth-redux/commit/34e47d44f82cbcba39bd123190bd4df4f2ead8ea)

# Install React Router

```x
npm i react-router-dom react-router-bootstrap
```

<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/4c92ef24-0894-45b8-9704-05743e2c6803">
<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/4728bbaf-6ddf-453b-99c7-f74a191ddf68">
<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/24a1b7bc-fad3-4cea-93ee-e331eb03aea7">
<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/22c43edb-15fc-4236-bc47-0354ba43f049">

# #End</details>

<details>
<summary>19. Setup Login and Register Form UI </summary>

# Setup Login and Register Form UI

### [https://github.com/omeatai/mern-project-auth-redux/commit/1b664c4ef26757bfa9be3b361fc9d13bf422b320](https://github.com/omeatai/mern-project-auth-redux/commit/1b664c4ef26757bfa9be3b361fc9d13bf422b320)

<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/71b7c440-94e2-4a06-94b7-d309ddf4b715">
<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/ad3f8c04-d4f6-4794-8c1f-e318afb6543e">
<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/05a0307d-157e-4b48-883d-155d8d035c5d">
<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/07feb239-465a-44f8-bcde-faddfdc438e8">
<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/7d63f95f-e5f8-419a-9461-595a1dd2442f">
<img width="1255" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/e831e1fd-e4fd-4ba9-8bc2-f9ecc14978d3">
<img width="1255" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/56277776-62d0-4c85-afd2-ab187ba009fc">

# #End</details>

<details>
<summary>20. Setup Redux Toolkit </summary>

# Setup Redux Toolkit

### [https://github.com/omeatai/mern-project-auth-redux/commit/e05f82d9ed5a2377ab0d2277acae462528ae4e5d](https://github.com/omeatai/mern-project-auth-redux/commit/e05f82d9ed5a2377ab0d2277acae462528ae4e5d)

# Install Redux Toolkit

```x
npm i @reduxjs/toolkit react-redux
```

<img width="1141" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/4dd793db-6d37-4758-8751-00f2358ce552">
<img width="1141" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/8b5b334f-88a4-4126-b5ab-21f69bbcfc60">

# #End</details>

<details>
<summary>21. Setup Redux Auth Slice </summary>

# Setup Redux Auth Slice

### [https://github.com/omeatai/mern-project-auth-redux/commit/709448b6ee69c1c6ee593b5237c5ea3be4154136](https://github.com/omeatai/mern-project-auth-redux/commit/709448b6ee69c1c6ee593b5237c5ea3be4154136)

<img width="1255" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/c9309318-6c3c-4f0f-b33d-f39d9d4231bc">
<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/fed5e026-5bf3-4f4e-bf25-831c22672df5">
<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/26276f77-57a1-43b3-944d-bfdee966db83">

# #End</details>

<details>
<summary>22. Setup Redux API Slice </summary>

# Setup Redux API Slice

### [https://github.com/omeatai/mern-project-auth-redux/commit/45736129ac6e2752c9debf690818df879b47d314](https://github.com/omeatai/mern-project-auth-redux/commit/45736129ac6e2752c9debf690818df879b47d314)

<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/342c5ef8-ea09-4885-bfe9-51fbf4431e9d">
<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/980f9c89-c7d9-4f0e-b7c0-c3335376992d">
<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/6f76186b-266d-496b-837e-00bba4d5f3d5">
<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/a4fdf339-50da-4ad6-8b2f-3af1624e0343">

# #End</details>

<details>
<summary>23. Setup Redux Login Functionality </summary>

# Setup Redux Login Functionality

# Install Toastify

```x
npm i react-toastify
```

<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/9efb657d-0d59-4a05-90f8-1273039c8562">
<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/ce94df8c-630b-411d-b70d-df9f3f7bc792">
<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/18277fec-045a-48d6-8424-aee65d3cdf09">
<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/16dfa3d8-505c-47eb-9dda-298245583461">
<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/9037da2c-76ed-4c84-8416-0a84f6253eef">
<img width="1256" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/6da7aeb6-d711-4e44-a5dc-a8bd22aca45d">

# #End</details>

<details>
<summary>24. Setup Redux Logout Functionality </summary>

# Setup Redux Logout Functionality

### [https://github.com/omeatai/mern-project-auth-redux/commit/29752b26bcef1b273842afa8fc281b20e53e1add](https://github.com/omeatai/mern-project-auth-redux/commit/29752b26bcef1b273842afa8fc281b20e53e1add)

<img width="1141" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/377ddc2f-4fb3-41b9-af44-47fc33bf7c18">
<img width="1141" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/431eeccb-b628-4b66-a138-bbe96ba57a64">
<img width="1141" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/39576e8f-147c-42c3-8a3d-5e396f88535d">
<img width="1141" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/108a5872-41c8-416f-ba43-de4001c4ae67">
<img width="1141" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/6d93b69b-b9a1-4818-97ec-169b09bbb1cd">
<img width="1141" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/f4d0bb43-36eb-4077-9f0e-75ee6b3e8ba6">
<img width="1255" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/029ef63c-1d84-4c50-9c6f-eddbbc4096c4">

# #End</details>

<details>
<summary>25. Setup Redux Register Functionality </summary>

# Setup Redux Register Functionality

### [https://github.com/omeatai/mern-project-auth-redux/commit/f177d7f1062df767b616d03da6a7505a56ac1e9a](https://github.com/omeatai/mern-project-auth-redux/commit/f177d7f1062df767b616d03da6a7505a56ac1e9a)

<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/f8dec8f6-d0eb-46c1-ae82-215dc693462c">
<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/4b296313-d118-4f4e-a902-021f1fe2c5c6">
<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/b9ce793a-b2c2-4280-94bd-29c711bfec8b">
<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/71d935f4-926b-4bf5-9b30-28697d1ca417">
<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/758d0fa6-b72f-496d-821e-beb48556d2c2">
<img width="1255" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/c5f1c2ee-95af-4735-acb0-1b2a86fbeaea">
<img width="1255" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/18cf480f-dc63-4b14-be8a-68e3f1593d36">
<img width="1255" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/d8d459ae-debb-4cfd-9c4f-ef15c3601743">

# #End</details>

<details>
<summary>26. Setup Profile Component </summary>

# Setup Profile Component

### [https://github.com/omeatai/mern-project-auth-redux/commit/ced230735218f26cc47b98deb4658179bfc87838](https://github.com/omeatai/mern-project-auth-redux/commit/ced230735218f26cc47b98deb4658179bfc87838)

<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/ffc3ff84-8a91-4685-a90c-78ae73f2f100">
<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/3a8ce80b-6f17-416a-a58f-453351c2b994">
<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/c409ed19-11be-4316-82af-c63ce18f3071">
<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/6c36730f-db24-465a-8c56-be1f56b9a248">
<img width="1307" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/85914bd8-a11e-43f4-92b3-e7eef7d44a0f">

# #End</details>

<details>
<summary>27. Setup Redux Update Functionality </summary>

# Setup Redux Update Functionality

### [https://github.com/omeatai/mern-project-auth-redux/commit/e4751a4bd78b9c53490d5b828d998e3a5fdf1139](https://github.com/omeatai/mern-project-auth-redux/commit/e4751a4bd78b9c53490d5b828d998e3a5fdf1139)

<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/d8a851d9-ce00-48b2-86c8-062fd5548f3d">
<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/860506ce-6c25-4703-93c7-0c896fe58115">
<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/615aa1ca-d58f-414d-b9cc-e52c0c78d8ae">
<img width="1140" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/f2cd6ba2-131d-418e-a58f-de4b04c4dcf8">
<img width="1307" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/1e79b551-e53a-4e45-aa2f-b72dd6eb3f30">
<img width="1307" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/271065a2-d426-4877-b1e6-4914c0e6a6c3">
<img width="1307" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/06342814-c011-43cc-bc41-59df02ca0be4">

# #End</details>

<details>
<summary>28. Setup For Production Deploy </summary>

# Setup For Production Deploy

### [https://github.com/omeatai/mern-project-auth-redux/commit/1daa0adc7abbe1d396585b24bbf004404a856533](https://github.com/omeatai/mern-project-auth-redux/commit/1daa0adc7abbe1d396585b24bbf004404a856533)

# Build Frontend for production

```x
npm run build
```

# Install CORS

```x
npm install cors
```

# Change NODE_ENV from Development to Production

<img width="1140" alt="Screenshot 2023-12-27 at 10 08 04 PM" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/a0ead084-598c-49ce-a739-f67440a47ac5">

# Test Build with Server

```x
npm run server
```

<img width="1141" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/cbfe8f16-76af-4417-94dd-d052a02b02a1">
<img width="1141" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/d32abcbc-4053-4d72-9477-db904760ec68">
<img width="1141" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/62df4af7-0748-44c2-aeec-36711d28f77c">
<img width="1141" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/879de73b-aff5-464a-9d10-25bf4ac16290">
<img width="1141" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/0ed8af17-6bcd-499b-8648-464745c10d32">
<img width="1305" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/07291b14-5152-4402-9873-a98ee8a565b0">
<img width="1305" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/d38b9c97-c149-4763-8275-b3d4dec17d0e">
<img width="1305" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/5356a4cc-fbdf-4c17-88f5-185d84d34b02">

# #End</details>

<details>
<summary>29. Deploy Project to cPanel Host with Github Actions CI/CD using FTP </summary>

# Deploy Project to cPanel Host with Github Actions CI/CD using FTP

### [https://github.com/omeatai/mern-project-auth-redux/commit/d260bbcff609bcdc8e83520053e7c21e30cce774](https://github.com/omeatai/mern-project-auth-redux/commit/d260bbcff609bcdc8e83520053e7c21e30cce774)

<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/09561114-8ced-4048-bfce-ab93a4b8941f">
<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/11070b7a-7098-4904-bd24-20886d619b08">
<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/50a38589-3f4c-4437-898f-9d8611b576fe">
<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/5798bedf-8186-45b7-a24a-8bede97a4098">
<img width="1243" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/b0fcc9df-9639-40cf-9ff9-e686e1848c95">
<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/e97b3461-9e5d-4cbf-a51c-2c44fc397825">

<img width="1252" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/b3d01c0e-81b0-47c5-9456-6b77dce3ca7a">
<img width="1252" alt="Screenshot 2023-12-27 at 11 06 53 PM" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/47078ff5-b647-432d-ac23-bf0e564b5b9b">
<img width="238" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/b54ed22e-ea1b-4c5e-9a22-4d87d591db00">

<img width="1383" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/0861993c-fafa-4e58-89a2-8fddccaa83a5">
<img width="1383" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/90aa59c1-b522-44bb-a017-6dadb069dd00">
<img width="1383" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/8582f494-8de8-4755-a917-2b251f6c1a98">
<img width="1383" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/1cd763ab-bd39-4631-9364-e9b84a90b51a">

# #End</details>

<details>
<summary>30. Setup CORs for Production </summary>

# Setup CORs for Production

### [https://github.com/omeatai/mern-project-auth-redux/commit/db0be5c92340a1ca4b6d204e8f8a434d860561f5](https://github.com/omeatai/mern-project-auth-redux/commit/db0be5c92340a1ca4b6d204e8f8a434d860561f5)

<img width="1139" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/bc93f7eb-263f-4afe-894d-d75e17745528">
<img width="1355" alt="image" src="https://github.com/omeatai/mern-project-auth-redux/assets/32337103/8152d48b-aba4-471b-85eb-60cfabc12ae2">

```x
npm i cors
```

# #End</details>

