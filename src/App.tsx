import React from "react";
import "./App.css";
import "./assets/css/globals.css";
// import "./assets/css/react-slick.css";
// import "slick-carousel/slick/slick.css";
import Header from "./landing_componets/header";
import Hero from "./landing_componets/hero";
import Features from "./landing_componets/features";
import Footer from "./landing_componets/footer";

function App() {
  return (
      <div className="App">
        {" "}
        <Header />
        <main>
          <Hero />
          <Features />
        </main>
        <Footer />
      </div>
  );
}

export default App;
