"use client";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { projects } from "@/lib/data/projects";
import TechBadge from "./TechBadge";

export default function PortfolioCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projects.map((project) => (
        <CardContainer key={project.id} className="inter-var h-full">
          <CardBody className="relative w-auto h-full rounded-xl p-5 basis-lg group/card bg-card-background flex flex-col">
            <CardItem translateZ="60" className="text-2xl font-bold text-tertiary">
              {project.title}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={project.image}
                height={768}
                width={1080}
                className="w-full object-cover rounded-md group-hover/card:shadow-xl"
                alt={`${project.title} thumbnail`}
              />
            </CardItem>
            <CardItem translateZ="60" className="flex flex-wrap gap-2 my-6">
              {project.tech.map((item) => (
                <TechBadge key={item} label={item} />
              ))}
            </CardItem>
            <CardItem translateZ="60" className="w-full mt-auto">
              <Link href={`/projects/${project.slug}`}>
                <InteractiveHoverButton>
                  View Details
                </InteractiveHoverButton>
              </Link>
            </CardItem>
          </CardBody>
        </CardContainer>
      ))
      }
    </div >
  );
}