import React from "react";

function Header() {
  return (
    <header>
      <div>
        <h1> Tami's Weather App </h1>
      </div>
      <nav>
        <a href="/?city=Jakarta"> Jakarta </a>
        <a href="/?city=Bandung"> Bandung </a>
        <a href="/?city=Sydney"> Sydney </a>
        <a href="/?city=Canada"> Canada </a>
        <a href="/?city=France"> France </a>
      </nav>
    </header>
  );
}

export default Header;
