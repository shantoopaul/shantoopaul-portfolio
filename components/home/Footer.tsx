import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter
} from "react-icons/fa6";

export default function Footer() {
  const footerLinks = [
    {
      id: 1,
      title: "LinkedIn",
      link: "http://www.linkedin.com/in/shantoopaul",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      id: 2,
      title: "Github",
      link: "https://github.com/shantoopaul",
      icon: <FaGithub size={20} />,
    },
    {
      id: 3,
      title: "X",
      link: "https://x.com/shan_t0",
      icon: <FaXTwitter size={20} />,
    },
  ];

  return (
    <footer className="pb-8 flex flex-col items-center justify-between gap-2 text-center">
      <div className="flex justify-center gap-1">
        {footerLinks.map((link) => (
          <Link
            key={link.id}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-all duration-300 hover:bg-primary/80 hover:text-main text-primary"
          >
            <span className="sr-only">{link.title} Link</span>
            {link.icon}
          </Link>
        ))}
      </div>
      <p className="text-sub text-sm">
        This portfolio is open source. <span className="inline-block"><a href="https://github.com/shantoopaul/shantoopaul-portfolio" className="border-b-2 border-dashed border-b-tertiary">Source code</a> :)</span>
      </p>
    </footer>
  );
}
