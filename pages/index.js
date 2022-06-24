import Head from "../components/Head";
import Search from "../components/Search";
import styles from "../styles/Home.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head title="Weather Forecast" />

      <main className={styles.main}>
        {!session && (
          <>
            <p> Welcome to the weather forecast web application.</p>
            <p>
              Please login with yout Githuib user to use the application and
              view the weather in your city.
            </p>
            <button onClick={signIn}>Login</button>
          </>
        )}

        {session && (
          <>
            <p> {session.user.name}</p>
            <h1> https://github.com/{session.user.url} </h1> <br />
            <Search />
            <button onClick={signOut}>Sign out</button>
          </>
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
