import React,{useState} from 'react'

export default function EX7() {
    const[city,setCity] = useState("");
    const cities = ["Hà Nội","Thanh Hóa"];
    const handleChange =(e)=>{
        setCity(e.target.value);
    }
  return (
    <div>
        <label htmlFor="">
            Thành phố: {""}
            <select value={city} onChange={handleChange}>
                <option value="">--Chọn thành phố--</option>
                {cities.map((c,index) =>(
                    <option key={index} value={c}>{c}</option>
                ))}
            </select>
        </label>
    </div>
  )
}
