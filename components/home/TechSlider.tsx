import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaGitAlt,
  FaJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiFirebase,
  SiNotion,
  SiGraphql,
  SiPostgresql,
  SiRedis,
  SiPrisma,
  SiSupabase,
  SiKubernetes,
  SiVercel,
  SiNetlify,
  SiZod,
  SiExcalidraw,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { VscJson } from "react-icons/vsc";

const LogoColor = "#72757e";

const frontendStack = [
  { name: "Figma", icon: <FaFigma size={50} color={LogoColor} /> },
  { name: "Notion", icon: <SiNotion size={50} color={LogoColor} /> },
  { name: "Excalidraw", icon: <SiExcalidraw size={50} color={LogoColor} /> },
  { name: "HTML5", icon: <FaHtml5 size={50} color={LogoColor} /> },
  { name: "CSS3", icon: <FaCss3Alt size={50} color={LogoColor} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50} color={LogoColor} /> },
  { name: "Javascript", icon: <FaJs size={50} color={LogoColor} /> },
  { name: "Typescript", icon: <SiTypescript size={50} color={LogoColor} /> },
  { name: "Next.js", icon: <SiNextdotjs size={50} color={LogoColor} /> },
  { name: "React.js", icon: <FaReact size={50} color={LogoColor} /> },
  { name: "Redux.js", icon: <SiRedux size={50} color={LogoColor} /> },
  { name: "JSON", icon: <VscJson size={50} color={LogoColor} /> },
  { name: "Zod", icon: <SiZod size={50} color={LogoColor} /> },
];

const backendStack = [
  { name: "Git", icon: <FaGitAlt size={50} color={LogoColor} /> },
  { name: "Github", icon: <FaGithub size={50} color={LogoColor} /> },
  { name: "Node.js", icon: <FaNodeJs size={50} color={LogoColor} /> },
  { name: "Express.js", icon: <SiExpress size={50} color={LogoColor} /> },
  { name: "GraphQL", icon: <SiGraphql size={50} color={LogoColor} /> },
  { name: "SQL", icon: <TbSql size={50} color={LogoColor} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={50} color={LogoColor} /> },
  { name: "MongoDB", icon: <SiMongodb size={50} color={LogoColor} /> },
  { name: "Redis", icon: <SiRedis size={50} color={LogoColor} /> },
  { name: "Prisma", icon: <SiPrisma size={50} color={LogoColor} /> },
  { name: "Supabase", icon: <SiSupabase size={50} color={LogoColor} /> },
  { name: "Firebase", icon: <SiFirebase size={50} color={LogoColor} /> },
  { name: "Docker", icon: <FaDocker size={50} color={LogoColor} /> },
  { name: "Kubernetes", icon: <SiKubernetes size={50} color={LogoColor} /> },
  { name: "Vercel", icon: <SiVercel size={50} color={LogoColor} /> },
  { name: "Netlify", icon: <SiNetlify size={50} color={LogoColor} /> },
];

export default function TechSlider() {
  return (
    <div className="py-16">
      <hgroup className="flex flex-col gap-3 mb-10">
        <h2 className="text-secondary text-sm font-bold">
          <span className="text-primary">04 </span>
          MY TECH STACK
        </h2>
        <p className="heading-size leading-none">
          The stack I <span className="text-primary italic">reach for</span>
        </p>
      </hgroup>

      <Marquee gradient={false} speed={40} className="mb-10">
        {frontendStack.map((tech, index) => (
          <div key={index} className="mx-6 flex flex-col items-center">
            {tech.icon}
            <p className="mt-2 text-sm">{tech.name}</p>
          </div>
        ))}
      </Marquee>

      <Marquee gradient={false} speed={50} direction="right">
        {backendStack.map((tech, index) => (
          <div key={index} className="mx-6 flex flex-col items-center">
            {tech.icon}
            <p className="mt-2 text-sm">{tech.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}