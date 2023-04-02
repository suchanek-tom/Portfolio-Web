
const TextareaField = (props) => {
    const { handleChange, label, name, value } = props;
    return (
      <div>
        <label className=" text-white text-lg" htmlFor={name}>{label}</label>
        <textarea 
            onChange={handleChange} 
            name={name} 
            rows="4" 
            className="w-full border-b-2 outline-none p-1 rounded-md" 
            value={value} 
            required
        ></textarea>
      </div>
    )
  }
  
  export default TextareaField