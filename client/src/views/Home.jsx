// renderizar navbar filtros all cards y footer
import Navbar from '../components/navbar/Navbar'
import Allcards from '../components/allCards/AllCards'
import Footer from '../components/footer/Footer'
import SearchBar from '../components/searchBar/SearchBar'
import style from './Home.module.css'

export default function Home(){
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