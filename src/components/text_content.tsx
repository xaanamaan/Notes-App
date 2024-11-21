interface TextContentProps {
    content: string;
  }
  
  const Text_Content: React.FC<TextContentProps> = ({ content }) => {
    return (
      <div>
        <textarea defaultValue={content} rows={5} cols={30} />
      </div>
    );
  };
  
  export default Text_Content;
  