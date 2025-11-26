import Link from "next/link";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export default function GithubButton() {
  return (
    <InteractiveHoverButton>
      <Link
        href="https://github.com/shantoopaul"
        target="_blank"
        rel="noopener noreferrer"
      >
        View my Github
      </Link>
    </InteractiveHoverButton>
  );
}
