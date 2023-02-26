import axios from "axios"
import {useNavigate } from "react-router-dom"
export default function Login(){

  const navigate=useNavigate()
    return <>
    <form className="container" onSubmit={e=>e.preventDefault()}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <button type="submit" className="btn btn-primary"
    onClick={()=>{
      axios.post('https://apiashu.herokuapp.com/api/login',{
        email:document.getElementById('exampleInputEmail1').value,
        password:document.getElementById('exampleInputPassword1').value
      }).then(e=>
        {
          if(e.data.message==='Invalid Credentials')
           alert('Invalid credentials')
           else
           {
            console.log(e)
             navigate('/cakeDetails')
           }
        }
        ).catch(e=>console.log(e))
      
    }}
    >Submit</button>
  </form>

  <button onClick={()=>navigate('/')}>
   Back
  </button>
 </>
}