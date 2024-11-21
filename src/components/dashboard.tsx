import { useState } from "react";
import Add_Button from "./add_button";
import Text_Content from "./text_content";
import Title_Bar from "./title-bar";

interface Note {
  id: number;
  title: string;
  content: string;
}

const Dashboard: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Test Note 1",
      content: "Content of note 1",
    },
    {
      id: 2,
      title: "Test Note 2",
      content: "Content of note 2",
    },
    {
      id: 3,
      title: "Test Note 3",
      content: "Content of note 3",
    },
  ]);

  const addNote = () => {
    const newNote: Note = {
      id: notes.length + 1,
      title: "",
      content: "Content of new note",
    };
    setNotes([...notes, newNote]);
  };

  const updateTitle = (id: number, newTitle: string) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, title: newTitle } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <Title_Bar
            title={note.title}
            onTitleChange={(newTitle) => updateTitle(note.id, newTitle)}
          />
          <Text_Content content={note.content} />
        </div>
      ))}
      <Add_Button onClick={addNote} />
    </div> 
  );
};

export default Dashboard;



