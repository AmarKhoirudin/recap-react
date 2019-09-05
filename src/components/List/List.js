import React from "react";
import "./List.css";
const List = ({ nomor, email, password }) => {
  return (
    <div className="card">
      <p>
        {nomor}.{email} - {password}
      </p>
    </div>
  );
};

export default List;
