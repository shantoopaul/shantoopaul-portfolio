import GithubButton from "@/components/shared/GithubButton";

export default function About() {
  return (
    <div className="py-16">
      <h2 className="text-4xl md:text-5xl mb-6">
        About Me
      </h2>

      <div className="space-y-6 max-w-[72ch] text-sub text-pretty">
        <p>
          Hi! I&apos;m <strong>Shanto</strong>. My coding journey started in 2020 when I stumbled upon some coding tutorials on YouTube out of curiosity. Since then, I&apos;ve explored many courses and different ways to learn coding. To take it seriously, I completed the <strong>Programming Hero Complete Web Development</strong> course earlier this year.
        </p>
        <p>
          I enjoy both sides of development: designing smooth, clean interfaces and solving tricky problems behind the scenes.
        </p>
        <p>
          When I&apos;m not coding, I usually watch YouTube, play video games, or plan my next world domination scheme :)
        </p>
        <p>
          My focus is on keeping things simple: building systems that are clean, easy to maintain, and strong enough to last.
        </p>
        <div className="pt-5">
          <GithubButton />
        </div>
      </div>
    </div>
  );
}
