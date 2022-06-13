import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import AppProvider from "../context/AppProvider";
import { UserProvider } from "../hooks/useUser";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <UserProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
