import Link from "next/link";

interface ProjectLinkButtonProps {
    href: string;
    label: string;
    variant?: "filled" | "outline";
}

export default function ProjectLinkButton({
    href,
    label,
    variant = "filled",
}: ProjectLinkButtonProps) {
    const variantClasses =
        variant === "filled"
            ? "bg-primary text-btn hover:bg-primary/80"
            : "border-2 border-primary text-btn hover:bg-primary/80";

    return (
        <Link
            href={href}
            target="__blank"
            className={`px-4 py-2 rounded-full text-xs transition-all ${variantClasses}`}
        >
            {label}
        </Link>
    );
}