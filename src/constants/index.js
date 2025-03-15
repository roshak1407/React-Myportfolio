import fooddelphoto from "../assets/projects/fooddelphoto.png";
import newshubphoto from "../assets/projects/newshubphoto.png";
import portfoliophoto from "../assets/projects/portfoliophoto.png";
import ecommercewebsitephoto from "../assets/projects/ecommercewebsitephoto.png";

export const HERO_CONTENT = `Meet a FULL STACK DEVELOPER with a passion for building scalable and high-performance web applications. Skilled in both front-end and back-end development, I create seamless, user-friendly digital experiences with clean and efficient code. My problem-solving mindset and adaptability help me tackle complex challenges and deliver results within tight deadlines. With strong communication and teamwork skills, I collaborate effectively to drive projects to success. Constantly learning and staying updated with the latest technologies, I strive to develop innovative and impactful solutions. `;

export const ABOUT_TEXT = `I am Roshak Kumar, a passionate Full Stack Developer skilled in building dynamic and scalable web applications. Proficient in the MERN stack (MongoDB, Express.js, React, Node.js), I specialize in developing seamless, user-friendly digital experiences with clean and maintainable code. My expertise includes front-end development for intuitive UI/UX, back-end API development, and database management. I am always eager to learn new technologies, optimize performance, and solve real-world challenges through innovative solutions. `;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Robotics Project Guide",
    company: "Moonpreneur Inc.",
    description: `As a Robotics Project Guide at Moonpreneur Inc., I mentor students in robotics by teaching core concepts, coding, and circuit design. I conduct interactive sessions using Micro:bit and Python, fostering creativity, problem-solving, and hands-on learning. Additionally, I provide technical support and feedback to help students refine their projects and enhance their understanding of robotics.`,
    technologies: ["Microcontrollers","Python microbit editor","Arduino","Tinker Cad", "Sensors", "Circuit Design", "Python & C++",],
  },
  
];

export const PROJECTS = [
  {
    title: "Food Hub: The food delivery App",
    image: fooddelphoto,
    description:
      "Developed a full-stack food ordering platform with secure JWT-based authentication, cart functionality, and an admin panel for managing products and orders. Integrated Stripe payment gateway to enable seamless and secure transactions. Built using the MERN stack (MongoDB, Express.js, React, Node.js), ensuring scalability and efficient database management..",
    technologies: [ "React", "Node.js", "MongoDB","express.js",],
  },
  {
    title: "News Hub: The news App",
    image: newshubphoto,
    description:
      "Developed a News Hub app using React, API fetching, and Bootstrap to display real-time news across various categories. Implemented a dynamic and responsive UI for an enhanced user experience, ensuring seamless navigation and efficient data retrieval from external news APIs.",
    technologies: ["React","bootstrap","API Fetching"],
  },
  {
    title: "Portfolio Website",
    image: portfoliophoto,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React","Framer Motion","Tailwind.css"],
  },
  {
    title: "Ecommerce Website:Shopy Hub",
    image: ecommercewebsitephoto,
    description:
      "Developed a responsive eCommerce website using React and Tailwind CSS, focusing on a sleek and modern UI for an enhanced user experience. Designed intuitive product displays, smooth navigation, and optimized styling for a visually appealing and user-friendly interface.",
    technologies: ["Tailwind CSS","React"],
  },
];

export const CONTACT = {
  address: "Phagwara, Punjab ",
  phoneNo: "7017913464 ",
  email: "roshak5555@gmail.com",
  email2: "harendrasingh8445@gmail.com",
};
