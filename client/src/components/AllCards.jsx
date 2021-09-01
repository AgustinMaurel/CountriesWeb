import { useSelector } from "react-redux"
import CountryCard from "./CountryCard"


export default function AllCards(){
const countries = useSelector(state=>state.countries)

    return <div>
        <ul>
            {countries?.map((e)=>{
                return <CountryCard
                id={e.id}
                key={e.id}
                name = {e.name}
                image= {e.image}
                continent={e.continent}
                />
            })}
        </ul>
    </div>
}