const LogIn = ({ signIn }) => {
  return (
    <>
      <p> Welcome to the weather forecast web application.</p>
      <p>
        Please login with yout Githuib user to use the application and view the
        weather in your city.
      </p>
      <button onClick={signIn}>Login</button>
    </>
  );
};

export default LogIn;
