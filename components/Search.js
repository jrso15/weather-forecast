import { useState } from "react";

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

  console.log("text", weatherData);

  return (
    <div>
      {showWeather ? (
        <>
          <h2>{sessionCredentials.user.name}</h2>
          <h2>{sessionCredentials.user.email}</h2>
          search
          <form onSubmit={handleDisplayWeather}>
            <input
              text="text"
              value={textValue}
              required="required"
              onChange={(e) => {
                setTextValue(e.currentTarget.value);
              }}
            />
            <button type="submit">display weather</button>
          </form>
        </>
      ) : (
        <>
          {weatherData?.name}
          {weatherData?.weather[0].description}{" "}
          <button onClick={handleBack}>back</button>
        </>
      )}
    </div>
  );
};

export default Search;
