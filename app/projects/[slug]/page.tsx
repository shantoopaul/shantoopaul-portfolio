import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import TechBadge from "@/components/shared/TechBadge";
import ProjectLinkButton from "@/components/shared/ProjectLinkButton";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="py-16">
            <Link href="/" className="text-sub hover:text-primary transition-colors text-sm">
                ← Back to home
            </Link>
            <hgroup>
                <h1 className="text-4xl md:text-5xl mt-6 mb-6 text-tertiary">
                    {project.title}
                </h1>
                <p className="max-w-[80ch] text-sub mb-8">{project.description}</p>
            </hgroup>

            <div className="flex flex-col sm:flex-row gap-12 mb-12">
                <div className="flex flex-col gap-2">
                    <p className="text-primary">Type</p>
                    <p>{project.type}</p>
                </div>

                <div className="flex flex-col gap-2 items-start">
                    <p className="text-primary">Stack</p>
                    {project.tech.map((item) => (
                        <TechBadge key={item} label={item} />
                    ))}
                </div>

                <div className="flex flex-col gap-4 items-start">
                    <p className="text-primary">Links</p>
                    <ProjectLinkButton href={project.link} label="Live Site" variant="filled" />
                    <ProjectLinkButton href={project.github} label="Github Repo" variant="outline" />
                </div>
            </div>

            <Image
                src={project.image}
                height={768}
                width={1080}
                className="w-full max-w-3xl object-cover rounded-md mb-8"
                alt={`${project.title} thumbnail`}
            />

            <div className="space-y-8 max-w-[80ch] mb-8">
                <div>
                    <h2 className="text-2xl md:text-2xl mb-3">Problems and Thought Process</h2>
                    <p className="text-sub">{project.problems}</p>
                </div>
                <div>
                    <h2 className="text-2xl md:text-2xl mb-3">Future Plans and Improvements</h2>
                    <p className="text-sub">{project.futurePlans}</p>
                </div>
            </div>
            <Link href="/" className="text-sub hover:text-primary transition-colors text-sm">
                ← Back to home
            </Link>
        </div>
    );
}