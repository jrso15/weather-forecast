import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "../components/Head";
import LogIn from "../components/Login";
import LogOut from "../components/Logout";
import Search from "../components/Search";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head title="Weather Forecast" />

      <main className={styles.main}>
        {!session && <LogIn signIn={signIn} />}

        {session && <Search sessionCredentials={session} />}

        {/* <LogOut signOut={signOut} /> */}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
