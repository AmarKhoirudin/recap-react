import React from "react";
import "../../container/Form.css"

const Input = ({ type, onChange, value, name }) => (
  <input type={type} onChange={onChange} value={value} name={name} className="inputlog" />
);

export default Input;
