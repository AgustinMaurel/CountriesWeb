import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CreateActivitie from './components/CreateActivitie';
import AllCards from './components/AllCards'
import LandingPage from './components/LandingPage';
import { Route, Switch } from 'react-router-dom'
import Filters from './components/Filters';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path='/home'>
          <Navbar />
          <Filters/>
          <AllCards />
          <Footer />
        </Route>
        <Route exact path='/CountryDetail/:id'>
          <Navbar />
          <CountryDetail/>
          <Footer />
        </Route>
        <Route exact path='/Activitie'>
          <Navbar />
          <CreateActivitie />
          <Footer />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
