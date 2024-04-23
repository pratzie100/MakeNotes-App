import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Pratyush Kargeti ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
