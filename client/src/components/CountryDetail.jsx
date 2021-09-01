import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { COUNTRIES_URL } from "../utils/constants";


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
    activities:"",

})
useEffect(()=>{
    axios.get(COUNTRIES_URL+id)
.then((res)=>{
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
        activities: res.data.activities.map(e=>e.name )   
    }))
  
})
},[id])

return (
    <div>
        <h1>{detail.name}</h1>
        <span>Capital : {detail.capital}</span>
        <h2>Continent : {detail.continent}</h2>
        <span>{detail.subRegion}</span>
        <br />
        <span>Area: {detail.area}km² </span>
        <br />
        <span>Population: {detail.population}</span>
        <br />
        <span>{detail.activities}</span>
        <img src={detail.image} alt="hola" />
        <br />
        <span> Acronym: {detail.alphaCode}</span>
    </div>
)

}