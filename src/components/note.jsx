import React, { useState } from "react";
import BackspaceTwoToneIcon from "@mui/icons-material/BackspaceTwoTone";


function CreateNote(props) {
  const [isDone, setIsDone] = useState(false);

  function tachar() {
    setIsDone((prevValue) => {
      return !prevValue; //Tambien lo podriamos hacer con un if/else
    });
  }

  return (
    <div className="nota">
      <button
        onClick={() => {
          props.onChecked(props.id);
          console.log(props);
        }}
      >
        <BackspaceTwoToneIcon />
      </button>
      <p
        onClick={tachar}
        style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {props.text}
      </p>
    </div>
  );
}

export default CreateNote;
