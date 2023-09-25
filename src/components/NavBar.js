import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksList = links.map((linkObj) => {
    console.log({linkObj})
    return <a key={linkObj} href= {"#" + linkObj}>{linkObj}</a>
  })

  return <nav>{linksList}</nav>;
}

export default NavBar;
