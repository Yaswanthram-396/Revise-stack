import React, { useState, useEffect } from "react";
import {
  getBooks,
  deleteBookByid,
  createbook,
  updateBookStatus,
} from "../../services/public";
import "./index.css";
import { useToast } from "../context/toast/toast";
import BookForm from "./bookform";

function Books() {
  const [books, setBooks] = useState([]);
  const [load, setLoad] = useState(false);
  const [deleteloading, setDeleteloading] = useState(false);
  const showToast = useToast();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoad(true);
    try {
      const data = await getBooks();
      setBooks(data);
    } catch (e) {
      showToast(false, "Please try again later");
    } finally {
      setLoad(false);
    }
  };
  const deleteBook = async (id) => {
    setDeleteloading(true);
    try {
      await deleteBookByid(id);
      showToast(true, "Deleted succesfully");
      getData();
    } catch {
      showToast(false, "Please try again later");
    } finally {
      setDeleteloading(false);
    }
  };
  const handleUpdateStatus = async (id, status) => {
    try {
      await updateBookStatus(id, status);
      showToast(true, "Updated succesfully");
      getData();
    } catch {
      showToast(false, "Please try again later");
    } finally {
      setDeleteloading(false);
    }
  };

  const handleCreatebook = async (data) => {
    try {
      await createbook(data);
      showToast(true, "Created succesfully");
      getData();
    } catch {
      showToast(false, "Please try again later");
    } finally {
      setDeleteloading(false);
    }
  };

  const showdata = (val) => {
    return (
      <div className="booksdata">
        {val.map((item) => (
          <div className="book-card" key={item._id}>
            <div className="book-details">
              <h2>{item.title}</h2>

              <p>
                <strong>Author:</strong> {item.author}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span className={`status ${item.status}`}>{item.status}</span>
              </p>

              <p>
                <strong>Created:</strong>{" "}
                {new Date(item.createdAt).toLocaleDateString()}
              </p>

              <p>
                <strong>Updated:</strong>{" "}
                {new Date(item.updatedAt).toLocaleDateString()}
              </p>
            </div>
            <select
              value={item.status}
              onChange={(e) => handleUpdateStatus(item._id, e.target.value)}
            >
              <option value={"reading"}>Reading</option>
              <option value={"wishlist"}> wishlist</option>
              <option value={"finished"}>finished</option>
            </select>
            <button
              disabled={deleteloading}
              onClick={() => deleteBook(item._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <BookForm createbook={handleCreatebook} />
      {load ? (
        <>Loading...</>
      ) : books.length > 0 ? (
        showdata(books)
      ) : (
        <>No Data</>
      )}
    </>
  );
}

export default Books;
