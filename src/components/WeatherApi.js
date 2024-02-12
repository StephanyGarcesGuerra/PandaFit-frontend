import { useEffect, useState } from "react"


function WeatherApi (){

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

    return(
        <div>
            <h1> Weather API Test</h1>
       

        </div>
    )
}

export default WeatherApi;