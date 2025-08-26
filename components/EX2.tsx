import React ,{useState}from 'react'
interface Product {
    id:number;
    name:string;
    price:number;
    quantity:number;
}
export default function EX2() {
    const[user,setUser] = useState<Product> ({id:1,name:"Coca Cola",price:1000,quantity:10})
  return (
    <div>
        <h3>THông tin sản phẩm</h3>
        <p>id:{user.id}</p>
        <p>name:{user.name}</p>
        <p>price:{user.price}</p>
        <p>quantity:{user.quantity}</p>
    </div>
  )
}
