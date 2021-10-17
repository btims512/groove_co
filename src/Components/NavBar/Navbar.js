import React from "react";
import * as ReactBootStrap from "react-bootstrap";
// import NewsLetter from "./NewsLetter/NewsLetter";
import newsletter from "./NewsLetter";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineApple,
} from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import {
  SiInstagram,
  SiYoutube,
  SiSpotify,
  SiApplemusic,
} from "react-icons/si";
import { BsDot } from "react-icons/bs";
{
  /* BsDot for breaking up space between icons */
}

const NavBar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
      >
        {/* // Instagram // */}
        <SiInstagram
          size="3em"
          cursor="pointer"
          color="white"
          onClick={() =>
            window.open(
              "https://www.instagram.com/groove_company/?hl=en",
              "_blank"
            )
          }
        ></SiInstagram>
        <BsDot color="transparent" />
        <BsDot color="transparent" />
        {/* // Facebook // */}
        <AiOutlineFacebook
          size="3.5em"
          cursor="pointer"
          color="white"
          onClick={() =>
            window.open("https://www.facebook.com/Grooveco.atx/", "_blank")
          }
        ></AiOutlineFacebook>
        <BsDot color="transparent" />
        <BsDot color="transparent" />
        {/* // Youtube // */}
        <SiYoutube
          size="3em"
          cursor="pointer"
          color="white"
          onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UC5384HLuOA71GCXvsh2rlJg",
              "_blank"
            )
          }
        ></SiYoutube>
        <BsDot color="transparent" />
        <BsDot color="transparent" />
        {/* // Spotify // */}
        <SiSpotify
          size="2.5em"
          cursor="pointer"
          color="white"
          onClick={() =>
            window.open(
              "https://open.spotify.com/artist/1pKUJQQu7bXYWYRhuRkqkd?si=r5DvgM7uQla365FEQZueqA",
              "_blank"
            )
          }
        ></SiSpotify>
        <BsDot color="transparent" />
        <BsDot color="transparent" />
        {/* // Apple Music // */}
        <SiApplemusic
          size="2.5em"
          cursor="pointer"
          color="white"
          onClick={() =>
            window.open(
              "https://music.apple.com/us/artist/groove-co/1494640812",
              "_blank"
            )
          }
        ></SiApplemusic>
      </ReactBootStrap.Navbar>
    </div>
  );
};

// const NewsLetter = () => (
//   <>
//   <BsDot color="transparent" />
//         <BsDot color="transparent" />
//     <div className="p-2" div className="Signup__text">
//     </div>
//     <section className="Signup">
//       <form class="Signup__form" id="newsletter">
//         <input style={{ width: "10em" }}
//           required
//           id="email"
//           type="email"
//           placeholder="Enter your Email to signup for our newsletter"
//         ></input>
//       </form>
//     </section>
//     <BsDot color="transparent" />
//     <button
//       form="newsletter"
//       style={{ height: "30px", width: "30px" }}
//       type="submit"
//       class="Signup__button"
//     >
//       Submit
//     </button>
//   </>
// );

export default NavBar;
