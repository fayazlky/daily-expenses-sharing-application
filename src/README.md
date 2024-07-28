# Daily Expenses Sharing Application Backend

## Setup and Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Set up MongoDB and start the MongoDB server
4. Run `npm start` to start the backend server

## API Endpoints

### User Endpoints
- **POST /api/users**: Create a new user
- **GET /api/users/:id**: Retrieve user details

### Expense Endpoints
- **POST /api/expenses**: Add a new expense
- **GET /api/expenses/user/:userId**: Retrieve individual user expenses
- **GET /api/expenses**: Retrieve overall expenses
- **GET /api/expenses/balance-sheet/download**: Download balance sheet

## Testing
- Run `npm test` to execute tests

## Notes
- Ensure to validate inputs and handle errors appropriately.
- Add unit and integration tests for robust code.
