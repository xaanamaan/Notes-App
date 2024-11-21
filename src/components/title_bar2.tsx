import { ReactHTMLElement } from "react"

interface Title {
    title: string
    updateChange: (text: string) => void

}
const TitleBar2: React.FC<Title> = ({ title, updateChange }) => {

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        updateChange(event.target.value)

    }
    return (
        <div className="div">
            <input type="text" value={title} onChange={handleChange} />
        </div>
    )
}

export default TitleBar2