import React, { useState } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Zoom from "@mui/material/Zoom";

function AddNote(props) {
  const [note, setNote] = useState({
    id: "",
    text: "",
  });

  function handleChange(event) {
    const inputElem = event.target.name;
    const newValue = event.target.value;
    // const {inputElem, newValue} = event.target;

    setNote(() => {
      if (inputElem === "text") {
        return {
          id: "",
          text: newValue,
        };
      }
    });
  }

  //Esto es una forma de manejar el hover del boton
  const [isOver, setOver] = useState(false);
  function changeColor() {
    setOver(true);
  }
  function backToColor() {
    setOver(false);
  }

  return (
    <div>
      <Zoom in={true}>
        <form action="" method="" className="formNote">
          <label htmlFor="textNote">¿Que hacemos hoy?</label>

          <textarea
            onChange={handleChange}
            type="text"
            id="textNote"
            name="text"
            placeholder="Escribe algo..."
            value={note.text}
            rows="2"
            required
          ></textarea>

          <button
            onClick={() => {
              props.onAdd(note);
              setNote({ text: "" });
            }}
            onMouseOver={changeColor}
            onMouseOut={backToColor}
            style={{ color: isOver ? "#8f26a1" : null }}
            type="submit"
            className="addButton"
          >
            <AddCircleRoundedIcon style={{ fontSize: "4em" }} />
          </button>
        </form>
      </Zoom>
    </div>
  );
}

export default AddNote;
