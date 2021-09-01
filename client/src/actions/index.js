import axios from 'axios'

import { COUNTRIES_URL } from "../utils/constants"
import { GET_COUNTRIES } from "./types"


export function getCountries() {
    return (dispatch) => {
        axios.get(COUNTRIES_URL)
            .then((response) => {
                dispatch({ type: GET_COUNTRIES, payload: response.data })
            })
            .catch(e => console.log(e));
    }
}