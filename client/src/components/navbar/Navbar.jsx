import { Link } from "react-router-dom"
import style from './Navbar.module.css'


export default function Navbar(){

    return (
    <div className={style.containerNav}>
        <Link className={style.linkHome} to='/Home'> <h1 className={style.title}>CountriesWeb</h1> </Link>
        <Link className={style.home} to='/Home'> <span>Home</span> </Link>
        <Link className={style.linkCreate} to='/Activitie'> Create Activity </Link>
    
    </div>)
}