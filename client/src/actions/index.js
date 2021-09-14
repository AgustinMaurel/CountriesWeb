import axios from 'axios'
import { COUNTRIES_URL, COUNTRIES_NAME, ACTIVITIE_URL } from "../utils/constants"
import { ORDER_ALPH, GET_COUNTRIES, GET_NAME, GET_FILTERCONT, GET_ACTIVITIES, GET_FILTERACT } from "./types"


export function getCountries() {
    return (dispatch) => {
        axios.get(COUNTRIES_URL)
            .then((response) => {
                dispatch({ type: GET_COUNTRIES, payload: response.data })
            })
            .catch(e => console.log(e));
    }
}

export function getName(name) {
    return (dispatch) => {
        axios.get(COUNTRIES_NAME + name)
            .then((response) => {
                dispatch({ type: GET_NAME, payload: response.data })
            })
            .catch(e => console.log(e))
    }

}


export function getFilter(filter) {
     return  {
          type: GET_FILTERCONT , payload: filter
    }
}

export function getFilterAct(payload) {
     return  {
         type: GET_FILTERACT , payload: payload
   }
}

export function getActivities(){
    return (dispatch) => {
        axios.get(ACTIVITIE_URL)
            .then((response) => {
                dispatch({ type: GET_ACTIVITIES, payload: response.data })
            })
            .catch(e => console.log(e))
    }
}

export function orderAlph(payload){
    return {
        type: ORDER_ALPH,
        payload
    }
}

