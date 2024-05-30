import Container from "react-bootstrap/Container";
import ExpenseForm from "./Expense/Form";
import Card from "react-bootstrap/Card";
import ExpenseList from "./Expense/List";
import ExpenseFilter from "./Expense/Filter";

function App() {
  const categories = ["Groceries", "Utilities", "Entertainment"];

  return (
    <Container className="m-4">
      <h1 className="text-center mb-5">Expense Tracker</h1>
      <Card>
        <Card.Body>
          <ExpenseForm categories={categories} />
        </Card.Body>
      </Card>
      <div className="mt-5">
        <h3>My Expenses</h3>
        <ExpenseFilter categories={categories} />
        <br />
        <ExpenseList />
      </div>
    </Container>
  );
}

export default App;
