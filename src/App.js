import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Meme from "./components/Meme";

const App = () => {
  return (
    <div className="min-w-full min-h-[100vh] mx-auto py-20 bg-gray-100 font-[ubuntu]">
      <div className="w-5/6 sm:max-w-[500px] mx-auto bg-white p-6">
        <Header />
        <Meme />
      </div>
      <div className="w-5/6 sm:max-w-[500px] mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default App;
