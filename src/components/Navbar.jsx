import logo from "../assets/logome.webp";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Navbar = () => {
  return (
    <div>
      <nav className=" mb-20 flex items-center justify-between py-6">
       <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />

       </div>
       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
       <a href="https://www.linkedin.com/in/roshak-kumar/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
       </a>
       <a href="https://github.com/roshak1407" target="_blank" rel="noopener noreferrer">
         <FaGithub />
       </a>
       <a href="https://leetcode.com/u/Roshak_1/" target="_blank" rel="noopener noreferrer">
        <SiLeetcode />
        </a>
        
</div>

       </div>

      </nav>
    </div>
  )
}

export default Navbar
