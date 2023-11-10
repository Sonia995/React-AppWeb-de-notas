import React, { useState } from "react";
import Heading from "./header.jsx";
import Note from "./note.jsx";
import Footer from "./footer.jsx";
import AddNote from "./form.jsx";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 0,
      text: "Et harum quidem rerum facilis est et expedita distinctio",
    },
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ]);

  function sendNote(inputText) {
    if (inputText.text === "") {
      return null;
    }
    setNotes((prevValue) => {
      return [inputText, ...prevValue];
    });
  }

  function deleteNote(id) {
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Heading />
      <div>
        <AddNote onAdd={sendNote} />
      </div>

      <div className="container">
        {notes.map((noteElm, index) => (
          <Note
            key={index}
            id={index}
            text={noteElm.text}
            onChecked={deleteNote}
          />
        ))}
        ;
      </div>
      <Footer />
    </>
  );
}

export default App;
