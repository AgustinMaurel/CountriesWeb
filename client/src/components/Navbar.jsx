import { Link } from "react-router-dom"



export default function Navbar(){
   
    return (
    <div>
        <h1>Earth</h1>
        <Link to='/Home'>Home </Link>
        <Link to='/Activitie'> Create Activitie </Link>
        <br />
        
    </div>)
}