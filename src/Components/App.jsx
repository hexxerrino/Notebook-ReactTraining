import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteForm from "./NoteForm";

function App() {

    const [noteArr, setNoteArr] = useState([]);

    function handleClick(title, content) {
        setNoteArr((prev) => {
            return [...prev, {title: title, content: content}];
        })
    }

    function handleDelete(id) {
        setNoteArr((prev) => {
            return prev.filter((item, index) => {
              return index !== id;
            });
          });
    }

    return (
        <div>
            <Header /> 
            <NoteForm handleClick={handleClick} />
            <Footer />
            {noteArr.map((note, index) => <Note id ={index} deleteFunc={handleDelete} title={note.title} content={note.content} />)}
        </div>
    )
}

export default App;