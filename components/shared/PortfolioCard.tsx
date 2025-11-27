"use client";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const cardData = [
  {
    id: 1,
    title: "Ticket Bounty",
    description:
      "Ticket Bounty App",
    image: "/portfolio/ticketbounty.png",
    tech: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Supabase",
      "Prisma",
      "Zod",
      "Vercel",
    ],
    link: "https://ticket-bounty-blond.vercel.app/",
    github: "https://github.com/shantoopaul/ticket-bounty",
  },
  {
    id: 2,
    title: "This Page",
    description:
      "My portfolio site :)",
    image: "/portfolio/Portfolio.png",
    tech: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Vercel",
    ],
    link: "https://shantoopaul.vercel.app/",
    github: "https://github.com/shantoopaul/shantoopaul-portfolio",
  },
  {
    id: 3,
    title: "Rock Paper Scissors",
    description:
      "Rock, Paper, Scissors against the computer.",
    image: "/portfolio/Rock-Paper-Scissors.png",
    tech: [
      "JavaScript",
      "SASS",
      "HTML",
      "CSS",
      "Netlify",
    ],
    link: "https://sleekrockpaperscissor.netlify.app/",
    github: "https://github.com/shantoopaul/rock-paper-scissors",
  },
  {
    id: 4,
    title: "Newz",
    description:
      "A comprehensive news aggregation platform that offers trending articles, premium content, and a seamless user experience. ",
    image: "/portfolio/Newz.png",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Firebase",
      "MongoDB",
    ],
    link: "https://newz-2025.web.app/",
    github: "https://github.com/shantoopaul/Newz-client-side",
  },
  {
    id: 5,
    title: "Study Buddies",
    description:
      "The primary purpose of this project is to facilitate collaboration among peers for online learning and assessment.",
    image: "/portfolio/studybuddies.png",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Firebase",
      "MongoDB",
    ],
    link: "https://studybuddies-2024.web.app/",
    github: "https://github.com/shantoopaul/study-buddies-client-side",
  }
];

export default function PortfolioCard() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {cardData.map((card) => (
        <CardContainer key={card.id} className="inter-var h-full">
          <CardBody className="relative w-auto h-full rounded-xl p-5 sm:w-[30rem] group/card bg-card-background flex flex-col">
            <CardItem translateZ="50" className="text-xl font-bold text-tertiary">
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-sm max-w-sm mt-2 line-clamp-1"
            >
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={card.image || "/placeholder.svg"}
                height={768}
                width={1080}
                className="w-full object-cover rounded-md group-hover/card:shadow-xl"
                alt={`${card.title} thumbnail`}
              />
            </CardItem>
            <CardItem translateZ="80" className="w-full mt-5 mb-16">
              <div className="flex flex-wrap gap-2">
                {card.tech.map((category, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium rounded-full border-2 border-secondary"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </CardItem>
            <div className="flex justify-between items-center mt-auto">
              <CardItem
                translateZ={20}
                as={Link}
                href={card.link}
                target="__blank"
                className="px-4 py-2 rounded-full text-xs bg-primary text-btn hover:bg-primary/80 transition-all"
              >
                Visit →
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href={card.github}
                target="__blank"
                className="px-4 py-2 rounded-full text-xs border-2 border-primary text-btn hover:bg-primary/80 transition-all"
              >
                Github
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
