import axios from "axios"
import {useNavigate} from "react-router-dom"
export default function Signup({details,setDeatails}){
   const navigate=useNavigate()
   return  <form onSubmit={(e)=>e.preventDefault()}>
      <div className="form-group">
    <label htmlFor="name">Name</label>
    <input className="form-control form-control-sm" id="name" type="text" placeholder="Enter name" aria-label=".form-control-sm example"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <button type="submit" className="btn btn-primary mt-2" onClick={()=>{
    axios.post('https://apiashu.herokuapp.com/api/register',{
      name:document.getElementById("name").value,
      email:document.getElementById("exampleInputEmail1").value,
      password:document.getElementById("exampleInputPassword1").value
    }).then((e)=>{
      if(e.data.message==="User Already Exists"){
        alert('User Already Exists')
        navigate('/login')
      }
      else{
        alert('check your email for verification')
          navigate('/login')
      }
       
    }).catch((e)=>{console.log(e)})
    setDeatails([...details,{name:document.getElementById("name").value,email:document.getElementById("exampleInputEmail1").value,password:document.getElementById("exampleInputPassword1").value}])
  }}>Submit</button>
  <button className="btn-primary" onClick={()=>navigate('/')}>
    Back
  </button>
</form>
    
}