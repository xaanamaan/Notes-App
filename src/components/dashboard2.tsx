import { useState } from "react"
import TextContenent2 from "./text_contenent2"
import TitleBar2 from "./title_bar2"
import AddButton2 from "./add_button2"


interface Notes {
    id: number,
    title: string,
    content: string
}

const Dashboard2: React.FC = () => {

    const [notes, setNotes] = useState<Notes[]>([
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
    ]);

    const updateChange = (id: number, newNotes: string) => {
        notes.map((ele) => ele.id === id ? {...notes,title : newNotes}: ele)

    }

    const handleClick = () => {
        console.log("on click ")
    }
    return (
        <div>
            {notes.map((notes) => (
                <div className="div" key={notes.id}>
                    <TitleBar2 title={notes.title} updateChange={()=>} />
                    <TextContenent2 content={notes.content} />
                    <AddButton2 handleClick={handleClick} />
                </div>
            ))}
        </div>
    )
}

export default Dashboard2