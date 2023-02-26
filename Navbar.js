import {Link} from 'react-router-dom'
export default function Navbar({signup,login,Cake_Details}){
    return <nav className="navbar navbar-expand-lg bg-body-tertiary container" data-bs-theme="dark" style={{backgroundColor:"GrayText"}}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/signup">{signup}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">{login}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cakeDetails">{Cake_Details}</Link>
          </li>
        </ul>
 </nav>
}