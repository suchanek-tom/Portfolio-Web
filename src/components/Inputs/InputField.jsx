import React from "react";

const InputField = (props) => {
    const { handleChange, label, name, type, value, placeholder } = props;
    return (
      <div className="mb-5">
        <label className="text-white text-lg" htmlFor={name}>{label}</label>
        <input className="w-full border-b-2 outline-none p-1 rounded-md" 
               type={type} onChange={handleChange} 
               value={value} 
               name={name} 
               placeholder={placeholder} 
               required />
      </div>
    )
  }
  
  export default InputField