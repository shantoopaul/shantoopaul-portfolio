import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import IconCloudSlug from "../shared/IconCloudSlug";

export default function Hero() {
  const socialIcons = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/shantoopaul",
      icon: <FaLinkedinIn size={16} />,
    },
    {
      id: 2,
      href: "https://github.com/shantoopaul",
      icon: <FaGithub size={16} />,
    },
    {
      id: 3,
      href: "https://x.com/shan_t0",
      icon: <FaXTwitter size={16} />,
    }
  ];

  return (
    <div className="min-h-screen py-16 grid">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          {/* Greeting with HTML tags */}
          <div className="sm:text-lg">
            <span className="text-tertiary">{"<span>"}</span>
            <span className="ml-2">Hi there, I&apos;m Shanto</span>
            <span className="text-tertiary ml-2">{"</span>"}</span>
          </div>

          {/* Main heading */}
          <h1 className="space-y-0 sm:space-y-2 text-balance">
            <span className="text-4xl md:text-5xl font-bold leading-tight text-secondary block">
              {"{Full Stack}"}
            </span>
            <span className="text-4xl md:text-5xl font-bold leading-tight">
              {" "}MERN
            </span>
            <span className="text-4xl md:text-5xl font-bold leading-tight">
              {" "}Developer<span className="text-secondary">_</span>
            </span>
          </h1>

          {/* Description paragraph */}
          <div className="sm:text-lg max-w-[60ch]">
            <span className="text-tertiary">{"<p>"}</span>
            <span className="ml-2 text-sub">
              Based in Dhaka, Bangladesh. I build web applications that solve real problems. Always open to interesting projects and collaborations.
            </span>
            <span className="text-tertiary ml-2">{"</p>"}</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 text-btn">
            <Link
              href="#contact"
              className="px-8 py-2 rounded-full font-medium transition-all bg-primary hover:bg-primary/80"
            >
              Contact
            </Link>
            <Link
              className="px-8 py-2 rounded-full font-medium transition-all border-2 border-primary hover:bg-primary/80"
              href=""
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Resume
            </Link>
          </div>

          {/* Technology icons */}
          <div className="flex items-center space-x-4 pt-4 text-btn">
            {socialIcons.map(({ id, icon, href }) => (
              <Link
                href={href}
                key={id}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all bg-primary hover:bg-primary/80"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
           <IconCloudSlug />
        </div>
      </div>
    </div>
  );
}
