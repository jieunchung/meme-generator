import React, { useState, useEffect } from "react";

const Meme = () => {
  const shadow = {
    textShadow: "2px 2px 4px #000000",
  };

  const [allMemes, setAllMemes] = useState([]);

  const [meme, setMeme] = useState({
    text1: "",
    text2: "",
    randomImage: "https://i.imgflip.com/tau4.jpg",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((result) => setAllMemes(result));
  }, []);

  const getMemeImage = () => {
    const memeArray = allMemes.data.memes
      .filter((meme) => meme.box_count === 2)
      .map((filteredMeme) => filteredMeme);
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const imageUrl = memeArray[randomNumber].url;

    setMeme((prev) => ({
      ...prev,
      randomImage: imageUrl,
    }));
  };

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
          onChange={handleChange}
        ></input>
        <input
          className="border-2 p-3 border-gray-500 rounded-lg text-xs"
          type="text"
          placeholder="text2"
          name="text2"
          value={meme.text2}
          onChange={handleChange}
        ></input>
      </div>
      {/* button */}
      <div className="grid grid-cols-1">
        <button
          className="border-2 border-gray-500 rounded-lg w-full p-3 text-sm"
          onClick={getMemeImage}
        >
          get more memes✌️
        </button>
      </div>
      {/* image && result */}
      <div className="relative max-w-full">
        <img className="max-w-full min-h-full" src={meme.randomImage} />
        <h2
          style={shadow}
          className="absolute w-full text-center top-2 text-xl sm:text-4xl font-bold text-white uppercase"
        >
          {meme.text1}
        </h2>
        <h2
          style={shadow}
          className="absolute w-full text-center bottom-2 text-xl sm:text-4xl font-bold text-white uppercase
        "
        >
          {meme.text2}
        </h2>
      </div>
    </main>
  );
};
export default Meme;
