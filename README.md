
# SpendWise Dashboard

## About the Project

SpendWise is a responsive personal finance dashboard built using HTML, CSS, and JavaScript. It allows users to record transactions, view a transaction list, monitor spending by category, and track their remaining monthly budget.

The monthly budget is KSh 46,000.

## Features

- Responsive dashboard with six financial categories
- Form for entering transaction names, amounts, and categories
- Dynamic transaction list
- Automatic total expense calculation
- Automatic remaining budget calculation
- Category-specific totals
- Delete transactions
- Input validation
- CSS Grid and Flexbox layouts
- CSS custom properties
- Dark theme support
- Hover and keyboard focus effects
- Over-budget warning

## JavaScript Concepts Implemented

### 1. Variables and Constants

The `const` keyword stores values and HTML element references that should not be reassigned. The `let` keyword declares the `expenses` array because the array is updated when transactions are added or deleted.

The `MONTHLY_BUDGET` constant stores the monthly budget of KSh 46,000.

### 2. User Input

The application collects a transaction name, amount, and category through an HTML form. JavaScript reads these values when the form is submitted.

It validates the input before adding a transaction.

### 3. Calculations

The `calculateTotal()` function uses `reduce()` to calculate the total of all transactions.

The `calculateCategoryTotal()` function uses `filter()` and `reduce()` to calculate the total for a selected category.

The remaining budget is calculated by subtracting total expenses from the monthly budget.

### 4. Functions

- `formatCurrency()` formats amounts in Kenyan shillings.
- `calculateTotal()` calculates all recorded expenses.
- `calculateCategoryTotal()` calculates spending by category.
- `updateDashboard()` updates the displayed totals.
- `renderExpenses()` displays transactions in the table.
- `addExpense()` adds a new transaction.
- `deleteExpense()` removes a selected transaction.

### 5. Event Handling

The `submit` event listener handles form submissions. `preventDefault()` prevents the browser from reloading the page when the form is submitted.

Click event listeners on Delete buttons remove the selected transaction and update the dashboard.

### 6. Arrays and Objects

The `expenses` array stores transaction objects. Each object contains an ID, name, amount, and category.

### 7. Conditional Statements

The application uses `if` statements to validate input and display an empty-state message when there are no transactions.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- CSS Grid
- Flexbox
- CSS Custom Properties
- Responsive Media Queries
- DOM Manipulation
- JavaScript Array Methods

## How to Run

1. Open the project folder in Visual Studio Code.
2. Open `index.html` in a web browser or use Live Server.
3. Enter a transaction name, amount, and category.
4. Click **Add Transaction**.
5. Review the updated totals and transaction list.
6. Click **Delete** to remove a transaction.

## Limitations

Transactions are stored in memory and reset when the page is refreshed. The application does not currently use a database or persistent browser storage.

## Future Improvements

- Save transactions using localStorage
- Add monthly reports and charts
- Add budget alerts
- Allow transactions to be edited
- Add user authentication
