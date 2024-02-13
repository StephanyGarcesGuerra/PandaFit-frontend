import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "./images/pandafit.avif";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";

import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";
import NewUserPage from "./pages/NewUserPage";
import ProfilePage from "./components/ProfilePage";
import NewUserPage2 from "./pages/NewUserPage2";

function App() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  const [weather, setWeather] = useState("");

  const baseURL = "http://api.weatherapi.com/v1/";
  const locations = "Woodside,NY";
  const apiKey = "b5e63d2d1ff2401b86b142507241302";

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${baseURL}current.json?key=${apiKey}&q=${locations}&aqi=no`
      );
      const data = await res.json();
      console.log(data);
      setWeather(data);
    };
    console.log(weather);
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="App">
          <h1> PandaFit</h1>
          <img src={logo} className="logo" alt="logo" width={70} height={70} />
          <br />
          <br />
{/* <NewUserPage/> */}
          {/* <h5> Temperature: {weather.current.temp_f}°F, {weather.current.condition.text}</h5> 
      <h5> Location: {weather.location.name}, {weather.location.region}</h5> */}

          {user ? (
            <>
              {user.newUser ? (
                <>
                <NewUserPage user={user} setUser= {setUser} />
               
                </>
              ) : (
                <>
                  <Navbar />
                  <Routes>
                    <Route path="/profile" element={<ProfilePage />}>
                      {" "}
                    </Route>
                  </Routes>
                </>
              )}{" "}
            </>
          ) : (
            <>
              <Routes>
                <Route path="/" element={<MainPage />} />
                {/* <Route path = "/use/:id" element={} */}
              </Routes>
            </>
          )}
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
