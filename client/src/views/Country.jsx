import Navbar from "../components/navbar/Navbar";
import CountryDetail from "../components/countryDetail/CountryDetail";
import Footer from "../components/footer/Footer";
import style from './Country.module.css'

export default function Country () {
    return (
        <div className={style.container}>
            <Navbar/>
            <CountryDetail/>
            <Footer/>
        </div>
    )
}