import { Link } from "react-router-dom"


export default function CountryCard({name, continent, image, id}){
    return <div>
        <Link to={`/countryDetail/${id}`}>
        <label>{name}</label>
        </Link>
        <label>{continent}</label>
        <img src={image} alt="Not Found" />
    </div>
}