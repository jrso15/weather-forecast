import Moment from 'moment';
import styles from "../styles/Weather.module.scss";

const Weather = ({ weatherData, onClickBack }) => {

  const toTimestamp = (timestamp)=> {
    var date = Moment(timestamp).format('MM/DD/YYYY')
    return date;
  }

  return (
    <>
      <h1 className={styles.name}>{weatherData?.name}</h1>
      
      <div className={styles.weather}>
        <div className={styles.weather__grid}>
          <div className={styles.weather__grid_item}>
            <h3>Date <span>(mm/dd/yyyy)</span></h3>
          </div>
          <div className={styles.weather__grid_item}>
            <p>{toTimestamp(weatherData?.dt)}</p>
          </div>
        </div>

        <div className={styles.weather__grid}>
          <div className={styles.weather__grid_item}>
            <h3>Temperature</h3>
          </div>
          <div className={styles.weather__grid_item}>
            <p>{weatherData?.main.temp}</p>
          </div>
        </div>

        <div className={styles.weather__grid}>
          <div className={styles.weather__grid_item}>
            <h3>Description</h3>
          </div>
          <div className={styles.weather__grid_item}>
            <p>{weatherData?.weather[0].description}</p>
          </div>
        </div>

        <div className={styles.weather__grid}>
          <div className={styles.weather__grid_item}>
            <h3>Main</h3>
          </div>
          <div className={styles.weather__grid_item}>
            <p>{weatherData?.weather[0].main}</p>
          </div>
        </div>

        <div className={styles.weather__grid}>
          <div className={styles.weather__grid_item}>
            <h3>Pressure</h3>
          </div>
          <div className={styles.weather__grid_item}>
            <p>{weatherData?.main.pressure}</p>
          </div>
        </div>

        <div className={styles.weather__grid}>
          <div className={styles.weather__grid_item}>
            <h3>Humidity</h3>
          </div>
          <div className={styles.weather__grid_item}>
            <p>{weatherData?.main.humidity}</p>
          </div>
        </div>
      </div>
      <div className={styles.btn}>
        <button onClick={onClickBack}>back</button>
      </div>
    </>
  );
};

export default Weather;
