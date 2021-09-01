import axios from "axios"
import { useState } from "react"
import { COUNTRIES_URL } from "../utils/constants"
import CountryCard from "./CountryCard"


export default function Filters() {
    const [state, setState] = useState({
        countryName: "",
        name: "",
        image: "",
        continent: "",
        id:"",
    })

    function handleChange(e) {
        setState(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await axios.get(`${COUNTRIES_URL}?name=${state.countryName}`)
            .then((result) => {
                setState((values) => ({
                    ...values,
                    name: result.data.name,
                    image: result.data.image,
                    continent: result.data.continent,
                    id: result.data.id
                })
                )
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>  Country : </label>
                <br />
                <input value={state.countryName} name="countryName" onChange={handleChange} />
                <button type="submit" >Search</button>
            </form>
            {state.name ? 
            <div><CountryCard
             name={state.name} image={state.image} continent={state.continent} id={state.id}  /></div>
              : state.name!=="" ? <span>No se encuentra lo que buscaste</span>
            : false}

        </div>
    )
}