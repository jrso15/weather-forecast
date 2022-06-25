import { useState } from "react";
import Weather from "./Weather";
import styles from "../styles/Search.module.scss";

const Search = ({ sessionCredentials }) => {
  const apiKey = process.env.API_KEY;
  const apiUrl = process.env.API_URL;
  const [weatherData, setWeatherData] = useState(null);
  const [textValue, setTextValue] = useState("");
  const [showWeather, setShowWeather] = useState(true);

  const fetchData = async () => {
    const res = await fetch(
      `${apiUrl}data/2.5/weather?q=${textValue}&appid=${apiKey}`
    );
    const newData = await res.json();

    return setWeatherData(newData);
  };

  const handleDisplayWeather = (e) => {
    e.preventDefault();
    fetchData();
    setShowWeather(false);
  };

  const handleBack = () => {
    setShowWeather(true);
  };


  return showWeather ? (
    <>
      <h2 className={styles.title}>Hello, {sessionCredentials.user.name}!</h2>
      <p>{sessionCredentials.user.email}</p>
      <form onSubmit={handleDisplayWeather} className={styles.form}>
        <input
          text="text"
          value={textValue}
          placeholder="Enter your City"
          required="required"
          className={styles.field}
          onChange={(e) => {
            setTextValue(e.currentTarget.value);
          }}

        />
        <button type="submit">display weather</button>
      </form>
    </>
  ) : (
    <Weather weatherData={weatherData} onClickBack={handleBack} />
  );
};

export default Search;
