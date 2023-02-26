import { Link } from "react-router-dom";
import { createStore,combineReducers } from "redux";
const reducer1=(s=<h1>Your dara is processing...</h1>,a)=>{
    switch(a.type){
        case 'get':const data=(a.value).map(a=>{
            return <li key={a.cakeid} style={{listStyle:"none"}} className="col-xl-4  mt-5">
              <Link to="/fullDetails" style={{backgroundColor:"bisque"}} state={{id:a.cakeid}}>
              <div className="card" style={{width: "18rem"}}>
            <img src={a.image} className="card-img-top" alt="img" style={{height:"16em"}}/>
            <div className="card-body">
              <h5 className="card-title">{a.name}</h5>
              <p className="card-text">${a.price}</p>
            </div>
          </div>
          </Link>
            </li>
           })
           return data
    default: 
       return s
    }
   
    
}
const store=createStore(combineReducers({reducer1}))
export default store