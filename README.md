# SpendWise Dashboard

## About the Project

SpendWise is a responsive personal finance dashboard built using HTML, CSS, and modern JavaScript. It allows users to record transactions, view a dynamic transaction list, monitor spending across various categories, and track their remaining monthly budget against a set target of KSh 46,000.

## Features

- **Responsive Dashboard:** Designed with CSS Grid and Flexbox layouts that adapt seamlessly across devices, complete with a dark theme preference support.
- **Transaction Form:** Enter transaction names, amounts, and categories with built-in client-side input validation.
- **Dynamic Transaction List:** Instantly updates table records on the webpage when transactions are added or deleted.
- **Automatic Calculations:** Real-time computation of total expenses, remaining monthly budget, and category-specific totals.
- **Budget Alerts:** Visual warning toggles when spending exceeds the KSh 46,000 budget limit.
- **Interactive Controls:** Form submission handlers and item deletion triggers via JavaScript event listeners.

## JavaScript Concepts Implemented

### 1. Variables and Constants
The `const` keyword stores references and fixed values like `MONTHLY_BUDGET` (KSh 46,000) that should not be reassigned. The `let` keyword declares the dynamic `expenses` array to manage transaction updates.

### 2. User Input & Validation
The application collects transaction details via an HTML form and uses conditional statements (`if`) to validate data types, lengths, and positive number constraints before processing.

### 3. Data Processing with Loops & Array Methods
- **`reduce()`**: Used in `calculateTotal()` to iterate through records and compute the overall spending sum.
- **`filter()` & `reduce()`**: Used in `calculateCategoryTotal()` to isolate records by category and sum them up efficiently.
- **`forEach()`**: Used in `renderExpenses()` to loop through the transaction collection and generate table rows.

### 4. DOM Manipulation
Instead of relying on browser logs, the script directly updates elements on the webpage using properties like `textContent`, method calls like `createElement()`, `appendChild()`, and `replaceChildren()`, and class toggles (`classList.toggle()`).

### 5. Event Handling
- Handles form submissions using `addEventListener("submit", ...)` while preventing default page reloads with `event.preventDefault()`.
- Listens for click events on individual **Delete** buttons to remove specific records from the application state.

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid, Media Queries)
- Vanilla JavaScript (ES6+)

## How to Run

1. Open your project folder in **Visual Studio Code**.
2. Open `index.html` directly in your web browser, or use an extension like **Live Server** to preview it locally.
3. Type a transaction name, amount, and category into the input form.
4. Click **Add Transaction** to see your dashboard cards, totals, and table update instantly.
5. Click **Delete** on any row to remove a transaction.

## Future Improvements

- Persistent storage using browser `localStorage`
- Exporting monthly reports or charts
- Editing existing transaction entries
- User authentication and multi-account support
-