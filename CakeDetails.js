import axios from 'axios'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate} from 'react-router-dom'

export default function CakeDetails(){
    const navigate=useNavigate()
   const data=useSelector(s=>s)
   const d=useDispatch()
    useEffect(()=>{
        axios.get('https://apiashu.herokuapp.com/api/allcakes').then(e=>{
        d({type:'get',value:e.data.data})
 }).catch(e=>console.log(e))
    },[])
    return <>
     <button onClick={()=>navigate('/')}>
   Back
  </button>
    <ul className='row container'>{data.reducer1}</ul></>
}