import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { COUNTRIES_URL } from "../../utils/constants";
import ActivitieCard from "../activitieCard/ActivitieCard";
import style from './CountryDetail.module.css'

export default function CountryDetail(){
    
const { id }= useParams() 

const [detail, setDetail] = useState({
    name:"",
    image: "",
    alphaCode: id,
    continent: "",
    capital:"",
    subRegion:"",
    area:"",
    population:"",
    activities:[],

})
useEffect(()=>{
    axios.get(COUNTRIES_URL+id)
.then((res)=>{
    console.log(res)
    setDetail((values)=>({
        ...values,
        name: res.data.name,
        image: res.data.image,
        alphaCode: id,
        continent: res.data.continent,
        capital: res.data.capital,
        subRegion: res.data.subregion,
        area: res.data.area,
        population: res.data.population,
        activities: res.data.activities   
    }))
})
},[id])

return (
    <div className={style.containerAll}>
        <div className={style.containerCountry}>
        <h1 className={style.nameCountry}>{detail.name}</h1>
        <span className={style.capitalCountry}>Capital : {detail.capital}</span>
        <h2 className={style.continentCountry}>Continent : {detail.continent}</h2>
        <span className={style.subregionCountry}>Subregion : {detail.subRegion}</span>
        <br />
        <span className={style.areaCountry}>Area: {detail.area} km² </span>
        <br />
        <span className={style.popCountry}>Population: {detail.population}</span>
        <img className={style.imgCountry} src={detail.image} alt="not Found" />
        <span className={style.codeCountry}> Acronym: {detail.alphaCode}</span>
        </div>
        <div>
            
        </div>
        <div className={style.containerAllAct}>
        
        {detail.activities.length ? detail.activities.map(e=>{
            return <ActivitieCard name={e.name} key={e.id} image={e.image} dificult={e.dificult} id={e.id} season={e.season} duration={e.duration}/>
        }): <h3 className={style.noActivities}>This country has no activities</h3>}
        
        
        </div>
    </div>
)

}