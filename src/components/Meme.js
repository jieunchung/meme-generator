import React, { useState } from "react";

const Meme = () => {
  const shadow = {
    textShadow: "2px 2px 4px #000000",
  };

  /* const [allMemes, setAllMemes] = useState([]) */
  const [meme, setMeme] = useState({
    text1: "",
    text2: "",
    randomImage: "https://i.imgflip.com/tau4.jpg",
  });

  return (
    /* meme */
    <main className="grid gap-8">
      {/* text */}
      <div className="grid grid-cols-2 gap-2">
        <input
          className="border-2 p-3 border-gray-500 rounded-lg text-xs"
          type="text"
          placeholder="text1"
          name="text1"
          value={meme.text1}
        ></input>
        <input
          className="border-2 p-3 border-gray-500 rounded-lg text-xs"
          type="text"
          placeholder="text2"
          name="text2"
          value={meme.text2}
        ></input>
      </div>
      {/* button */}
      <div className="grid grid-cols-1">
        <button className="border-2 border-gray-500 rounded-lg w-full p-3 text-sm">
          get more memes✌️
        </button>
      </div>
      {/* image && result */}
      <div className="relative max-w-full">
        <img className="max-w-full min-h-full" src={meme.randomImage} />
        <h2
          className="absolute w-full text-center top-2 text-xl sm:text-4xl font-bold text-white uppercase"
          styles={shadow}
        >
          {meme.text1}
        </h2>
        <h2
          className="absolute w-full text-center bottom-2 text-xl sm:text-4xl font-bold text-white uppercase
        "
          styles={shadow}
        >
          {meme.text2}
        </h2>
      </div>
    </main>
  );
};
export default Meme;
