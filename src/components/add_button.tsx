interface AddButtonProps {
    onClick: () => void;
  }
  
  const Add_Button: React.FC<AddButtonProps> = ({ onClick }) => {
    return (
      <div>
        <button onClick={onClick}>Add Note</button>
      </div>
    );
  };
  
  export default Add_Button;
  