import Navbar from '../components/navbar/Navbar'
import Allcards from '../components/allCards/AllCards'
import Footer from '../components/footer/Footer'
import SearchBar from '../components/searchBar/SearchBar'
import style from './Home.module.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCountries } from '../actions/index'

export default function Home(){

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])
    
    return (
        <div className={style.container2}>
            <Navbar/>
            <div className={style.divContent}>
            <SearchBar/>
            <Allcards/>
            <Footer/>
            </div>
            </div>
        
        
    )
}