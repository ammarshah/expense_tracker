import Form from "react-bootstrap/Form";
import categories from "../../categories";

interface Props {
  onCategoryChange: (category: string) => void;
}

function ExpenseFilter({ onCategoryChange }: Props) {
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value;
    onCategoryChange(category);
  };

  return (
    <Form.Select aria-label="Category" onChange={handleCategoryChange}>
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
