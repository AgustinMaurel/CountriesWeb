import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getCountries } from "../actions";
import { Link } from "react-router-dom";



export default function LandingPage(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])
    return <div>
        <Link to='/home'>Home</Link>
        Soy la LandingPage
    </div>
}