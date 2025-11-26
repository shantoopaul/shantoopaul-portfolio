import Link from "next/link";
import React from "react";
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
    <footer className="pb-8 flex flex-col items-center justify-between gap-2">
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
      <p className="text-sub text-xs md:text-sm">
        © {new Date().getFullYear()} Shanto Paul. All Rights Reserved.
      </p>
    </footer>
  );
}
