import Head from "next/head";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import Carousel from "../components/carousel";
import Menu from "../components/menu";
import Banner from "../components/banner";
import Brand from "../components/brand";
import New from "../components/new";
import App from "../components/app";
import Feature from "../components/feature";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Header />
      <Carousel />
      <Menu />
      <Feature />
      <Banner />

      <App />
      <New />
      <Brand />
      <Footer />
    </div>
  );
}
