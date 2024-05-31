import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Expense } from "../../types";
import categories from "../../categories";

interface Props {
  addExpense: (expense: Expense) => void;
}

const schema = z.object({
  item: z
    .string({ message: "Item is required." })
    .min(3, { message: "Item must be at least 3 characters." })
    .max(50, { message: "Item must be at most 50 characters." }),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(0.01, { message: "Amount must be at least 0.01." })
    .max(100_000, { message: "Amount must be at most 100,000" }),
  category: z.enum(categories, {
    errorMap: () => ({
      message: "Category is required.",
    }),
  }),
});

function ExpenseForm({ addExpense }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Expense>({ resolver: zodResolver(schema) });

  const onSubmit = (data: Expense) => {
    const newExpense = { ...data, id: Date.now() };
    addExpense(newExpense);
    reset(); // reset form state
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="item">
        <Form.Label>Item</Form.Label>
        <Form.Control
          {...register("item")}
          type="text"
          placeholder="Enter item"
        />
        <p className="text-danger">{errors.item?.message}</p>
      </Form.Group>

      <Form.Group className="mb-3" controlId="amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          {...register("amount", { valueAsNumber: true })}
          type="number"
          placeholder="Enter amount"
        />
        <p className="text-danger">{errors.amount?.message}</p>
      </Form.Group>

      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Select {...register("category")} aria-label="Category">
          <option value="">Select category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>
        <p className="text-danger">{errors.category?.message}</p>
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
