import Image from "next/image";
import { useSession,signOut } from "next-auth/react";
import LogOut from "../components/Logout";
import styles from "../styles/Header.module.scss";

const loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
const Header = () => {
  const { data: session } = useSession();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.image}>
          <Image
            loader={loader}
            src="icon.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <h2 className={styles.title}>WEATHER FORECAST</h2>
      </div>
      {session &&<div className={styles.wrapper}><LogOut signOut={signOut} /></div>}
    </header>
  );
};

export default Header;
