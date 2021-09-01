import { useState } from "react"
import axios from "axios"
import { ACTIVITIE_POST } from "../utils/constants"



export default function CreateActivitie() {
    const [activitie, setActivitie] = useState({
        name: "",
        dificult: "",
        duration: "",
        season: "",
        nameCountry: [],
    })
    function handleChange(e) {
        setActivitie(values => ({
            ...values,
            [e.target.name]: e.target.value

        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(ACTIVITIE_POST, activitie)
    }

    return (
        <div>
        <br />
        <form onSubmit={handleSubmit}>
            <label> Name </label>
            <input value={activitie.name} name='name' onChange={handleChange} />
            <label> Dificult </label>
            <input value={activitie.dificult} name='dificult' onChange={handleChange} />
            <label> Duration </label>
            <input value={activitie.duration} name='duration' onChange={handleChange} />
            <label > Seasons: </label>
            <select value={activitie.season} name='season' onChange={handleChange}>
                <option>Autumn</option>
                <option>Winter</option>
                <option>Spring</option>
                <option>Summer</option>
            </select>
            <label > Countries to add: </label>
            <input value={activitie.nameCountry} name='nameCountry' onChange={handleChange} />

            <button type="submit">  Add</button>
        </form>
    </div>)
}