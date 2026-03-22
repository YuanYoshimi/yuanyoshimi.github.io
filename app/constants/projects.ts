import { Project } from "../types";

// TODO: Move this to API
export const PROJECTS: Project[] = [
  {
    title: 'RoboCup Soccer',
    date: 'Jun 2024',
    subtext: 'Autonomous soccer robot that represented Canada at the World Championship.',
    longDescription: 'Designed in Fusion 360 and programmed in C++ a fully autonomous soccer robot with three custom PCBs, integrating sensors, modular microcontrollers, an OpenMV camera, and PID control. Developed custom libraries for IR sensors, motor control, and color detection, for ball tracking and strategies. Optimized sensor modules for accurate ball detection, smooth movement, and environmental awareness. Led team to 1st place in Canada and Innovation Award; qualified to represent Canada at the World RoboCup in the Netherlands.',
    url: 'https://github.com/2024-Robocup-Soccer/Andys-Geese-2024',
  },
  {
    title: 'Undergrad Research',
    date: 'Jun 2024',
    subtext: 'Training robots to see, remember, and navigate at UC Irvine.',
    longDescription: 'Undergraduate research at the Cognitive Anteater Robotics Laboratory. Trained optical PyTorch CNN models for prey detection and predator avoidance in autonomous robots, and implemented SLAM-based episodic memory systems to improve spatial and temporal awareness and efficiency.',
    url: 'https://sites.socsci.uci.edu/~jkrichma/CARL/index.html',
  },
  {
    title: 'ZotMeal',
    date: 'Jun 2024',
    subtext: 'A dining app for students at UCI.',
    longDescription: 'Responsive mobile and web app built with React Native, Expo, Next.js, and Tailwind CSS to monitor real-time menu updates across UCI dining halls. Serves 5,000+ students with real-time menu personalization, push notifications, and food ratings. Built backend services with tRPC and PostgreSQL/DrizzleORM to ensure efficient, reliable data handling.',
    url: 'https://github.com/icssc/PeterPlate',
  },
  {
    title: 'Weather Trading Bot',
    date: 'Mar 2026',
    subtext: 'Creating a Polymarket bot for weather prediction markets.',
    longDescription: 'Currently developing a trading bot on weather markets on prediction markets.',
  },
  {
    title: 'Kensaku AI',
    date: 'Mar 2026',
    subtext: 'Helping Japanese dental companies gain visibility in AI-generated answers.',
    longDescription: 'Developing a software that helps Japanese dental companies gain visibility in AI-generated answers.',
    url: 'https://kensaku-iuletk8yh-yuanyoshimis-projects.vercel.app/',
  },
  {
    title: 'Portfolio',
    date: 'Mar 2026',
    subtext: 'You are looking at it.',
    url: 'https://yuanyoshimi.github.io',
  },
];
