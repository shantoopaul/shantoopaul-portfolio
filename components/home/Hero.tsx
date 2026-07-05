import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

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
            <span className="ml-2">Hi there, I'm Shanto</span>
            <span className="text-tertiary ml-2">{"</span>"}</span>
          </div>

          {/* Main heading */}
          <h1 className="space-y-0 sm:space-y-2 text-balance">
            <span className="text-4xl md:text-5xl font-bold leading-tight text-secondary block">
              {"{Full-Stack}"}
            </span>
            <span className="text-4xl md:text-5xl font-bold leading-tight">
              Developer<span className="text-secondary">_</span>
            </span>
          </h1>

          {/* Description paragraph */}
          <div className="sm:text-lg max-w-[60ch]">
            <span className="text-tertiary">{"<p>"}</span>
            <p className="ml-2 text-sub inline">
              Based in <a href="https://www.google.com/maps/place/Dhaka, Bangladesh" className="border-b-2 border-dashed border-b-tertiary">Dhaka, Bangladesh</a>. I enjoy building pixel-perfect interactive apps through strategy, design and engineering.
            </p>
            <span className="text-tertiary ml-2">{"</p>"}</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 text-btn">
            <Link
              href="#contact"
              className="px-8 py-2 rounded-full font-medium transition-all bg-primary hover:bg-primary/80"
            >
              Hire me
            </Link>
            <Link
              className="px-8 py-2 rounded-full font-medium transition-all border-2 border-primary hover:bg-primary/80"
              href="/Shanto-Paul-Full-Stack-Developer-Resume.pdf"
              target="_blank"
              download
            >
              Resume
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-4 pt-4 text-btn">
            {socialIcons.map(({ id, icon, href }) => (
              <Link
                href={href}
                key={id}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all bg-secondary hover:bg-secondary/80"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center">
          <div className="relative hero-image-size flex items-center justify-center">
            <div
              className="w-[80%] h-[80%] overflow-hidden"
              style={{
                clipPath: "polygon(50% 4%, 92% 27%, 92% 73%, 50% 96%, 8% 73%, 8% 27%)",
              }}
            >
              <Image
                src={"/shanto-paul.png"}
                alt="Shanto Paul"
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>
            <svg viewBox="0 0 100 100" className="absolute w-fit h-11/12 animate-spin-slow">
              <defs>
                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" />
                  <stop offset="100%" stopColor="var(--color-tertiary)" />
                </linearGradient>
              </defs>
              <polygon
                points="50,2 95,26 95,74 50,98 5,74 5,26"
                fill="none"
                stroke="url(#hexGradient)"
                strokeWidth="1.5"
                strokeDasharray="8 6"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
