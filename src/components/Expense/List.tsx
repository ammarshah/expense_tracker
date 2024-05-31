import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Expense } from "../../types";

interface Props {
  expenses: Expense[];
}

function ExpenseList({ expenses }: Props) {
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
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <Button variant="outline-danger">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ExpenseList;
