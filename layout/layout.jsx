import React from "react";
import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;