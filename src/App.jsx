import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Outlet />
      <Menu />
      <Footer />
    </>
  );
}

export default App;
