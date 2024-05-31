import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ExpenseForm from "./components/Expense/Form";
import ExpenseList from "./components/Expense/List";
import ExpenseFilter from "./components/Expense/Filter";
import { useEffect, useState } from "react";
import { Expense } from "./types";

function App() {
  const categories = ["Groceries", "Utilities", "Entertainment"];

  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Filter expenses based on selected category
  const filteredExpenses =
    selectedCategory === "All categories"
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  return (
    <Container className="m-4">
      <h1 className="text-center mb-5">Expense Tracker</h1>
      <Card>
        <Card.Body>
          <ExpenseForm categories={categories} addExpense={addExpense} />
        </Card.Body>
      </Card>

      <div className="mt-5">
        <h3>Your expenses</h3>
        <ExpenseFilter
          categories={categories}
          onCategoryChange={handleCategoryChange}
        />
        <br />
        <ExpenseList
          expenses={filteredExpenses}
          deleteExpense={deleteExpense}
        />
      </div>
    </Container>
  );
}

export default App;
