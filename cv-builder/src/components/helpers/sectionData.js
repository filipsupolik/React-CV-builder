import {
  FaAward,
  FaBrain,
  FaFolderOpen,
  FaGraduationCap,
  FaLink,
  FaSuitcase,
} from "react-icons/fa6";

const sections = {
  personal: {
    id: 0,
    name: "Personal Details",
  },
  links: {
    id: 1,
    name: "Links",
    icon: <FaLink />,
  },
  skills: {
    id: 2,
    name: "Technical Skills",
    icon: <FaBrain />,
  },
  work: {
    id: 3,
    name: "Work Experience",
    icon: <FaSuitcase />,
  },
  projects: {
    id: 4,
    name: "Projects",
    icon: <FaFolderOpen />,
  },
  education: {
    id: 5,
    name: "Education",
    icon: <FaGraduationCap />,
  },
  certInt: {
    id: 6,
    name: "Certifications, Skills & Interests",
    icon: <FaAward />,
  },
};

export default sections;
