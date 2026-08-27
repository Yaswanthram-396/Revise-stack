import React from "react";
import "./testCard.css";

function Testcard({ data, dataDelet }) {
  const { id, title, body } = data;

  const handleDelete = () => {
    dataDelet(id);
  };

  return (
    <article className="story-card">
      <div className="card-topline">
        <span className="card-tag">Post #{id}</span>
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button type="button" className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </article>
  );
}

export default Testcard;
