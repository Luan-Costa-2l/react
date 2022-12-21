import React from "react";
import { MainRoutes } from "./routes/MainRoutes";

import './App.css'

import { Template } from "./components/MainComponents";
import { Header } from "./components/partials/Header";
import { Footer } from "./components/partials/Footer";

const App = () => {
  return (
    <div>
      <Template>
        <Header />
        <MainRoutes />
        <Footer />
      </Template>
    </div>
    
  )
}

export default App;