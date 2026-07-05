export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    type: string;
    tech: string[];
    link: string;
    github: string;
    problems: string;
    futurePlans: string;
}

export const projects: Project[] = [
    {
        id: 1,
        slug: "ticket-bounty",
        title: "Ticket Bounty",
        description:
            "A full-stack CRUD application for managing a ticket-based bounty system. It allows users to create, view, edit, and delete tickets, each with a title, description, status (Open, In Progress, Done), deadline, and a bounty in US dollars. Users can also engage in discussions on specific tickets through a comment system featuring infinite scrolling.",
        image: "/portfolio/ticketbounty.png",
        type: "Personal Project",
        tech: [
            "Next.js",
            "React.js",
            "TypeScript",
            "Tailwind CSS",
            "Prisma ORM",
            "Supabase",
            "Lucia",
            "TanStack Query",
            "Zod",
            "Vercel",
        ],
        link: "https://ticket-bounty-blond.vercel.app/",
        github: "https://github.com/shantoopaul/ticket-bounty",
        problems:
            "Like most projects, I ran into a few bumps along the way, one particularly difficult area was managing complex state across the application, particularly for the ticket list and comments. Synchronizing URL search parameters for pagination, sorting, and searching using nuqs while simultaneously handling infinite scrolling for comments via React Query and the Intersection Observer API required careful orchestration. Balancing server-side data fetching with client-side cache invalidation was crucial to prevent race conditions and ensure a seamless user experience without unnecessary re-renders.",
        futurePlans:
            "Looking further ahead, I plan to integrate a real payment gateway to handle the actual distribution and escrow of the ticket bounties. Additionally, replacing standard server action re-validation with real-time database subscriptions (such as WebSockets) would greatly enhance the collaborative aspect of the platform, allowing users to see new comments and ticket status updates instantly without manual refreshing or polling.",
    },
    {
        id: 2,
        slug: "newz",
        title: "Newz",
        description:
            "A comprehensive news aggregation platform that offers trending articles, premium content, and a seamless user experience. It allows users to read, submit, and manage articles, while admins can oversee publishers and moderate content. The platform features a subscription model for premium articles, secure user authentication, and an analytics dashboard.",
        image: "/portfolio/Newz.png",
        type: "Personal Project",
        tech: [
            "React.js",
            "Tailwind CSS",
            "Firebase Auth",
            "Node.js",
            "Express",
            "MongoDB",
            "Stripe",
            "TanStack Query",
            "Framer Motion",
            "Axios",
            "React Router",
        ],
        link: "https://newz-2025.web.app/",
        github: "https://github.com/shantoopaul/Newz-client-side",
        problems:
            "Developing a multi-role platform like Newz presented several architectural challenges, particularly in managing secure, role-based access control and state synchronization. Implementing a seamless subscription flow required carefully orchestrating Stripe's payment intents with client-side state to ensure users were correctly upgraded to premium status without page reloads. Additionally, handling JWT authentication securely via Axios interceptors to automatically manage token injection and gracefully handle 401/403 errors by redirecting unauthenticated users required a robust middleware approach. Balancing the data fetching for trending articles, user statistics, and admin charts using TanStack Query also demanded careful cache invalidation strategies to keep the UI responsive and up-to-date.",
        futurePlans:
            'Looking ahead, I plan to introduce the "Family" subscription tier, allowing multiple users to share a single premium plan. I also aim to implement real-time notifications using WebSockets so users receive instant updates when their submitted articles are approved or declined by admins. Furthermore, adding a commenting system for articles and integrating social media sharing features would greatly enhance community engagement, while migrating the image hosting from a third-party API to a dedicated cloud storage bucket would improve asset management and load performance.',
    },
    {
        id: 3,
        slug: "study-buddies",
        title: "Study Buddies",
        description:
            "A collaborative web application designed for online learning and peer assessment. It allows users to create, submit, and grade assignments, fostering an interactive study environment. The platform features secure user authentication, comprehensive assignment management with CRUD operations, a structured grading system with feedback, and dynamic search and filtering capabilities.",
        image: "/portfolio/studybuddies.png",
        type: "Personal Project",
        tech: [
            "React.js",
            "Vite",
            "Tailwind CSS",
            "DaisyUI",
            "Firebase Auth",
            "React Router",
            "Axios",
            "Node.js",
            "Express.js",
            "MongoDB",
        ],
        link: "https://studybuddies-2024.web.app/",
        github: "https://github.com/shantoopaul/study-buddies-client-side",
        problems:
            "During development, managing global authentication state and implementing secure, role-based access control presented notable challenges. Ensuring that only assignment creators could update or delete their work, while preventing users from grading their own submissions, required careful state validation and conditional rendering. Additionally, synchronizing asynchronous API calls for real-time data fetching, form submissions, and dynamic filtering without causing unnecessary re-renders demanded precise state management and robust error handling.",
        futurePlans:
            "Looking ahead, integrating real-time notifications for assignment submissions and grading updates would significantly enhance user engagement and collaboration. Replacing external URL inputs with a robust, built-in file upload system for assignment attachments and submissions would streamline the overall user experience. Furthermore, adding an analytics dashboard to track academic progress over time and implementing advanced pagination for the assignments list would improve both the platform's utility and its performance as the user base grows.",
    },
    {
        id: 4,
        slug: "rock-paper-scissors",
        title: "Rock, Paper, Scissors",
        description:
            "A classic Rock, Paper, Scissors game built with vanilla frontend technologies, featuring smooth animations, a dynamic scoreboard, and a fully responsive layout. The player competes against the computer in a best-of-round format, with results displayed through animated transitions and a modal-based rules guide.",
        image: "/portfolio/Rock-Paper-Scissors.png",
        type: "Personal Project",
        tech: ["HTML5", "CSS3", "SASS", "JavaScript"],
        link: "https://sleekrockpaperscissor.netlify.app/",
        github: "https://github.com/shantoopaul/rock-paper-scissors",
        problems:
            "One of the primary challenges was orchestrating the complex CSS animations and state transitions between the game selection screen and the result screen. Coordinating multiple keyframe animations, such as the initial circle entrance, the result reveal delay, and the slide-in effects for the player and computer picks required precise timing using animation-delay and backwards fill modes to ensure a seamless visual flow. Additionally, positioning the three circular choices in a perfect triangular layout across multiple responsive breakpoints demanded careful use of absolute positioning and media queries to maintain visual consistency from desktop down to mobile screens.",
        futurePlans:
            "Looking ahead, I intend to implement persistent score tracking using localStorage so players can retain their progress across sessions, add adjustable difficulty levels for the computer's AI, and introduce sound effects and haptic feedback for a more immersive experience. Finally, a multiplayer mode using WebSockets would allow players to challenge friends in real-time rather than playing solely against the computer.",
    },
];