import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getActivities, getCountries, getFilter, getFilterAct, orderAlph } from "../../actions/index"
import style from './Filter.module.css'
import { FaSortAlphaDownAlt, FaPlay } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BiWorld } from "react-icons/bi";

export default function Filters({ setCurrentPage, setOrder }) {

    const activitiesGet = useSelector(state => state.activities)
    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(getActivities())
        dispatch(getCountries())
    }, [dispatch])

    function handleContinent(e) {
        e.preventDefault()
        dispatch(getFilter(e.target.value))
        setCurrentPage(1)
    }

    function handleActivities(e) {
        e.preventDefault()
        dispatch(getFilterAct(e.target.value))
        setCurrentPage(1)

    }

    function handleOrder(e) {
        e.preventDefault()
        dispatch(orderAlph(e.target.value))
        setCurrentPage(1)
        setOrder(e.target.value)
    }

    function handleOrderPop(e){
        e.preventDefault()
        dispatch(orderAlph(e.target.value))
        setCurrentPage(1)
        setOrder(e.target.value)
    }



    let options = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Polar']

    return (

        <div className={style.containerFilter}>
            <div className={style.contContinent}>
            <span><BiWorld/></span>
            <select className={style.select} name="continent" onChange={(e) => handleContinent(e)}>
                {options.map(e => {
                    return <option key={e} value={e}>{e === 'All' ? 'All' : e}</option>
                })}
            </select>
            </div>
            <div className={style.contActivitie}>
            <span><FaPlay/></span>
            <select className={style.select} name="activities" onChange={handleActivities}>
            <option value="All">All</option>
                {activitiesGet.map(e => {
                    return <option key={e.name} value={e.name}>{e.name}</option>
                })}
            </select>
            </div>
            <div className={style.contOrdAlph}>
            <span><FaSortAlphaDownAlt/></span>
            <select className={style.select} onChange={handleOrder} >
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
            </div>
            <div className={style.contOrdPop}>
            <span> <IoIosPeople/> </span>
            <select className={style.select} onChange={handleOrderPop}>
                <option value="All">All</option>
                <option value="pop+">Order-pop +</option>
                <option value="pop-">Order-pop -</option>
            </select>
            </div>
        </div>
    )
}