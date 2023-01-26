import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CategoryEdit({ afterEdit, category }) {
  const [name, setName] = useState(category?.name);
  const [description, setDescription] = useState(category?.description);
  const navigate = useNavigate();

  const submit = () => {
    axios
      .patch(`http://localhost:8000/categoriesArticle/${category.id}`, {
        name,
        description,
      })
      .then((res) => {
        toast.success("Амжилттай нэмэгдлээ");
        afterEdit(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Алдаа гарлаа");
      });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Name of the category"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Button varient="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
