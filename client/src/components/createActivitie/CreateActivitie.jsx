import { useState } from "react"
import axios from "axios"
import { ACTIVITIE_URL } from "../../utils/constants"
import { useDispatch } from "react-redux"
import { getActivities } from "../../actions"
import { useSelector } from "react-redux"
import { validate } from "../../utils/functions"
import style from './createActivitie.module.css';
import {useHistory} from 'react-router-dom'

export default function CreateActivitie() {

    const {push} = useHistory()    

    const countries = useSelector(state => state.countries)

    const dispatch = useDispatch()

    const [errors, setErrors] = useState({})

    const [activitie, setActivitie] = useState({
        name: "",
        dificult: "",
        duration: "",
        season: "",
        nameCountry: [],
        image: ""
    })

    function handleChange(e) {
        setActivitie({
            ...activitie,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...activitie,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(ACTIVITIE_URL, activitie)
            .then((res) =>{
                 dispatch(getActivities(res.data))
                 alert("Activity add succesfull")
                 setActivitie({
                    name: "",
                    dificult: 0,
                    duration: "",
                    season: "",
                    nameCountry: [],
                    image: ""
                 })
                 push('/home')
            })
           
            
    }

    function handleSelect(e) {
        setActivitie(values => ({
            ...values,
            nameCountry: [...activitie.nameCountry, e.target.value]
        }))
        setErrors(validate({
            ...activitie,
            [e.target.name]: e.target.value
        }))
    }

    function handleFilter(e) {
        let aux = e.target.value
        e.preventDefault()
        setActivitie(values => ({
            ...values,
            nameCountry: activitie.nameCountry.filter(e => e !== aux)
        }))
    }

    return (
        <div className={style.containerCreate}>
            <br />
            <div className={style.containerForm}>
                <div className={style.titleForm}>
                <h2>New Activity</h2>
                </div>
                
                <form className={style.form} onSubmit={handleSubmit}>
                    <div className={style.contain2}>
                        <div className={style.formName}>

                            <label> Name </label>
                            <input required value={activitie.name} name='name' onChange={handleChange} />
                            {errors.name && (
                                <p className={style.errors}>{errors.name}</p>)}
                        </div>
                        <div className={style.formDifi}>
                            <label> Dificult </label>
                            <label htmlFor="radio1"><input onChange={handleChange} id="radio1" type="radio" name="dificult" value="1" />★</label>
                            <input onChange={handleChange} id="radio2" type="radio" name="dificult" value="2" />
                            <label htmlFor="radio2">★</label>
                            <input onChange={handleChange} id="radio3" type="radio" name="dificult" value="3" />
                            <label htmlFor="radio3">★</label>
                            <input onChange={handleChange} id="radio4" type="radio" name="dificult" value="4" />
                            <label htmlFor="radio4">★</label>
                            <input onChange={handleChange} id="radio5" type="radio" name="dificult" value="5" />
                            <label htmlFor="radio5">★</label>
                            {errors.dificult && (
                                <p className={style.errors}>{errors.dificult}</p>
                            )}
                        </div>
                        <div className={style.formDura}>

                            <label> Duration </label>
                            <input required placeholder="hours/days" value={activitie.duration} name='duration' onChange={handleChange} />
                            {errors.duration && (
                                <p className={style.errors}>{errors.duration}</p>
                            )}
                        </div>

                        <div className={style.formSeason}>
                            <label > Seasons: </label>
                            <select required value={activitie.season} name='season' onChange={handleChange}>
                                <option>Autumn</option>
                                <option>Winter</option>
                                <option>Spring</option>
                                <option>Summer</option>
                            </select>
                            {errors.season && (
                                <p className={style.errors}>{errors.season}</p>
                            )}

                        </div>
                        <div className={style.formCountries}>
                              <div className={style.countriesAdd}>
                            <label> Countries to add: </label>
                            <select required onChange={handleSelect} name="nameCountry">
                                {countries.map(e => {
                                    return (
                                        <option key={e.name}>{e.name}</option>
                                    )
                                })}
                            </select>
                                  
                                  </div>  
                            {errors.nameCountry && (
                                <p className={style.errors}>{errors.nameCountry}</p>
                            )}
                            <div className={style.countriesSelected}>

                            <ul>
                                {activitie.nameCountry?.map((e, i) => {
                                    return (
                                        <li key={i} value={e}>{e}<button className={style.btnFilter} value={e} onClick={handleFilter}>X</button></li>
                                    )
                                })}
                            </ul>

                            </div>
                        </div>
                    </div>
                        <div className={style.contImg}>
                        <label>Image </label>
                        <input name='image' value={activitie.image} type="text" placeholder='url Image (optional)' onChange={handleChange} />
                        <div>
                            <img className={style.imgAct} src={activitie.image ? activitie.image : "not Found"} alt={activitie.image} />
                            {activitie.image.length && errors.image ? (
                                <p className={style.errors}>{errors.image}</p>): false}
                        </div>
                      </div>
                      <div className={style.containerBtn}>
                    <button disabled={(Object.values(errors).length === 1 && errors.image) || !Object.values(errors).length ? false: true} className={style.formBtn} type="submit"> Add</button>

                      </div>
                </form>
            </div>
        </div>)
}