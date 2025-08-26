import React,{useState} from 'react'

export default function EX5() {
    const [title,setTitle] = useState("Đang nhập tiêu đề")
    const handleTitle = () => {
        setTitle (e.target.value);
    }
  return (
    <div>
        <input type="text" value={title} onChange={handleTitle} />
        <h4>{title}</h4>
    </div>
  )
}
