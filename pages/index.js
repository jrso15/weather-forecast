import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Home = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            <h1>Welcome!</h1> <br />
            <button onClick={signIn}>Sign in</button>
          </>
        )}

        {session && (
          <>
            <h1>Signed in as {session.user.email} </h1> <br />
            <button onClick={signOut}>Sign out</button>
          </>
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
