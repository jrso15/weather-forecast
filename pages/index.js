import { useSession, signIn } from "next-auth/react";
import LogIn from "../components/Login";
import Head from "../components/Head";
import Header from "../components/header";
import Search from "../components/Search";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head title="Weather Forecast" />

      <Header />
      <main className={styles.main}>
        {!session && <LogIn signIn={signIn} />}

        {session && <Search sessionCredentials={session} />}

      </main>

      <Footer />
    </div>
  );
};

export default Home;
