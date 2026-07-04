interface TechBadgeProps {
    label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
    return (
        <span className="px-3 py-1 text-xs font-medium rounded-full border-2 border-secondary">
            {label}
        </span>
    );
}