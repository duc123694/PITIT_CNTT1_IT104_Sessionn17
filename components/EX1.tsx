import React,{useState} from 'react'
interface Name {
    name:string
}
export default function EX1() {
    const [user,setUser] = useState<Name> ({name:"Le Tien Duc"});

  return (
    <div>
        <h2>Name:{user.name}</h2>
    </div>
  )
}
