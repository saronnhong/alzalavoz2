import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function EditBtn(props) {
  return (
    <span className="edit-btn" {...props} role="button" tabIndex="0">
      <i class="far fa-edit"></i>
    </span>
  );
}

export default EditBtn;
