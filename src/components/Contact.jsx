import { CONTACT } from "../constants"
import { motion } from "framer-motion"
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
      className="my-10 text-center text-4xl">Get in Touch</motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className="my-4">{CONTACT.address}</motion.p>
        <motion.p
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:-100}}
         transition={{duration:1}}
        className="my-4" >{CONTACT.phoneNo}</motion.p>
        <a href="#" className="border-b">{CONTACT.email}</a>
        <br/>
        <a href="#" className="border-b">{CONTACT.email2}</a>
        <br/>
        <a href="https://drive.google.com/file/d/1gDcsF9NXXfRxsWhl-dZhNVHFpYPoF6Rs/view?usp=sharing" className="border-b my-4 text-base hover:text-xl transition-all duration-300">Click to view my resume</a>
        
      </div>
    </div>
  )
}

export default Contact
