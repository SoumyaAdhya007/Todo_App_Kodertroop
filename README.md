# Todo App
![Screenshot 2023-06-29 162206](https://github.com/SoumyaAdhya007/Todo_App_Kodertroop/assets/112754567/7da082e2-eb3d-4db9-a0d5-08b455d312ac)

**Server:** `Node`, `Express` , `MongoDB Atlas` , `Redis `

**Client:** `React`, `Material UI `

## Features

- Create Todo
- Search Todo
- Delete Todo

### Run Locally Clone this Project

```
https://github.com/SoumyaAdhya007/Todo_App_Kodertroop.git
```

### Server dependencies

```
{
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^7.3.1",
    "nodemon": "^2.0.22",
    "redis": "^4.6.7"
}
```

### Client dependencies

```
{
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@mui/icons-material": "^5.11.16",
    "@mui/lab": "^5.0.0-alpha.134",
    "@mui/material": "^5.13.6",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
}
```

## API Endpoints

#### Create New Todo

```javascript
POST / createtodo;
```

#### Get All Todos

```javascript
GET / gettodo;
```

#### Search Todo

```javascript
GET / searchtodo;
```

#### Update Todo

```javascript
PATCH  /updateTodo/:id
```

#### Delete Todo

```javascript
DETELE  /deletetodo/:id
```

### Todo Schema

```javascript
{
    title: { type: String, required: true }, // Title of the todo (require  field)
    description: { type: String }, // Description of the todo (optional field)
}


```
