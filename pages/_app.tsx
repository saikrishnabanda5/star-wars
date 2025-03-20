import Header from "@/components/Header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-tooltip/dist/react-tooltip.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
