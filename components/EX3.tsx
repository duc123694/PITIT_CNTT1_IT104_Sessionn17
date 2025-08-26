import React,{useState} from 'react'

export default function EX3() {
    const [color,setColor] = useState("black");
    const handleChange = () => {
        setColor(prevColor => (prevColor === "black" ?"red" :"black"));
    }
  return (
    <div>
        <h3 style={{color:color}}>Tiêu đề văn bản</h3>
        <button onClick={handleChange}>Đổi màu</button>
    </div>
  )
}
