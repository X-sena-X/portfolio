import React,{useState} from "react";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import "./Navbar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
function Navbar() {
  const [toggleMenu,setToggleMenu] = useState(false);
  const toggleNav = ()=>{
    setToggleMenu(!toggleMenu);
    useEffect(() => {
      if(toggleMenu){
        document.body.style.overflow = "hidden";
      }
      
      document.body.style.overflow = "scroll";
    });
  }   

  return (
    <>
      <div className="NavContainer fixed right-0 prevent-select lg:h-screen lg:left-0 z-50" >
        <div className="menuIcon lg:hidden flex text-red-600 float-right top-3" onClick={toggleNav}>
          <MenuIcon fontSize="large" />
        </div>
        <div id="modalContainer" className={toggleMenu? "flex": "hidden" }>
          <img
            src="#"
            alt="logo"
            className="self-center w-10 h-10 rounded-full mx-4"
          />
          <div className="SectionContainer mt-20 justify-center items-center">
            <ul className="inline-flex-col justify-items-center text-center items-center">
              <li
                className=" text-white cursor-pointer mt-7 "
                onClick={() => {
                  const anchor = document.querySelector("#NameContainer");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                Home
              </li>
              <li
                className=" text-white cursor-pointer mt-7"
                onClick={() => {
                  const anchor = document.querySelector("#Section2");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                About
              </li>
              <li
                className=" text-white cursor-pointer mt-7"
                onClick={() => {
                  const anchor = document.querySelector("#Section4");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                Experience
              </li>
              <li
                className=" text-white cursor-pointer mt-7"
                onClick={() => {
                  const anchor = document.querySelector("#Section6");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                Contact Me
              </li>
            </ul>
          </div>
          <div className="SocialSection lg:mt-14 mt-4 mb-20 lg:mb-0">
            <ul className="flex flex-row">
              <li className="mx-2 w-7 h-7 text-white">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li className="mx-2 w-7 h-7 text-blue-500">
                <a href="https://www.google.com">
                  <LinkedInIcon />
                </a>
              </li>
              <li className="mx-2 w-7 h-7 text-pink-500">
                <a href="https://www.google.com">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

/** 
 * 
 * <div id="mobile" className="text-red-600 float-right md:flex lg:hidden h-48">
        <div className="menuIcon fixed">
          <MenuIcon fontSize="large"/>
        </div>
        <div className="menuItem flex relative top-10">
          <ul>
            <li>HOME</li>
            <li>HOME</li>
            <li>HOME</li>
            <li>HOME</li>
            <li>HOME</li>
          </ul>
        </div>
          
      </div>
*/
