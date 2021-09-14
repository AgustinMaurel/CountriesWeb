import './App.css';
import Landing from './views/Landing';
import { Route, Switch } from 'react-router-dom'
import Country from './views/Country'
import Activitie from './views/Activitie'
import Home from './views/Home'
import About from './components/about/About';

function App() {
  
  
  return (
    <div className="App">
    
        <Route exact path='/' component={Landing}/>

        <Route exact path='/about' component={About}/>

        <Route path='/home' component={Home}/>
         
        <Route exact path='/CountryDetail/:id' component={Country}/>
         
        <Route exact path='/Activitie' component={Activitie}/>
        
      
    </div>
  );
}

export default App;
