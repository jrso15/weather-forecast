import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

const WeatherApp = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default WeatherApp;
