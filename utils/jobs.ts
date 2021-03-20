import { FaDigitalOcean, FaMicrosoft, FaUber } from "react-icons/fa";
import { SiAndela, SiMicrosoftedge } from "react-icons/si";

export const jobs = [
  {
    icon: { name: FaDigitalOcean, color: "blue.400" },
    match: 85,
    company: "Digital Ocean",
    position: "Sr. Back-End Developer",
    salary: {
      start: 8800,
      end: 12700,
    },
    location: "Lagos, Ayobo",
    tags: ["C++", "Open SG", "GPSS"],
    post_date: "29.12.2019",
    new: true,
  },
  {
    icon: { name: FaMicrosoft, color: "orange.400" },
    match: 54,
    company: "Microsoft",
    position: "Sr. Full-Stack Developer",
    salary: {
      start: 12000,
      end: 15000,
    },
    location: "Parkview Estate, Ikoyi",
    tags: ["C++", "Vue JS", "ELAN"],
    post_date: "24.12.2019",
    new: true,
  },
  {
    icon: { name: FaUber, color: "gray.900" },
    match: 23,
    company: "UBER",
    position: "Sr. Front End Dev & Sr. Full Stack Dev.",
    salary: {
      start: 23000,
      end: 24500,
    },
    location: "Lekki, Abijo",
    tags: ["mSQL", "YafaRay", "CSS3"],
    post_date: "22.12.2019",
  },
  {
    icon: { name: SiAndela, color: "orange.400" },
    match: null,
    company: "Andela",
    position: "Sr. Front End Dev & Sr. Full Stack Dev.",
    salary: {
      start: 21000,
      end: 24300,
    },
    location: "Lekki, Abijo",
    tags: ["mSQL", "YafaRay", "CSS3"],
    post_date: "22.12.2019",
  },
];
