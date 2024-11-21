
interface Content {
    content: string
}

const TextContenent2: React.FC<Content> = ({ content }) => {
    return (
        <div className="div">
            <textarea defaultValue={content} rows={5} cols={30}></textarea>
        </div>
    )

}

export default TextContenent2