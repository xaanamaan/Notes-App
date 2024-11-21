import { useState } from "react"

interface TitleBar {
    title: string,
    onTitleChange: (newTitle: string) => void
}


const Title_Bar: React.FC<TitleBar> = ({ title, onTitleChange }) => {

    
    return (
        <div className="div">
            <input type="text" value={title} placeholder="Title" onChange={(e)=>onTitleChange(e.target.value)} />

        </div>
    )
}

export default Title_Bar


