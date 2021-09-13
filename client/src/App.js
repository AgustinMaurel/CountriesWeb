import './App.css';
import Landing from './views/Landing';
import { Route, Switch } from 'react-router-dom'
import Country from './views/Country'
import Activitie from './views/Activitie'
import Home from './views/Home'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCountries } from './actions/index'


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getCountries())
  },[dispatch])
  
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing}/>

        <Route path='/home' component={Home}/>
         
        <Route exact path='/CountryDetail/:id' component={Country}/>
         
        <Route exact path='/Activitie' component={Activitie}/>
        
      </Switch>
    </div>
  );
}

export default App;
