import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function ExpenseList() {
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
        <tr>
          <td>Milk</td>
          <td>5</td>
          <td>Groceries</td>
          <td>
            <Button variant="outline-danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>Bread</td>
          <td>2</td>
          <td>Groceries</td>
          <td>
            <Button variant="outline-danger">Delete</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ExpenseList;
