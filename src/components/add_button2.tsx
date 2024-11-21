
interface Button {
    handleClick: () => void
}

const AddButton2: React.FC<Button> = ({ handleClick }) => {

    return (
        <div>
            <button onClick={handleClick}>Add Notes</button>
        </div>
    )
}

export default AddButton2