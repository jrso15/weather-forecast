import { useState } from "react";

const Search = () => {
  const apiKey = process.env.API_KEY;
  const apiUrl = process.env.API_URL;
  const [weatherData, setWeatherData] = useState(null);
  const [textValue, setTextValue] = useState("");

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
  };

  console.log("text", weatherData);

  return (
    <div>
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
      {weatherData?.name}
      {weatherData?.weather[0].description}
    </div>
  );
};

export default Search;
