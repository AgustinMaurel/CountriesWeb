import { useSelector } from "react-redux"
import CountryCard from "../countrycard/CountryCard"
import style from "./AllCards.module.css"
import Pagination from "../pagination/Pagination"
import Filters from "../filters/Filter"
import { useState } from "react"

export default function AllCards() {
    
    const countriesFiltered = useSelector(state => state.countriesFilter)

    const [order, setOrder]=useState("")

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPage, setCountriesPage] = useState(9)

    const [pageLimit, setPageLimit] = useState(5)
    const [maxPageNumber, setMaxPageNumber] = useState(5)
    const [minPageNumber, setMinPageNumber] = useState(0)

    const lastCountry = currentPage * countriesPage // 9 
    const firstCountry = lastCountry - countriesPage //0
    const currentCountries = countriesFiltered?.slice(firstCountry, lastCountry)

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const handleNext =()=>{
        setCurrentPage(currentPage+1)
        if(currentPage +1 > maxPageNumber){
            setMaxPageNumber(maxPageNumber + pageLimit)
            setMinPageNumber(minPageNumber + pageLimit)
        }
    }
    
    const handlePrev =()=>{
        setCurrentPage(currentPage-1)
        
        if((currentPage -1 )%pageLimit===0){
            setMaxPageNumber(maxPageNumber - pageLimit)
            setMinPageNumber(minPageNumber - pageLimit) 
        }
    }

    return <div >
        <Filters setCurrentPage={setCurrentPage} setOrder={setOrder} order={order}/>
    
        <div className={style.cardsContainer}>
        <ul className={style.containGallery}>
            {currentCountries.length > 0 ? currentCountries?.map((e) => {
                return <CountryCard
                    id={e.id}
                    key={e.id}
                    name={e.name}
                    image={e.image}
                    continent={e.continent}
                />
            }): 
                <span className={style.notFound}>No countries found</span>
            }
        </ul>
        </div>
        <Pagination
            setPageLimit={setPageLimit}
            countriesPage={countriesPage}
            countries={countriesFiltered.length}
            pagination={pagination}
            maxPageNumber={maxPageNumber}
            minPageNumber={minPageNumber}
            handleNext={handleNext}
            handlePrev={handlePrev}
            currentPage={currentPage}
            setCountriesPage={setCountriesPage}
        />
    </div>
}