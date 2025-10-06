import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


export default function Layout({ children }){
  return (
    <>
    <div className="w-full mx-auto min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
    </>
  );
};