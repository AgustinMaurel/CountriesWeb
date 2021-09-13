import { Link } from "react-router-dom"
import style from './CountryCard.module.css'

export default function CountryCard({name, continent, image, id, activities}){
    return <div className={style.card} key={id}>
        <Link  className={style.countryLink} to={`/countryDetail/${id}`}>
        <label className={style.countryName} >{name} </label>
        </Link>
        <label> /{continent}</label>
        {activities ? <label>Activities</label> && activities?.map(e=>{
            return <span key={e.name}>{e.name}</span>
        }): false}
        <div>
        <img className={style.img} src={image} alt="Not Found" />
        </div>
    </div>
}