import { Link } from "react-router-dom"
export default function Error404(){
    return <>
    <h1 style={{textAlign:'center'}}>404!</h1>
   <button>
    <Link to='/'>Back</Link>
   </button>
    </>
}