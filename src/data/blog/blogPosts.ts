export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  imageKey: string;
  excerpt: string;
  readTime: string;
  content: string[];
}

export const blogCategories = [
  'All',
  'Technology',
  'Project Management',
  'Creativity',
  'Design',
  'Travel',
  'Career',
  'Life',
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'fashion-project-management',
    title: 'What Fashion Taught Me About Project Management',
    category: 'Project Management',
    date: '2026-07-12',
    imageKey: 'blogFeatured',
    excerpt: 'Long before I opened a spreadsheet, I was pinning fabric to a dress form. The lessons from the atelier map onto delivery cycles more cleanly than I expected.',
    readTime: '6 min read',
    content: [
      'In fashion, you start with a sketch — a vision that exists only in your head and on paper. Then you drape, cut, and pin until the idea becomes something you can hold. Project management is not so different. You begin with a brief, a goal, a desired outcome, and you work backwards through constraints until you have a plan.',
      'The first lesson is about fit. A garment that looks beautiful on paper can fail on a body. A project plan that looks elegant in a Gantt chart can fall apart on contact with reality. The fix is the same in both cases: iterate against the real thing as early as possible. Drape the muslin. Run the sprint. Do not wait until the final fitting to discover the shoulders are too narrow.',
      'The second lesson is about sequence. In a studio, you cannot finish the hem before you cut the lining. There is an order, and violating it wastes material and time. Delivery schedules have the same dependency chains, and the temptation to parallelize everything is the project equivalent of sewing the buttons on before the placket is finished.',
      'The third lesson is about restraint. A collection that tries to say everything ends up saying nothing. A project scope that tries to deliver everything ends up shipping nothing on time. Editing — the willingness to cut good ideas so the great ones can breathe — is the most underrated skill in both fields.',
      'None of this is a metaphor I am forcing. The overlap is structural. Both disciplines are about turning intention into something real, under constraints, with a team, on a deadline. The atelier just taught me the instincts before the terminology did.',
    ],
  },
  {
    slug: 'creative-side-of-technology',
    title: 'The Creative Side of Technology',
    category: 'Technology',
    date: '2026-06-28',
    imageKey: 'blog2',
    excerpt: 'Technology is often framed as the opposite of creativity — cold logic versus warm intuition. In practice, the most interesting work happens where the two overlap.',
    readTime: '5 min read',
    content: [
      'There is a persistent myth that technology is the structured side of work and creativity is the unstructured side. In my experience, the best engineers are deeply creative, and the best creative work is deeply technical.',
      'Writing code is an act of design. You are shaping something that does not yet exist, making thousands of small decisions about structure, naming, and flow. The constraints — syntax, performance, compatibility — are just the material you are working with, like fabric or clay.',
      'The reverse is also true. Creative work benefits enormously from technical fluency. A designer who understands the medium can push it further. A writer who understands the platform can format for impact. The tools are not separate from the craft.',
      'What I find most interesting is the space where the two explicitly meet: generative systems, interactive experiences, data-driven narratives. These are places where logic and aesthetics are not in tension but in collaboration.',
      'The practical takeaway is simple. If you come from a creative background, do not treat technology as a barrier. If you come from a technical background, do not treat creativity as decoration. The richest work is in the overlap.',
    ],
  },
  {
    slug: 'moving-to-canada-starting-again',
    title: 'Moving to Canada and Starting Again',
    category: 'Travel',
    date: '2026-05-15',
    imageKey: 'blog3',
    excerpt: 'Starting over in a new country is not a single decision — it is a thousand small ones, made daily, in a language that is technically yours but does not yet feel like home.',
    readTime: '7 min read',
    content: [
      'The thing nobody tells you about emigrating is that the big move is easy. You pack boxes, you book flights, you sign documents. The hard part starts the day after, and continues for years.',
      'I moved to Canada with a plan and no plan. The plan was to build a life. The no-plan was everything else — where to live, how to work, who to become. The first months were a study in controlled disorientation.',
      'What helped was treating the city like a studio. Walk every neighborhood. Learn the light at different times of day. Figure out which coffee shop has the right noise level for thinking. Build a mental map before you build a life.',
      'The professional reset was harder. Credentials do not always translate. Networks do not transfer. You start with a thinner version of yourself and have to rebuild density. This is humbling, and also clarifying — you find out which parts of your identity are structural and which were contextual.',
      'I do not have a tidy conclusion. The process is ongoing. What I can say is that starting again is not starting from zero. You carry everything you learned, just without the scaffolding that made it invisible. For a while, you see the scaffolding. That is the gift hidden inside the difficulty.',
    ],
  },
  {
    slug: 'project-management-creative-discipline',
    title: 'Why Project Management Is Also a Creative Discipline',
    category: 'Creativity',
    date: '2026-04-30',
    imageKey: 'blog1',
    excerpt: 'Project management gets filed under operations, but the best project managers I have worked with operate more like art directors than administrators.',
    readTime: '5 min read',
    content: [
      'The word management carries a bureaucratic weight. But managing a project — shaping how a team moves from an idea to a delivered thing — is a creative act. You are designing a process, not just following one.',
      'A good project manager makes choices. Which risks are worth taking? Which trade-offs serve the outcome? When do you hold the line on scope and when do you flex? These are design decisions, made under uncertainty, with real consequences.',
      'The creative part is also in communication. Translating a technical constraint for a stakeholder. Framing a delay as an opportunity. Finding the sentence that helps two people who are talking past each other actually hear each other. This is craft.',
      'I think the field undersells itself by reaching for process frameworks as the primary identity. The frameworks are tools. The work is interpretation, judgment, and taste — the same skills you use in any creative discipline, applied to a different material.',
    ],
  },
  {
    slug: 'design-thinking-beyond-design',
    title: 'Design Thinking Beyond Design',
    category: 'Design',
    date: '2026-03-18',
    imageKey: 'blog5',
    excerpt: 'Design thinking escaped the design studio years ago. The question is whether it retained its value in the wild or became a hollow buzzword.',
    readTime: '4 min read',
    content: [
      'Design thinking has been adopted, adapted, diluted, and rebranded so many times that it is worth asking what the term actually points to anymore.',
      'At its core, the useful idea is simple: start with the person who will use the thing, prototype before you commit, and treat iteration as a feature rather than a failure. Everything else is packaging.',
      'Where it works, it works because it forces a shift in posture — from solving for a user to solving with them, from delivering a finished thing to learning through making. That shift is valuable in any field, not just design.',
      'Where it fails, it fails because organizations adopt the vocabulary without the posture. You cannot run a workshop, put sticky notes on a wall, and call it design thinking if the decision-making structure has not changed. The method without the mindset is theater.',
      'The takeaway: keep the principles, drop the ceremony if the ceremony is not serving the principles.',
    ],
  },
  {
    slug: 'career-no-straight-line',
    title: 'Building a Career That Didn\'t Follow a Straight Line',
    category: 'Career',
    date: '2026-02-05',
    imageKey: 'blog6',
    excerpt: 'Every career advice article assumes a ladder. Mine was more like a path through a forest — visible in hindsight, invisible in the moment, and full of detours that turned out to be the point.',
    readTime: '6 min read',
    content: [
      'I used to worry that my career was incoherent. Fashion, then technology, then project management, then some combination of all three. On paper, it looked like I could not commit.',
      'In hindsight, the thread is obvious. Every role was about the same thing: turning ideas into things, with people, under constraints. The medium changed. The instinct did not.',
      'The pressure to specialize early is real, and I do not think it is bad advice — for some people. But it is not the only path. There is a kind of expertise that comes from depth in one area, and a kind that comes from breadth across several. The latter is harder to explain on a resume but increasingly valuable in practice.',
      'What I would tell someone starting out: do not optimize for a coherent narrative in the moment. Optimize for interesting work and good people. The narrative will assemble itself later, and it will be more interesting than the one you could have planned.',
      'The detours were not delays. They were the education.',
    ],
  },
];
