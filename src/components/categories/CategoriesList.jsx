import axios from "axios";
import { useState } from "react";
import { SlPencil, SlTrash } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ListItems = ({ item, index, onEdit }) => {
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();

  const deleteItem = () => {
    axios
      .delete("http://localhost:8000/categoriesArticle/" + item.id)
      .then(() => {
        toast.success("Амжилттай устгалаа");
        setDeleted(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Алдаа гарлаа");
      });

    // fetch("https://demo-api-one.vercel.app/api/categories", {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: localStorage.getItem("token"),
    //   },
    //   body: JSON.stringify({ id: item.id }),
    // })
    //   .then((res) => {
    //     statusCode = res.status;
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (statusCode === 200) {
    //       toast.success("Амжилттай устгалаа");
    //       setDeleted(true);
    //     } else {
    //       if (statusCode === 403 || statusCode === 401) {
    //         navigate("/signout");
    //       }
    //       toast.error(data.message);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toast.error("Алдаа гарлаа");
    //   });
  };
  if (deleted) return <></>;

  return (
    <tr>
      <th>{index}</th>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td style={{ whiteSpace: "nowrap" }}>
        <button
          className="btn btn-sm btn-outline-primary me-2"
          onClick={() => onEdit(item)}
        >
          <SlPencil />
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={deleteItem}>
          <SlTrash />
        </button>
      </td>
    </tr>
  );
};

export default function CategoryList({ items, onEdit }) {
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th width="1">#</th>
          <th>Name</th>
          <th>Description</th>
          <th width="1">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <ListItems
            item={item}
            index={index + 1}
            key={`list-item-${index}`}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
}
