import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Expense } from "../../types";

interface Props {
  expenses: Expense[];
  deleteExpense: (id: number) => void;
}

function ExpenseList({ expenses, deleteExpense }: Props) {
  const calculateExpensesTotal = () => {
    return expenses.reduce((total, expense) => {
      return total + expense.amount;
    }, 0);
  };

  if (expenses.length === 0) {
    return <p className="fw-lighter">Nothing to show</p>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.item}</td>
            <td>${expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <Button
                onClick={() => deleteExpense(expense.id)}
                variant="outline-danger"
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
        {expenses && (
          <tr>
            <td>Total</td>
            <td>${calculateExpensesTotal()}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default ExpenseList;
