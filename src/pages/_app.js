// src/pages/_app.js
import '../app/styles/globals.css';
import '../app/styles/animations.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
