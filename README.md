# Countries app
- App created with Typescript, React, Express and NodeJS.

## How to setup
Set up your `.env` files in the client and server. Get an API key based on your secret at [jwt.io](https://jwt.io/)

Example:
```
API_SECRET = 'country-app-secret'
API_TOKEN = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Y0gfdzfGhHegCSxoEjM67tPkFrnsnpUKpLz6WpTqs6E
```

In the project directory, run the following commands:

`npm run install:client`
Installs the frontend dependencies.

`npm run install:server`
Installs the backend dependencies.

`npm run start:client`
Runs the frontend.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm run start:server`
Runs the backend.

## Backend Endpoints
### `/countries`
Lists all avaiable countries

### `/countries/:code`
Lists a country informations based on its code
