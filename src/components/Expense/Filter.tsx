import Form from "react-bootstrap/Form";

interface Props {
  categories: string[];
}

function ExpenseFilter({ categories }: Props) {
  return (
    <Form.Select aria-label="Category">
      <option>All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Form.Select>
  );
}

export default ExpenseFilter;
