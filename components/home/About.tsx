import Link from "next/link";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export default function About() {
  return (
    <div className="pb-16">
      <hgroup className="flex flex-col gap-3 mb-6">
        <h2 className="text-secondary text-xs font-bold">
          <span className="text-primary">02 </span>
          WHO AM I
        </h2>
        <p className="heading-size font-bold leading-none">
          About me
        </p>
      </hgroup>

      <div className="space-y-6 max-w-[72ch] text-sub text-pretty">
        <p>
          Hi! I'm <strong>Shanto</strong>. My coding journey began in 2020 when I stumbled across a few coding tutorials on YouTube out of curiosity. Since then, I've explored countless courses and different approaches to learning software development.
        </p>
        <p>
          I write <span className="font-bold text-white">backends in Node.js</span>, ship <span className="font-bold text-white">frontends in React & Next.js</span>, and run the boring infra in between so the interesting parts stay interesting.
        </p>
        <p>
          I like to read so when I'm not coding I'm reading, studying my online courses, playing chess, and listening to music.
        </p>
        <p>
          My focus is on keeping things simple: building systems that are clean, easy to maintain, and strong enough to last.
        </p>
        <div className="pt-5">
          <Link href="https://github.com/shantoopaul">
            <InteractiveHoverButton>
              Visit Github
            </InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
