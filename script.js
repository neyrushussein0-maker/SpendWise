
"use strict";

// Monthly budget in Kenyan shillings
const MONTHLY_BUDGET = 46000;

// Store transactions while the page is open
let expenses = [];

// HTML elements
const expenseForm = document.getElementById("expense-form");
const nameInput = document.getElementById("expense-name");
const amountInput = document.getElementById("expense-amount");
const categoryInput = document.getElementById("expense-category");
const expenseList = document.getElementById("expense-list");
const totalExpensesElement = document.getElementById("total-expenses");
const remainingBudgetElement = document.getElementById("remaining-budget");
const formMessage = document.getElementById("form-message");

// Category names and their matching HTML IDs
const categories = [
    { name: "Food", id: "food-total" },
    { name: "Transport", id: "transport-total" },
    { name: "Rent", id: "rent-total" },
    { name: "Entertainment", id: "entertainment-total" },
    { name: "Savings", id: "savings-total" },
    { name: "Utilities", id: "utilities-total" }
];

// Format amounts as Kenyan shillings
function formatCurrency(amount) {
    return "KSh " + amount.toLocaleString("en-KE", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
}

// Calculate all recorded expenses
function calculateTotal() {
    return expenses.reduce(function (total, expense) {
        return total + expense.amount;
    }, 0);
}

// Calculate expenses for a selected category
function calculateCategoryTotal(categoryName) {
    return expenses
        .filter(function (expense) {
            return expense.category === categoryName;
        })
        .reduce(function (total, expense) {
            return total + expense.amount;
        }, 0);
}

// Update the dashboard totals and category cards
function updateDashboard() {
    const total = calculateTotal();
    const remaining = MONTHLY_BUDGET - total;

    totalExpensesElement.textContent = formatCurrency(total);
    remainingBudgetElement.textContent = formatCurrency(remaining);

    // Show a warning style if the budget is exceeded
    remainingBudgetElement.classList.toggle("over-budget", remaining < 0);

    categories.forEach(function (category) {
        const categoryElement = document.getElementById(category.id);

        categoryElement.textContent = formatCurrency(
            calculateCategoryTotal(category.name)
        );
    });
}

// Display transactions in the table
function renderExpenses() {
    expenseList.replaceChildren();

    if (expenses.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");

        cell.colSpan = 4;
        cell.textContent = "No transactions added yet.";

        row.appendChild(cell);
        expenseList.appendChild(row);
        return;
    }

    expenses.forEach(function (expense) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = expense.name;

        const categoryCell = document.createElement("td");
        categoryCell.textContent = expense.category;

        const amountCell = document.createElement("td");
        amountCell.textContent = formatCurrency(expense.amount);

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.type = "button";
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute(
            "aria-label",
            "Delete " + expense.name
        );

        deleteButton.addEventListener("click", function () {
            deleteExpense(expense.id);
        });

        actionCell.appendChild(deleteButton);
        row.append(nameCell, categoryCell, amountCell, actionCell);
        expenseList.appendChild(row);
    });
}

// Add a transaction
function addExpense(name, amount, category) {
    const expense = {
        id: Date.now() + Math.random(),
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    renderExpenses();
    updateDashboard();
}

// Delete a transaction
function deleteExpense(id) {
    expenses = expenses.filter(function (expense) {
        return expense.id !== id;
    });

    renderExpenses();
    updateDashboard();

    formMessage.textContent = "Transaction deleted successfully.";
    formMessage.classList.remove("error");
}

// Handle form submission
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const amount = Number(amountInput.value);
    const category = categoryInput.value;

    const validCategory = categories.some(function (item) {
        return item.name === category;
    });

    if (
        name === "" ||
        name.length > 100 ||
        amountInput.value.trim() === "" ||
        !Number.isFinite(amount) ||
        amount <= 0 ||
        !validCategory
    ) {
        formMessage.textContent =
            "Please enter a name, a positive amount, and a valid category.";
        formMessage.classList.add("error");
        return;
    }

    addExpense(name, amount, category);

    formMessage.textContent = "Transaction added successfully!";
    formMessage.classList.remove("error");

    expenseForm.reset();
});

// Display the initial dashboard
renderExpenses();
updateDashboard();
