import React from "react";
import Image from 'next/image';
import img from "../src/app/gamer_logo.png";
import "../styles/Logo.scss";

export default function Logo() {
  return (
    <div className="logo">
      <Image
        src={img}
        alt="logo"
        width={75}
        height={75}
      />
      <h1 className="app-name">Gameslist</h1>
    </div>
  )
}