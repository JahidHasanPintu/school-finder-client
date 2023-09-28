import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
// import Home from "./components/home/Home";
// import Footer from "./components/footer/Footer";
import NewsPortal from "./components/news-portal/NewsPortal";

function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      {/* <Home></Home> */}
      <NewsPortal></NewsPortal>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
