import style from './Pagination.module.css'


export default function Pagination({currentPage, countriesPage, countries, pagination, minPageNumber, maxPageNumber, handleNext, handlePrev}) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(countries / countriesPage); i++) {
        pageNumbers.push(i)
    }

    const renderPage = pageNumbers.map((number) => {
        if (number < maxPageNumber + 1 && number > minPageNumber) {
            return (
                <li 
                    className={currentPage === number ? style.active : null}
                    key={number}
                    onClick={()=>pagination(number)}>
                    {number}
                   
                </li>
            )
        } else {
            return null;
        }
    })

    return (
        <nav className={style.container} >
            <ul className={style.containerPag}>
                <li><button className={style.btn} disabled={currentPage === pageNumbers[0] ? true : false} onClick={handlePrev}>Prev</button></li>
                {renderPage}
                <li><button className={style.btn} disabled={currentPage === pageNumbers[pageNumbers.length -1] ? true : false} onClick={handleNext}>Next</button></li>
            </ul>
        </nav>
    )
}
