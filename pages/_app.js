import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import AppProvider from "../context/AppProvider";
import { UserProvider } from "../hooks/useUser";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <ThemeProvider attribute="class">
      <UserProvider>
        <SessionProvider session={session}>
          <AppProvider>
            <Component {...pageProps} />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </AppProvider>
        </SessionProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
