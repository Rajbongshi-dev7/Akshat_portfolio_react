import typingSpeedAnalyzer from "../../assets/typing_speed_analyzer.png";
import weatherApp from "../../assets/weatherApp.png";
import placeholder_img from "../../assets/placeholder_img.png";
export const PROJECTS = [
  {
    id: 1,
    title: "Typing Speed Analyzer",
    category: "Keystroke Analytics Engine",
    description:
      "A high-precision performance tool engineered to evaluate real-time linguistic input. Developed with a focus on event-driven architecture, it processes keystroke data to calculate WPM and accuracy metrics.",
    tech: ["React", "CSS", "HTML", "JS"],
    image: typingSpeedAnalyzer,
    dark: true,
    github:
      "https://github.com/Rajbongshi-dev7/typing-speed-analyzer_react-version",
    link: "https://typing-speed-analyzer-fawn.vercel.app/",
  },
  {
    id: 2,
    title: "Weather App",
    category: "Real-time Data Interface",
    description:
      "A high-performance weather environment engineered with Vanilla JavaScript and CSS3. This project focuses on the precise synchronization of asynchronous API streams and dynamic DOM manipulation.",
    tech: ["JS", "CSS", "HTML"],
    image: weatherApp,
    dark: false,
    github: "https://github.com/Rajbongshi-dev7/WeatherApp",
    link: "https://weatherapp-ten-liart.vercel.app/",
  },
  {
    id: 3,
    title: "The Arsenal v2",
    category: "Micro-Component Engine",
    description:
      "A modular library of interactive skill-mapping components, utilizing non-scaling strokes and responsive coordinate systems for consistent cross-device performance.",
    tech: ["React", "TypeScript", "Node.js"],
    image: placeholder_img,
    dark: false,
    github: "https://github.com/doyal-rajbongshi",
    link: "https://doyal.dev",
    color: "#7000ff",
  },
];
