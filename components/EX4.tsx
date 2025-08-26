import React,{useState} from 'react'

export default function EX4() {
    const [hidden,setHidden] = useState(false);
    const handleToglle =() =>{
        setHidden(!hidden);
    }
  return (
    <div>
        {hidden && <h2>Tiêu đề văn bản</h2>}
        <button onClick={handleToglle}>{hidden?"Ẩn" :"Hiện"}</button>
    </div>
  )
}
