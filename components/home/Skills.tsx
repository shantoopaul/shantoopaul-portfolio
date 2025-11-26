"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaGitAlt,
  FaJs,
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
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const technologies = {
  frontend: [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "React", icon: FaReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Redux", icon: SiRedux },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Firebase", icon: SiFirebase },
  ],
  tools: [
    { name: "Git", icon: FaGitAlt },
    { name: "Github", icon: FaGithub },
    { name: "Figma", icon: FaFigma },
    { name: "Notion", icon: SiNotion },
  ],
};

export default function Skills() {
  return (
    <section className="py-16">
      <h2 className="text-4xl md:text-5xl text-center">
        My Skills
      </h2>
      <TooltipProvider>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 mt-8">
          {Object.entries(technologies).map(([section, items]) => (
            <div
              key={section}
              className="bg-gray-950 border border-gray-700 rounded-lg overflow-hidden font-mono"
            >
              {/* Code block header */}
              <div className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm ml-2">
                  {section}.js
                </span>
              </div>

              {/* Code content */}
              <div className="p-4">
                <div className="text-purple-400 text-sm mb-2">
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-yellow-300">{section}</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-green-400">{"{"}</span>
                </div>

                <div className="flex flex-wrap gap-4 ml-4 mb-2">
                  {items.map((tech) => {
                    const IconComponent = tech.icon;
                    return (
                      <Tooltip key={tech.name}>
                        <TooltipTrigger asChild>
                          <div className="cursor-pointer">
                            <div className="w-12 h-12 rounded bg-gray-800 border border-gray-600 flex items-center justify-center hover:border-gray-500 transition-colors">
                              <IconComponent
                                className={`w-6 h-6 text-green-400`}
                              />
                            </div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          className="bg-gray-800 text-green-400 border border-gray-600 font-mono text-xs"
                        >
                          <p>{tech.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>

                <div className="text-green-400 text-sm mt-6">
                  <span className="text-green-400">{"}"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TooltipProvider>
    </section>
  );
}
