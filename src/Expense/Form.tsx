import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface Props {
  categories: string[];
}

function ExpenseForm({ categories }: Props) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="item">
        <Form.Label>Item</Form.Label>
        <Form.Control type="text" placeholder="Enter item" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="number" placeholder="Enter amount" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Category">
          <option>Select category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <div className="d-grid">
        <Button className="float-end" variant="primary" type="submit">
          Add
        </Button>
      </div>
    </Form>
  );
}

export default ExpenseForm;
