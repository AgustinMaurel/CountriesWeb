import { Link } from "react-router-dom";
import style from './Landing.module.css'

export default function LandingPage(){
    
    return <div className={style.container}>

        <div className={style.containerTitles}>
        <h1 className={style.title}>CountriesWeb</h1>
        <h2 className={style.subtitle}>Adventure begins</h2>
        <span ><Link className={style.btn} to='/home'>Go Home!</Link></span>
        
        </div>
       

    </div>
}