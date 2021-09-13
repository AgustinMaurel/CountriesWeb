import style from './Footer.module.css';
import { Link } from "react-router-dom";


export default function Footer(){
    return <div className={style.containerFoot}>

       <h3 className={style.containerAbout}><Link className={style.about} to ='/about'>About us</Link></h3>
       
    </div>
}