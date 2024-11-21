
import { useState } from 'react'
import './App.css'

type Note = {
  id: number,
  title: string,
  content: string
}
const App = () => {
  const [selectedNote, setSelectedNote] = useState<boolean>(false)
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "test note 1",
      content: "bla bla note1",
    },
    {
      id: 2,
      title: "test note 2 ",
      content: "bla bla note2",
    },
    {
      id: 3,
      title: "test note 3",
      content: "bla bla note3",
    },
    {
      id: 4,
      title: "test note 4 ",
      content: "bla bla note4",
    },
    {
      id: 5,
      title: "test note 5",
      content: "bla bla note5",
    },
    {
      id: 6,
      title: "test note 6",
      content: "bla bla note6",
    },
  ])

  const handleAddNote = (event: React.FormEvent) => {
    event.preventDefault()
    const newNote = {
      id: notes.length + 1,
      title: title,
      content: content
    }
    setNotes([newNote, ...notes])
    setTitle("")
    setContent("")
  }

  const handleEdit = (id: number) => {
    const editNote = notes.find((n) => n.id === id);
    if (editNote) {
      setSelectedNote(true)
      setTitle(editNote.title);
      setContent(editNote.content);
      setEditingNoteId(id)
    }
  };

  const handleSaveEditNote = () => {
    if (editingNoteId === null) return;
    const correctionNotes = notes.map((corr) =>
      corr.id === editingNoteId ? { ...corr, title: title, content: content } : corr
    )
    setNotes(correctionNotes);
    setSelectedNote(false);
    setEditingNoteId(null);
    setTitle("");
    setContent("");
  }

  const handleCancel = () => {
    setContent("")
    setSelectedNote(false)
    setEditingNoteId(null)
    setTitle("")

  }




  return (
    <div className="app-container">
      <form className="note-form" onSubmit={(event) => handleAddNote(event)}>
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="title" required />
        <textarea placeholder="Content" value={content} onChange={(event) => setContent(event.target.value)} rows={10} required></textarea>
        {selectedNote ? <div>
          <button onClick={() => handleSaveEditNote()}>save</button>
          <button onClick={handleCancel}>cancel</button>
        </div> :
          <button type="submit">Add Note</button>
        }
      </form>

      <div className="notes-grid">
        {notes.map((note, id) => (

          <div key={id} className="note-item" onClick={() => handleEdit(note.id)}>
            <div className="notes-header">
              <button>x</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App