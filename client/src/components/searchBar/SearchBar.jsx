import { useState } from "react"
import { useDispatch } from "react-redux"
import { getName } from "../../actions/index"
import { useEffect } from "react"
import style from './SearchBar.module.css'


export default function SearchBar() {
    const dispatch = useDispatch()

    useEffect(() => {
        return () => dispatch(getName(""))
    }, [dispatch])



    const [name, setName] = useState("")

    function handleChange(e) {
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getName(name))
        setName("")
    }
    
    return (
        <div className={style.containerSearch}>
            <form onSubmit={handleSubmit}>
                <input className={style.searchInput} type="search" value={name} name="countryName" onChange={handleChange} placeholder="  Search..." />
                <button className={style.searchBtn} type="submit"  > Search </button>
            </form>
        </div>
    )
}