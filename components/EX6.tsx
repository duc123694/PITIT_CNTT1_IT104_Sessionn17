import React,{useState} from 'react'

export default function EX6() {
    const [text,setText] = useState("Nguyen Van A");
    const handleChange = () => {
        setText (e.target.value);
    }
  return (
    <div>
        <input type="text" value={text} onChange={handleChange} />
        <h3>Độ dài là: {text.length}</h3>
    </div>
  )
}
