import React from "react";
import { VscCode } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="text-gray-500 text-center">
      <a href="https://github.com/jieunchung/meme-generator" target="_blank">
        <VscCode className="inline-block hover:text-black" />
      </a>
    </footer>
  );
};

export default Footer;
