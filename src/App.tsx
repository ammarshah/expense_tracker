import Container from "react-bootstrap/Container";
import ExpenseForm from "./Expense/Form";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <Container className="m-4">
      <h1 className="text-center">Expense Tracker</h1>
      <Card>
        <Card.Body>
          <ExpenseForm />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
