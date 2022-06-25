import styles from "../styles/Home.module.scss";

const LogIn = ({ signIn }) => {
  return (
    <>
      <p className={styles.description}> Welcome to the weather forecast web application.</p>
      <p className={styles.description}>
        Please login with your Github user to use the application and view the
        weather in your city.
      </p>
      <button onClick={signIn}>Log in</button>
    </>
  );
};

export default LogIn;
