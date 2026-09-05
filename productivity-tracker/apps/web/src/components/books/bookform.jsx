import { useState } from "react";
import { useToast } from "../context/toast/toast";

function BookForm({ createbook }) {
  const [data, setData] = useState({ status: "reading" });
  const showtoast = useToast();

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (data.title && data.author && data.status) {
      await createbook(data);
      setData({ status: "reading" });
    } else {
      showtoast(false, "Please fill all the details");
    }
  };

  return (
    <form onSubmit={handlesubmit}>
      <label>Title</label>
      <input
        value={data.title || ""}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <label>Author</label>
      <input
        value={data.author || ""}
        onChange={(e) => setData({ ...data, author: e.target.value })}
      />
      <label>Title</label>
      <select
        value={data.status}
        onChange={(e) => setData({ ...data, status: e.target.value })}
      >
        <option value="wishlist">Wishlist</option>
        <option value="reading">Reading</option>
        <option value="completed">Completed</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default BookForm;
