import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import axios from "axios"
export default function FullDetails(){
 const [data,setData]=useState()
 const [text,setText]=useState('Add to cart')
    const location=useLocation()
        const {id}=location.state
        axios.get(`https://apiashu.herokuapp.com/api/cake/${id}`).then(e=>{
        setData(<div className="container">
         <div>
          <img src={e.data.data.image} alt="No Image avaliable"/>
         </div>
         <span>
          <p>{e.data.data.name}</p>
          <p>{e.data.data.price}</p>
          <button className='btn-primary' onClick={()=>{
   axios.post('https://apiashu.herokuapp.com/api/addtocart',{
    headers:{
      Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyZ2hhZGVlcC5kZXlAYWNjZW50dXJlLmNvbSIsImlhdCI6MTY3MzM0Mzk5MX0.C1EU5CHLzBCz89dfG7vjYdfSNQEI6Mxeduqvgo3LYB8"
},
    name:e.data.data.name,
    price:e.data.data.price,
    image:e.data.data.image,
    width:e.data.data.width,
    cakeid:e.data.data.cakeid
   }).then(e=>{
     setText('Added')
     console.log(e)
   }).catch(e=>{console.log(e)})
          }}>{text}</button>
          <Link to="/cakeDetails"/>
         </span>
        </div>)
 }).catch(e=>console.log(e))
    
    return <>
    {data!==undefined?data:<h1 className="container">Your cake details loading...</h1>}
    </>
}





