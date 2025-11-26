import { IconCloud } from "../ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "tailwindcss",
  "mongodb",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postman",
  "firebase",
  "vercel",
  "git",
  "github",
  "sass",
  "figma",
];

export default function IconCloudSlug() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} color="#72757e" />
    </div>
  );
}
