import Container from "react-bootstrap/Container";
import ExpenseForm from "./Expense/Form";
import Card from "react-bootstrap/Card";
import ExpenseList from "./Expense/List";

function App() {
  return (
    <Container className="m-4">
      <h1 className="text-center mb-5">Expense Tracker</h1>
      <Card>
        <Card.Body>
          <ExpenseForm />
        </Card.Body>
      </Card>
      <div className="mt-5">
        <h3>My Expenses</h3>
        <ExpenseList />
      </div>
    </Container>
  );
}

export default App;
