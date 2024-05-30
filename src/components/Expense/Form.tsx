import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface Props {
  categories: string[];
}

const schema = z.object({
  item: z
    .string({ message: "Item is required." })
    .min(3, { message: "Item should be at least 3 characters." }),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(1, { message: "Amount must be at least 1." }),
  category: z.string().min(1, { message: "Category is required" }),
});

type FormData = z.infer<typeof schema>;

function ExpenseForm({ categories }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
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
