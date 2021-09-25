import { ORDER, GET_COUNTRIES, GET_FILTERCONT, GET_NAME, GET_ACTIVITIES, GET_FILTERACT } from "../actions/types";
import { filterActivities, sortAreaDown, sortAreaUp, sortAlphZA, sortAlphAZ } from "../utils/functions";

const initialState = {
    countries: [],
    countriesFilter: [],
    activities: []

}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                countriesFilter: action.payload,
            }
        case GET_NAME:
            return {
                ...state,
                countriesFilter: action.payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        case GET_FILTERCONT:
            let auxCont = state.countries
            return {
                ...state,
                countriesFilter: action.payload === 'All' ? auxCont : auxCont.filter(e => e.continent === action.payload)
            }
        case GET_FILTERACT:
            let auxAct = state.countries
            return {
                ...state,
                countriesFilter: action.payload === 'All'? auxAct : auxAct.filter(e => e.activities.length > 0).filter(e => filterActivities(e.activities, action.payload))
            }
        case ORDER:
            let optionSort =
                action.payload === 'A-Z' ? sortAlphAZ(state.countriesFilter)
                    : action.payload === 'Z-A' ? sortAlphZA(state.countriesFilter)
                        : action.payload === 'area+' ? sortAreaUp(state.countriesFilter)
                            : action.payload === 'area-' ? sortAreaDown(state.countriesFilter)
                                : action.payload === 'All' ? state.countriesFilter
                                    : state.countries
            return {
                ...state,
                countriesFilter: optionSort
            }



        default: return state;
    }
}



 /*    switch (action.payload){
                        case "A-Z" : 
                        return {
                            ...state,
                            countriesFilter: sortAlphAZ(auxOrder)
                        }
                        case "Z-A" :
                            return{
                                ...state,
                                countriesFilter: sortAlphZA(auxOrder)
                            }
                        case  "pop+" : 
                        return {
                            ...state,
                            countriesFilter: sortPopUp(auxOrder)
                        }
                        case  "pop-" : 
                        return {
                            ...state,
                            countriesFilter: sortPopDown(auxOrder)
                        }        
                    } */