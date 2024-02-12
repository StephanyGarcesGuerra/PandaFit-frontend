import './App.css';
import { Route, Routes } from "react-router-dom";
import {useEffect, useState} from "react";
import logo from "./images/pandafit.avif"
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';

import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";
import NewUserPage from './pages/NewUserPage';


function App() {

  const [theme, setTheme] = useState('light');
  const [user,setUser] = useState([]);

  const[weather,setWeather] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch ('https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&forecast_days=3')
            const data = await res.json();
            console.log(data.results);
            setWeather(data.results)
        };
        fetchData()
    }, []);

  return (
   <UserContext.Provider value ={{user,setUser}}>
    <ThemeContext.Provider value ={{theme, setTheme}}>
    <div className="App">

      <h1> PandaFit</h1>  
      <h2> {weather}</h2>     
      <img src={logo} className="logo" alt="logo"  width={70} height={70}/>  

{user ?(
  <>
      <Navbar weather={weather}/>
      <MainPage />
    </>
): (
  <>
  <NewUserPage />
  </>
)
}


    </div>
    </ThemeContext.Provider>
    </UserContext.Provider>
    
  );
}

export default App;
