import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css';
import {ThemeProvider} from 'next-themes';
import AppProvider from '../context/AppProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  )
}

export default MyApp
