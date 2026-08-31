import React, { useState, useEffect } from "react";
import { getBooks } from "../../services/public";
import "./index.css";

function Books() {
  const [books, setBooks] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoad(true);
    try {
      const data = await getBooks();
      console.log(data);
      setBooks(data);
    } catch (e) {
      alert("Pleaase Try Again Later");
    } finally {
      setLoad(false);
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
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
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
