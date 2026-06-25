// ── Block types ─────────────────────────────────────────────────────────────

export type Block =
  | { type: 'p';      text: string }
  | { type: 'h3';     text: string }
  | { type: 'analogy'; text: string }
  | { type: 'ul';     items: string[] }
  | { type: 'ol';     items: string[] }
  | { type: 'table';  headers: string[]; rows: string[][] }
  | { type: 'code';   language: string; text: string };

export interface Subsection {
  heading: string;
  blocks: Block[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
}

// ── Module 1: Runtimes ───────────────────────────────────────────────────────

export const RUNTIMES_CONTENT: Subsection[] = [
  {
    heading: 'What is a runtime and why does it exist?',
    blocks: [
      {
        type: 'p',
        text: 'JavaScript was invented in 1995 to run inside web browsers. Brendan Eich wrote the first version in ten days for Netscape. Its entire purpose was to make web pages interactive — validate a form, animate a button, nothing more.',
      },
      {
        type: 'p',
        text: 'The browser contains a JavaScript **engine** — a program that reads JavaScript and executes it. Chrome uses an engine called V8. Firefox uses SpiderMonkey. Safari uses JavaScriptCore. These engines are what actually understand JavaScript and turn it into instructions your CPU can run.',
      },
      {
        type: 'p',
        text: 'For the first thirteen years of JavaScript\'s existence, if you wanted to run JavaScript, you needed a browser. There was no other option.',
      },
      {
        type: 'p',
        text: 'A **runtime** is the environment that lets a language execute. It\'s not the language itself — it\'s everything around the language that makes it runnable: the engine, the APIs available to it, the way it talks to the operating system. JavaScript in a browser has access to browser APIs — `document`, `window`, `fetch`. These don\'t exist outside a browser. They\'re part of the browser runtime, not the language.',
      },
      {
        type: 'p',
        text: 'In 2009, Ryan Dahl took Chrome\'s V8 engine and stripped it out of the browser. He wrapped it with a layer that let JavaScript talk to the operating system directly — read files, open network connections, run as a server. He called it Node.js.',
      },
      {
        type: 'p',
        text: 'This was the moment JavaScript escaped the browser. Suddenly the same language you used to make buttons change colour could run a web server, process files, or power a build tool. Node.js didn\'t change JavaScript. It changed **where** JavaScript could run.',
      },
      {
        type: 'analogy',
        text: '**The analogy:** JavaScript is a language, like English. A runtime is the context in which English is spoken — a courtroom, a pub, a lecture hall. The words are the same but what\'s available to you, the rules, and the audience are completely different. Node.js is one context. The browser is another.',
      },
    ],
  },
  {
    heading: 'Node.js — the default',
    blocks: [
      {
        type: 'p',
        text: 'Node.js is thirteen years old. In developer terms, that makes it ancient — and that\'s its biggest advantage.',
      },
      {
        type: 'p',
        text: 'When you install Node.js, you get:',
      },
      {
        type: 'ul',
        items: [
          'The V8 engine (the same one Chrome uses)',
          'A standard library for talking to the operating system — reading files, making network requests, running processes',
          'npm, the package manager, bundled alongside it',
          'A massive ecosystem of packages — over 2.5 million on npmjs.com',
        ],
      },
      {
        type: 'p',
        text: 'That ecosystem is the real reason Node.js dominates. Every tool you\'re using — Next.js, Tailwind, Supabase\'s JavaScript client, everything installed with `npm install` — was built assuming Node.js. The packages work. The documentation assumes Node. Stack Overflow answers assume Node.',
      },
      {
        type: 'p',
        text: 'When you run `npm run dev`, here\'s what\'s actually happening:',
      },
      {
        type: 'ol',
        items: [
          'Node.js starts executing your Next.js code',
          'Next.js starts a local HTTP server on port 3000',
          'It watches your files for changes',
          'When you save a file, it recompiles just that part and pushes the update to your browser instantly (hot reloading)',
          'When you open localhost:3000, your browser sends a request to that local server, which responds with your page',
        ],
      },
      {
        type: 'p',
        text: 'When Vercel deploys your site, it runs `npm run build` instead — which compiles and optimises everything for production. No hot reloading, no development warnings, code is minified and compressed. This is why behaviour can occasionally differ between local and production.',
      },
      {
        type: 'p',
        text: '**Node.js weaknesses:**',
      },
      {
        type: 'ul',
        items: [
          'Designed in 2009, before modern JavaScript had many features now considered standard. Some of its APIs feel dated.',
          'Security model is permissive by default — code can access your filesystem, network, and environment variables without asking permission.',
          'npm has had security incidents because any package you install can do almost anything.',
          'Performance is good but not exceptional compared to newer alternatives.',
        ],
      },
      {
        type: 'analogy',
        text: '**Who should use Node.js:** Everyone who isn\'t deliberately choosing something else. If you\'re building with Next.js, you\'re using Node.js. There\'s no decision to make.',
      },
    ],
  },
  {
    heading: 'Deno — the principled alternative',
    blocks: [
      {
        type: 'p',
        text: 'Ryan Dahl — the same person who created Node.js — gave a talk in 2018 called "10 Things I Regret About Node.js." Then he built Deno to fix those regrets.',
      },
      {
        type: 'p',
        text: 'Deno (pronounced dee-no, an anagram of Node) launched in 2020. Its core differences:',
      },
      {
        type: 'p',
        text: '**Security by default.** Deno code cannot access your filesystem, network, or environment variables unless you explicitly grant permission when running it. `deno run --allow-net server.ts` means this script can use the network. Nothing else. In Node, any package you install can do anything — read your SSH keys, phone home, access your database credentials. Deno\'s permission model prevents this.',
      },
      {
        type: 'p',
        text: '**TypeScript built in.** In Node.js, running TypeScript requires extra setup — you install a compiler, configure it, add build steps. Deno runs TypeScript natively, no configuration needed. You write `.ts` files and run them directly.',
      },
      {
        type: 'p',
        text: '**No node_modules.** Deno imports packages directly from URLs rather than installing them locally. No npm, no package.json, no node_modules folder. Deno caches packages globally on your machine instead.',
      },
      {
        type: 'p',
        text: '**Modern APIs.** Deno uses web-standard APIs wherever possible — the same `fetch`, `Request`, and `Response` objects you\'d use in a browser. Code written for Deno is closer to portable web code.',
      },
      {
        type: 'p',
        text: '**Deno\'s problem:** ecosystem. The npm ecosystem has 2.5 million packages built for Node. Deno has a fraction of that. Deno added npm compatibility in 2022, which helps — but it\'s still playing catch-up. Most frameworks, tools, and libraries are designed for Node first.',
      },
      {
        type: 'p',
        text: 'Deno 2.0 launched in 2024 with significantly improved npm compatibility and a new package manager. It\'s more practical than it was, but still niche compared to Node.',
      },
      {
        type: 'analogy',
        text: '**Who should use Deno:** Developers who prioritise security and are building something new where they can choose their own packages. Not the right choice if you\'re using Next.js — Next.js runs on Node.',
      },
    ],
  },
  {
    heading: 'Bun — the fast one',
    blocks: [
      {
        type: 'p',
        text: 'Bun is the newest of the three, launched in 2023 by Jarred Sumner. Its pitch is simple: everything Node does, but significantly faster.',
      },
      {
        type: 'p',
        text: 'Bun is not built on V8 (Chrome\'s engine). It\'s built on JavaScriptCore — the engine Safari uses — and written in a lower-level language called Zig. This gives it a performance advantage: Bun starts faster, installs packages faster, and runs many workloads faster than Node.',
      },
      {
        type: 'p',
        text: 'Bun is also all-in-one. Where Node gives you a runtime and npm gives you package management separately, Bun is a single tool that replaces both — plus a bundler and a test runner. You install Bun, and you have everything.',
      },
      {
        type: 'p',
        text: '**The speed numbers are real.** Bun installs packages roughly 25x faster than npm. Script startup time is noticeably quicker. For certain server workloads, Bun benchmarks faster than Node. These aren\'t marginal differences.',
      },
      {
        type: 'p',
        text: '**Bun\'s problem:** maturity. It\'s two years old. Node is thirteen. Edge cases exist where Bun doesn\'t perfectly replicate Node\'s behaviour. Some packages that assume Node internals break. And "faster" matters less than you\'d think for most web apps — your database query takes 50ms, your runtime startup taking 10ms vs 100ms is irrelevant to your user.',
      },
      {
        type: 'p',
        text: '**Switching from Node to Bun** is mostly straightforward for simple projects. You install Bun, replace `npm` commands with `bun` equivalents (`bun install` instead of `npm install`, `bun run dev` instead of `npm run dev`), and most things work. Some don\'t. For a mature project with many dependencies, the risk isn\'t worth the speed gain.',
      },
      {
        type: 'analogy',
        text: '**Who should use Bun:** Developers starting new projects who want speed and don\'t mind occasional rough edges. Also useful as a drop-in for npm in Node projects — many developers use Bun just for faster package installation while keeping Node as the runtime.',
      },
    ],
  },
  {
    heading: 'The verdict — and what you should actually use',
    blocks: [
      {
        type: 'table',
        headers: ['', 'Node.js', 'Deno', 'Bun'],
        rows: [
          ['Age',              '2009',          '2020',                '2023'],
          ['Engine',           'V8',            'V8',                  'JavaScriptCore'],
          ['Speed',            'Good',          'Good',                'Faster'],
          ['npm packages',     'All of them',   'Most (via compat)',   'Most'],
          ['TypeScript',       'Needs setup',   'Built in',            'Built in'],
          ['Security',         'Permissive',    'Strict by default',   'Permissive'],
          ['Maturity',         'Very high',     'Medium',              'Low-medium'],
          ['Next.js support',  'Native',        'No',                  'Partial/experimental'],
        ],
      },
      {
        type: 'p',
        text: '**What you should use:** Node.js. Not because it\'s the best in every dimension — it isn\'t. Because you\'re building with Next.js, which runs on Node. Because every package you\'ll ever need works on Node. Because when something breaks, every answer online assumes Node.',
      },
      {
        type: 'p',
        text: 'The runtime debate matters more when you\'re building something from scratch and can choose your entire stack freely. You\'re not — you have existing projects, existing packages, existing deployments. The switching cost outweighs any benefit.',
      },
      {
        type: 'analogy',
        text: '**The insight worth keeping:** Deno and Bun exist because Node has real weaknesses — its permissive security model, its age, its performance ceiling. These alternatives will become more relevant as they mature. In two or three years, Bun in particular may be the obvious default for new projects. For now, Node is the safe, correct choice — and understanding why you\'re choosing it matters more than just using it by default.',
      },
    ],
  },
];

// ── Module 1 Quiz ────────────────────────────────────────────────────────────

export const MODULE1_QUIZ: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'JavaScript was originally designed to run where?',
    options: [
      'On a server',
      'Inside web browsers',
      'On the command line',
      'Inside mobile apps',
    ],
    correct: 1,
  },
  {
    id: 'q2',
    question: 'What did Node.js actually change about JavaScript?',
    options: [
      'It made JavaScript faster',
      'It added new syntax to the language',
      'It allowed JavaScript to run outside the browser, on a server or machine',
      'It replaced the V8 engine with a faster one',
    ],
    correct: 2,
  },
  {
    id: 'q3',
    question: 'When you run `npm run dev`, what is Node.js doing?',
    options: [
      'Uploading your code to Vercel',
      'Starting a local HTTP server on your machine so you can preview the site',
      'Compiling your code for production',
      'Installing missing packages',
    ],
    correct: 1,
  },
  {
    id: 'q4',
    question: "What is Deno's most distinctive feature compared to Node?",
    options: [
      "It's faster",
      'It supports more packages',
      'It requires explicit permission before code can access files, network, or environment variables',
      'It was built by a different team than Node',
    ],
    correct: 2,
  },
  {
    id: 'q5',
    question: 'Why is Bun faster than Node.js?',
    options: [
      'It uses a different programming language for JavaScript',
      "It's built on JavaScriptCore instead of V8, and written in a lower-level language called Zig",
      'It skips package installation entirely',
      'It compresses your code before running it',
    ],
    correct: 1,
  },
  {
    id: 'q6',
    question: "You're building a new feature in your existing Next.js project. Someone suggests switching to Bun. What's the main risk?",
    options: [
      "Bun doesn't support JavaScript",
      "You'd have to rewrite your code in a different language",
      "Some packages that assume Node.js internals may break, and Next.js doesn't officially support Bun",
      'Bun is slower than Node for Next.js projects',
    ],
    correct: 2,
  },
  {
    id: 'q7',
    question: "What is npm's relationship to Node.js?",
    options: [
      "npm is part of Node.js's core engine",
      'npm is a competitor to Node.js',
      'npm is a separate package manager that comes bundled with Node.js, connecting to a registry of 2.5 million packages',
      'npm replaces Node.js for package-heavy projects',
    ],
    correct: 2,
  },
  {
    id: 'q8',
    question: "Which runtime would be the best choice for a brand new project where security is critical and you don't need Next.js?",
    options: [
      "Node.js, because it has the most packages",
      "Bun, because it's the fastest",
      'Deno, because of its strict permission model and built-in TypeScript support',
      'All three are equally good for security-critical projects',
    ],
    correct: 2,
  },
];

// ── Module 2: UI Libraries ───────────────────────────────────────────────────

export const UI_LIBRARIES_CONTENT: Subsection[] = [
  {
    heading: 'What a webpage is actually made of',
    blocks: [
      {
        type: 'p',
        text: "Before React, Vue, or any library makes sense, you need to know what's underneath all of them.",
      },
      {
        type: 'p',
        text: 'Every webpage — no matter how complex — is built from three things.',
      },
      {
        type: 'p',
        text: "**HTML** is the structure. It defines what exists on the page: a heading, a paragraph, an image, a button. It's not a programming language — it's a markup language. You're labelling content, not writing logic. `<h1>Hello</h1>` means \"this is a top-level heading that says Hello.\" That's it.",
      },
      {
        type: 'p',
        text: '**CSS** is the appearance. It takes the HTML structure and makes it look like something — colours, fonts, spacing, layout, animations. Without CSS, every webpage looks like a plain text document from 1995. CSS is also not a programming language. It\'s a set of rules: "make all h1 elements purple, 32 pixels, bold."',
      },
      {
        type: 'p',
        text: "**JavaScript** is the behaviour. It's the only actual programming language of the three. JavaScript makes things happen: when you click a button, when a menu opens, when data loads without the page refreshing. JavaScript can read and modify the HTML and CSS of a page while it's running — this is called manipulating the DOM.",
      },
      {
        type: 'p',
        text: "**The DOM** (Document Object Model) is the browser's internal representation of your page. When your browser reads HTML, it converts it into a tree of objects in memory — every element becomes a node in that tree. JavaScript can reach into that tree and change it: add elements, remove them, update text, swap classes. When the DOM changes, the browser updates what you see on screen instantly.",
      },
      {
        type: 'p',
        text: 'This is the foundation. HTML, CSS, JavaScript, DOM. Every UI library — React, Vue, Svelte — is built on top of these. They don\'t replace them. They make working with them less painful.',
      },
      {
        type: 'analogy',
        text: "**The analogy:** HTML is the blueprint of a building — walls, doors, windows. CSS is the interior design — paint, furniture, lighting. JavaScript is the electricity and plumbing — makes things actually work. The DOM is the building as it currently stands, which JavaScript can renovate in real time.",
      },
    ],
  },
  {
    heading: "The problem React solves — and why vanilla JavaScript isn't enough",
    blocks: [
      {
        type: 'p',
        text: "In the early days of the web, developers manipulated the DOM directly using vanilla JavaScript — plain JavaScript with no libraries.",
      },
      {
        type: 'p',
        text: "This works fine for simple things. Change a colour when someone clicks. Show a menu. Hide an element. But as web applications got more complex — think Gmail, Google Maps, Facebook's news feed — direct DOM manipulation became a nightmare.",
      },
      {
        type: 'p',
        text: "Here's why. Imagine you're building a social feed. A post can be liked, commented on, shared, saved, reported. The like count updates in real time. Comments appear without page refresh. The same post might appear in three places on the page simultaneously. Every time the data changes, you have to manually find every DOM element that displays that data and update each one. Miss one, and your UI shows stale data. Do it in the wrong order, and you get flickering.",
      },
      {
        type: 'p',
        text: "This is the problem React solves: **keeping your UI in sync with your data.**",
      },
      {
        type: 'p',
        text: "React's core idea is simple. Instead of manually updating the DOM when data changes, you describe what the UI *should look like* for any given state, and React figures out the minimum DOM changes needed to get there. You stop thinking \"update this element\" and start thinking \"here's what the page should show when the data looks like this.\"",
      },
      {
        type: 'p',
        text: "This is called **declarative** programming. You declare the outcome. React handles the how.",
      },
      {
        type: 'p',
        text: "**Virtual DOM:** React keeps a lightweight copy of the DOM in memory — the virtual DOM. When your data changes, React updates the virtual DOM first, compares it to the previous version, figures out exactly what changed, and only touches the real DOM for those specific changes. This diffing process is fast and prevents unnecessary browser repaints.",
      },
      {
        type: 'analogy',
        text: "**The analogy:** Vanilla JavaScript is like giving someone directions turn by turn — \"go left, then right, then straight, then park.\" React is like giving them the destination and letting them figure out the route. You describe where you want to end up; React handles getting there.",
      },
    ],
  },
  {
    heading: 'React — the dominant choice',
    blocks: [
      {
        type: 'p',
        text: 'React was built by Facebook (now Meta) in 2013 and open-sourced that same year. It was born from a real problem: Facebook\'s UI was getting so complex that keeping it consistent was causing constant bugs. React was their internal solution before it became the world\'s most used UI library.',
      },
      {
        type: 'p',
        text: "**Components** are React's fundamental unit. A component is a JavaScript function that returns UI. Your navbar is a function that returns the HTML for your navigation. Your footer is a function. A button is a function. You build pages by composing these functions together.",
      },
      {
        type: 'code',
        language: 'jsx',
        text: `function Navbar() {
  return <nav>...</nav>
}

function Page() {
  return (
    <div>
      <Navbar />
      <main>...</main>
    </div>
  )
}`,
      },
      {
        type: 'p',
        text: '**State** is how React tracks data that can change. When a user clicks a like button, the like count is state — it changes, and the UI needs to reflect that change. React re-renders only the components affected by that state change, not the whole page.',
      },
      {
        type: 'p',
        text: '**JSX** is the syntax you see in React files — what looks like HTML inside JavaScript. `<Navbar />` isn\'t HTML, it\'s JSX. It gets compiled into regular JavaScript before the browser sees it. This is why you see `className` instead of `class` — `class` is a reserved word in JavaScript, so React uses `className` to avoid the conflict.',
      },
      {
        type: 'p',
        text: "**React's strengths:**",
      },
      {
        type: 'ul',
        items: [
          'Largest ecosystem — more packages, more tutorials, more Stack Overflow answers than anything else',
          'Backed by Meta with a large team maintaining it',
          'Next.js, the framework you use, is built on React',
          'Massive job market demand',
          'Battle-tested at enormous scale (Facebook, Instagram, Airbnb, Netflix)',
        ],
      },
      {
        type: 'p',
        text: "**React's weaknesses:**",
      },
      {
        type: 'ul',
        items: [
          "It's a library, not a framework — React only handles UI, you need other tools for routing, data fetching, state management at scale",
          'More boilerplate than newer alternatives',
          'The learning curve is steeper than Vue',
          'Bundle size is larger than Svelte',
        ],
      },
      {
        type: 'analogy',
        text: '**Who uses React:** Most of the web. If you\'re learning one UI library, React is still the default answer in 2026.',
      },
    ],
  },
  {
    heading: 'Vue — the approachable alternative',
    blocks: [
      {
        type: 'p',
        text: 'Vue was created by Evan You in 2014 — a single developer who previously worked at Google. He wanted to take what he liked about Angular (another early framework) and strip out everything he didn\'t.',
      },
      {
        type: 'p',
        text: "Vue's reputation is being easier to learn than React. Its template syntax is closer to regular HTML, which makes the jump from \"I know some HTML\" to \"I'm writing Vue components\" shorter.",
      },
      {
        type: 'code',
        language: 'html',
        text: `<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">Click me</button>
  </div>
</template>

<script>
export default {
  data() {
    return { message: 'Hello' }
  },
  methods: {
    changeMessage() {
      this.message = 'Changed'
    }
  }
}
</script>`,
      },
      {
        type: 'p',
        text: 'Notice how the template looks like HTML with some additions, rather than JavaScript that contains HTML-like code. For developers coming from a background of building websites rather than software, Vue\'s syntax feels more natural.',
      },
      {
        type: 'p',
        text: "**Vue's strengths:**",
      },
      {
        type: 'ul',
        items: [
          'Gentler learning curve than React',
          'Excellent documentation — consistently rated the best in the frontend world',
          "More opinionated than React — Vue gives you more built-in answers, less \"which library do I add for this?\"",
          "Nuxt.js (Vue's equivalent of Next.js) is excellent",
          'Popular in Asia, Europe, and particularly in enterprise software',
        ],
      },
      {
        type: 'p',
        text: "**Vue's weaknesses:**",
      },
      {
        type: 'ul',
        items: [
          'Smaller ecosystem than React — fewer packages, fewer tutorials',
          'Less job market demand than React in most English-speaking markets',
          'Not backed by a major corporation — more community-driven, but less guaranteed long-term support',
        ],
      },
      {
        type: 'analogy',
        text: "**Who uses Vue:** Developers who find React's approach unintuitive, companies in Europe and Asia, teams that prioritise developer experience. Also popular for adding interactivity to existing server-rendered sites without a full rewrite.",
      },
    ],
  },
  {
    heading: 'Svelte — the compiler approach',
    blocks: [
      {
        type: 'p',
        text: 'Svelte, created by Rich Harris in 2016, takes a fundamentally different approach to the problem.',
      },
      {
        type: 'p',
        text: 'React and Vue are runtime libraries — they ship code to the browser that runs continuously, managing the virtual DOM, tracking state changes, doing the diffing work. That library code has a size cost: React adds roughly 40kb to your bundle, Vue about 30kb.',
      },
      {
        type: 'p',
        text: "Svelte has no runtime. It's a **compiler**. You write Svelte components, and at build time Svelte compiles them into plain, optimised vanilla JavaScript that directly manipulates the DOM. The browser receives no Svelte library code — just the output.",
      },
      {
        type: 'p',
        text: 'This means:',
      },
      {
        type: 'ul',
        items: [
          'Smaller bundle sizes — less code sent to the browser',
          'Faster runtime performance — no virtual DOM diffing, direct DOM updates',
          "Less boilerplate — Svelte's syntax is notably cleaner than React's",
        ],
      },
      {
        type: 'code',
        language: 'svelte',
        text: `<script>
  let count = 0
</script>

<button on:click={() => count++}>
  Clicked {count} times
</button>`,
      },
      {
        type: 'p',
        text: "That's a complete interactive counter in Svelte. The equivalent in React requires importing hooks, defining state, writing a handler function. Svelte's simplicity is real.",
      },
      {
        type: 'p',
        text: "**Svelte's weaknesses:**",
      },
      {
        type: 'ul',
        items: [
          'Smallest ecosystem of the three — fewer packages, fewer tutorials',
          'SvelteKit (its framework equivalent) is less mature than Next.js or Nuxt',
          'Fewer developers know it, so hiring or getting help is harder',
          'The compiler approach means debugging can sometimes feel less transparent',
        ],
      },
      {
        type: 'analogy',
        text: '**Who uses Svelte:** Developers who prioritise performance and bundle size, teams building content sites or interactive data visualisations, people who find React and Vue overly complex for what they need.',
      },
    ],
  },
  {
    heading: 'Vanilla JavaScript — when you need nothing at all',
    blocks: [
      {
        type: 'p',
        text: '"Vanilla JavaScript" means plain JavaScript with no library — just the language itself, directly manipulating the DOM.',
      },
      {
        type: 'p',
        text: 'Modern JavaScript (ES6 and beyond) is genuinely powerful. `querySelector`, `addEventListener`, `fetch`, `classList` — the browser\'s native APIs have improved dramatically since React was born. For simple interactions — a mobile menu toggle, a scroll animation, a form validator — you often don\'t need React at all.',
      },
      {
        type: 'p',
        text: 'The case for vanilla JS:',
      },
      {
        type: 'ul',
        items: [
          'Zero bundle size overhead',
          'No library to learn, update, or maintain',
          'Runs everywhere, no build step required',
          'Often the right choice for small sites or simple interactions',
        ],
      },
      {
        type: 'p',
        text: 'The case against vanilla JS at scale:',
      },
      {
        type: 'ul',
        items: [
          'Managing complex state across many elements becomes messy fast',
          'No component system — you duplicate code or invent your own conventions',
          'No virtual DOM — manual DOM manipulation at scale causes bugs and performance issues',
        ],
      },
      {
        type: 'analogy',
        text: '**Your site** probably uses a mix — static content rendered by Next.js (which uses React under the hood), with vanilla JavaScript handling any simple interactive elements. This is normal and correct.',
      },
    ],
  },
  {
    heading: 'The verdict — and what you should use',
    blocks: [
      {
        type: 'table',
        headers: ['', 'React', 'Vue', 'Svelte', 'Vanilla JS'],
        rows: [
          ['Learning curve',   'Steep',       'Gentle',    'Gentle',      'None'],
          ['Ecosystem',        'Massive',      'Large',     'Small',       'N/A'],
          ['Bundle size',      '~40kb',        '~30kb',     'Near zero',   'Zero'],
          ['Performance',      'Very good',    'Very good', 'Excellent',   'Excellent'],
          ['Job market',       'Dominant',     'Strong',    'Niche',       'Universal'],
          ['Backed by',        'Meta',         'Community', 'Community',   'Browser vendors'],
          ['Framework equiv.', 'Next.js',      'Nuxt',      'SvelteKit',   'None'],
        ],
      },
      {
        type: 'p',
        text: "**What you should use:** React, via Next.js. You're already using it. The decision is made. React is not the most elegant — Svelte's syntax is cleaner, Vue's learning curve is gentler. But React's ecosystem is so large that for almost any problem you encounter, someone has solved it, packaged it, and published it on npm. That matters more than elegance when you're building alone.",
      },
      {
        type: 'analogy',
        text: "**The insight worth keeping:** The UI library debate is mostly irrelevant for what you're building. React, Vue, and Svelte all solve the same problem — keeping UI in sync with data. The concepts you learn in React (components, state, reactivity) transfer directly to Vue and Svelte. Master one and you can pick up the others in days. What matters more than which library you use is understanding *why* they exist.",
      },
    ],
  },
];

// ── Module 2 Quiz ────────────────────────────────────────────────────────────

export const MODULE2_QUIZ: QuizQuestion[] = [
  {
    id: 'm2q1',
    question: 'What are the three foundational technologies every webpage is built from?',
    options: [
      'JavaScript, React, and Node.js',
      'HTML, CSS, and JavaScript',
      'HTML, PHP, and CSS',
      'React, Vue, and Svelte',
    ],
    correct: 1,
  },
  {
    id: 'm2q2',
    question: 'What is the DOM?',
    options: [
      'A type of database used by browsers',
      'A React-specific concept for managing components',
      "The browser's internal tree-like representation of a webpage that JavaScript can read and modify",
      'A file format for storing webpage content',
    ],
    correct: 2,
  },
  {
    id: 'm2q3',
    question: 'What core problem does React solve that vanilla JavaScript struggles with at scale?',
    options: [
      'React makes JavaScript run faster',
      'Keeping the UI automatically in sync with changing data without manually updating every DOM element',
      'React replaces HTML and CSS entirely',
      'React allows JavaScript to run on a server',
    ],
    correct: 1,
  },
  {
    id: 'm2q4',
    question: 'In React terms, what is a component?',
    options: [
      'A pre-built animation from npm',
      'A CSS stylesheet scoped to a specific element',
      'A JavaScript function that returns UI and can be reused across your app',
      'A database table that stores page content',
    ],
    correct: 2,
  },
  {
    id: 'm2q5',
    question: 'What makes Svelte fundamentally different from React and Vue?',
    options: [
      'It uses a different programming language',
      "It doesn't support components",
      "It's a compiler — it converts your code to plain JavaScript at build time, shipping no library code to the browser",
      'It only works for mobile applications',
    ],
    correct: 2,
  },
  {
    id: 'm2q6',
    question: 'Why does React use `className` instead of `class` in JSX?',
    options: [
      "It's a React convention for styling components",
      'className is faster for the browser to process',
      '`class` is a reserved word in JavaScript, and JSX is compiled JavaScript — not actual HTML',
      'React does not support the class attribute at all',
    ],
    correct: 2,
  },
  {
    id: 'm2q7',
    question: 'For a simple mobile menu toggle on a marketing site, what is the most appropriate tool?',
    options: [
      'React, because it handles all UI interactions',
      'Vue, because it has a gentler learning curve',
      'Vanilla JavaScript — the interaction is simple enough that a library adds unnecessary complexity',
      'Svelte, because of its small bundle size',
    ],
    correct: 2,
  },
  {
    id: 'm2q8',
    question: "What is React's biggest practical advantage over Vue and Svelte in 2026?",
    options: [
      'It has the cleanest syntax',
      'It produces the smallest bundle sizes',
      'It is the fastest at runtime',
      'Its ecosystem — the sheer number of packages, tutorials, and developers who know it',
    ],
    correct: 3,
  },
];

// ── Module 3: Frameworks ─────────────────────────────────────────────────────

export const FRAMEWORKS_CONTENT: Subsection[] = [
  {
    heading: 'Library vs Framework — the distinction that matters',
    blocks: [
      {
        type: 'p',
        text: 'These two words get used interchangeably in developer conversation. They shouldn\'t. The difference is fundamental.',
      },
      {
        type: 'p',
        text: '**A library** is a tool you call. You\'re in control. You decide when to use it, how to use it, and what to combine it with. React is a library. You import it, use the parts you need, and structure everything else however you like. React handles one thing — building UI components. It has no opinion about how you handle routing, data fetching, authentication, or file structure. You make those decisions.',
      },
      {
        type: 'p',
        text: '**A framework** calls you. The framework is in control. It defines the structure, the conventions, and the rules. You write code that fits into the framework\'s model, and the framework decides when to run it. Next.js is a framework. It tells you where to put your files, how routing works, how pages get rendered. You work within its structure.',
      },
      {
        type: 'p',
        text: 'A useful way to think about it: a library is a set of power tools. A framework is a factory floor — the machinery is already set up, the assembly line is running, your job is to slot your work into the right stations.',
      },
      {
        type: 'p',
        text: '**Why frameworks exist:** React gives you components. But a real application needs much more than components. It needs:',
      },
      {
        type: 'ul',
        items: [
          'Routing — how URLs map to pages',
          'Data fetching — how pages get their data before rendering',
          'Server-side logic — API endpoints, authentication, database queries',
          'Performance optimisation — code splitting, image optimisation, caching',
          'Build tooling — compiling, bundling, minifying',
        ],
      },
      {
        type: 'p',
        text: 'You could assemble all of this yourself from individual libraries. Developers did this for years. It was slow, inconsistent, and produced different solutions in every project. Frameworks pre-assemble these pieces with sensible defaults. You get a working foundation immediately and spend your time building product, not infrastructure.',
      },
      {
        type: 'analogy',
        text: '**The analogy:** React is flour, eggs, and butter. Next.js is a professional kitchen with the recipes written, the equipment calibrated, and a system for getting dishes out the door. You could bake from scratch in any kitchen. The professional kitchen just means you spend less time figuring out the oven and more time cooking.',
      },
    ],
  },
  {
    heading: 'Routing — how Next.js knows which page to show',
    blocks: [
      {
        type: 'p',
        text: 'You understood the URL structure intuitively — `/learn` shows a different page than `/`. The mechanism behind this is called routing, and it\'s one of the most important things Next.js adds to React.',
      },
      {
        type: 'p',
        text: 'In a plain React app, there is no routing. React renders one thing. If you want multiple pages, you have to install a separate library (React Router is the most common) and configure it manually — write rules that say "when the URL is /about, render the About component."',
      },
      {
        type: 'p',
        text: 'Next.js has routing built in, and it works through your file system. This is called **file-based routing**.',
      },
      {
        type: 'p',
        text: 'In the App Router (the current Next.js system):',
      },
      {
        type: 'ul',
        items: [
          'A file at `app/page.tsx` → renders at `/`',
          'A file at `app/learn/page.tsx` → renders at `/learn`',
          'A file at `app/blog/[slug]/page.tsx` → renders at `/blog/anything` where "anything" is dynamic',
        ],
      },
      {
        type: 'p',
        text: 'You created your `/learn` page by creating a file in the right folder. You didn\'t write any routing rules. Next.js read your file structure and built the routes automatically. That\'s a framework doing its job — convention over configuration.',
      },
      {
        type: 'p',
        text: '**Dynamic routes** use square brackets. `[slug]` means "match anything here and pass it to the page as a variable." Your blog, if you have one, probably uses this — `/blog/my-post-title` where `my-post-title` is the slug.',
      },
    ],
  },
  {
    heading: 'The rendering question — when and where is the page built?',
    blocks: [
      {
        type: 'p',
        text: 'This is the most important concept in this module, and the one that actually differentiates Next.js, Remix, and Astro from each other.',
      },
      {
        type: 'p',
        text: '**Static Site Generation (SSG):** The page is built once, at deploy time, and the result is stored as a plain HTML file. Every visitor gets the exact same pre-built file. This is the fastest possible delivery — Vercel just sends a file, no computation needed. The downside: the content is frozen until you redeploy. Fine for a blog post or a marketing page. Not fine for a dashboard showing live data.',
      },
      {
        type: 'p',
        text: '**Server-Side Rendering (SSR):** The page is built fresh on the server every time a visitor arrives. The server fetches the latest data, builds the HTML, and sends it. Slower than static (there\'s computation on every request) but always shows current data. Right for pages where freshness matters — a user\'s account page, a live feed, search results.',
      },
      {
        type: 'p',
        text: '**Client-Side Rendering (CSR):** The server sends a minimal HTML shell and a JavaScript bundle. The visitor\'s browser downloads the JavaScript, runs it, fetches the data, and builds the page entirely in the browser. This is how pure React apps work without a framework. Fast initial server response (just sends a shell), but the user sees a blank page or loading spinner while JavaScript executes. Bad for SEO because search engine crawlers often can\'t execute JavaScript.',
      },
      {
        type: 'p',
        text: '**Incremental Static Regeneration (ISR):** Next.js-specific. A page is built statically but automatically rebuilt in the background at intervals you define — every 60 seconds, every hour. Visitors get static speed but the content stays reasonably fresh. The best of both worlds for content that changes occasionally.',
      },
      {
        type: 'p',
        text: '**Hybrid:** Next.js lets you mix all of these in a single project. Your homepage can be static. Your dashboard can be server-rendered. Your profile page can be client-rendered. You decide per-page.',
      },
      {
        type: 'p',
        text: 'This hybrid flexibility is Next.js\'s biggest advantage over simpler frameworks. Most competitors make you choose one approach for the whole site.',
      },
      {
        type: 'analogy',
        text: '**The analogy:** Static is a printed brochure — fast to hand out, but the information is frozen at print time. SSR is a barista making your coffee fresh — takes a moment but it\'s exactly what you ordered right now. CSR is a flat-pack furniture box — fast to ship, but the recipient has to assemble it themselves before they can use it.',
      },
    ],
  },
  {
    heading: 'Next.js — what it actually adds to React',
    blocks: [
      {
        type: 'p',
        text: 'Next.js adds to React:',
      },
      {
        type: 'p',
        text: '**File-based routing** — no manual route configuration, your folder structure is your routes.',
      },
      {
        type: 'p',
        text: '**Multiple rendering strategies** — SSG, SSR, ISR, CSR, all available and mixable per page.',
      },
      {
        type: 'p',
        text: '**API routes** — you can write server-side code (database queries, authentication logic, third-party API calls) inside the same Next.js project, in an `/api` folder or via Server Actions. No separate backend needed.',
      },
      {
        type: 'p',
        text: '**Image optimisation** — Next.js\'s `<Image>` component automatically resizes, compresses, and serves images in modern formats. A significant performance win.',
      },
      {
        type: 'p',
        text: '**Font optimisation** — automatically optimises and self-hosts Google Fonts, eliminating the performance hit of loading fonts from Google\'s servers.',
      },
      {
        type: 'p',
        text: '**Metadata API** — structured way to define page titles, descriptions, Open Graph tags (the preview cards when you share a link) across your site.',
      },
      {
        type: 'p',
        text: '**Built-in TypeScript support** — no configuration needed.',
      },
      {
        type: 'p',
        text: '**Vercel integration** — Next.js was built by the Vercel team, so deployment is seamless. Every Next.js feature has a Vercel equivalent that just works.',
      },
      {
        type: 'p',
        text: 'Next.js\'s weakness is complexity. It has a lot of concepts — App Router vs Pages Router, Server Components vs Client Components, server actions, middleware. The learning surface is large. Simpler frameworks exist for simpler needs.',
      },
    ],
  },
  {
    heading: 'Remix — data loading done differently',
    blocks: [
      {
        type: 'p',
        text: 'Remix was created in 2021 by the team behind React Router — the most popular routing library for plain React apps. It was acquired by Shopify in 2022.',
      },
      {
        type: 'p',
        text: 'Remix takes a strong opinion about how data should flow in a web app: everything should happen on the server, and the client should be as thin as possible. Where Next.js gives you many rendering options, Remix says: server-render everything, progressively enhance with JavaScript, and the web platform is enough.',
      },
      {
        type: 'p',
        text: '**Loaders and Actions** are Remix\'s core concept. Every route has a `loader` function that fetches the data that page needs (runs on the server) and an `action` function that handles form submissions (also runs on the server). The page component just receives the data and renders it.',
      },
      {
        type: 'p',
        text: 'This approach means Remix apps often work without JavaScript enabled in the browser — because the server handles data fetching and form handling, the browser just needs to display HTML. This is called progressive enhancement, a philosophy that the web should work for everyone regardless of their device or connection.',
      },
      {
        type: 'p',
        text: '**Remix\'s strengths:**',
      },
      {
        type: 'ul',
        items: [
          'Excellent handling of forms and mutations — cleaner than Next.js for apps heavy on user input',
          'Strong web standards philosophy — uses native browser APIs wherever possible',
          'Good performance characteristics — server-renders by default, less client-side JavaScript',
          'Nested routing — layouts and data loading compose elegantly',
        ],
      },
      {
        type: 'p',
        text: '**Remix\'s weaknesses:**',
      },
      {
        type: 'ul',
        items: [
          'Smaller ecosystem than Next.js',
          'Less flexible rendering — you can\'t easily do static generation for content sites',
          'Shopify acquisition created some community uncertainty about direction',
          'Fewer tutorials and examples than Next.js',
        ],
      },
      {
        type: 'analogy',
        text: '**Who uses Remix:** Teams building data-heavy applications with lots of forms and user interactions — e-commerce, admin dashboards, complex web apps. Less suited for content sites or marketing pages.',
      },
    ],
  },
  {
    heading: 'Astro — for content-first sites',
    blocks: [
      {
        type: 'p',
        text: 'Astro launched in 2021 and takes the most radical approach of any framework here: ship as little JavaScript as possible.',
      },
      {
        type: 'p',
        text: 'Astro\'s philosophy is called **islands architecture**. Your page is mostly static HTML and CSS — rendered at build time, sent to the browser as plain HTML, fast to load. JavaScript only exists in isolated "islands" — specific interactive components that need it. Everything else is zero JavaScript.',
      },
      {
        type: 'p',
        text: 'This is the opposite of React\'s approach. React ships JavaScript first and builds the page in the browser. Astro ships HTML first and adds JavaScript only where explicitly needed.',
      },
      {
        type: 'p',
        text: 'The result: Astro sites are exceptionally fast. Core Web Vitals scores (Google\'s performance metrics that affect SEO rankings) are typically excellent out of the box.',
      },
      {
        type: 'p',
        text: 'Astro also does something unusual: it\'s framework-agnostic. You can write your interactive islands in React, Vue, Svelte, or plain JavaScript — mixed together in the same project. If you want to migrate from React to Svelte gradually, Astro lets you do that component by component.',
      },
      {
        type: 'p',
        text: '**Astro\'s strengths:**',
      },
      {
        type: 'ul',
        items: [
          'Outstanding performance by default — least JavaScript shipped of any framework here',
          'Great for content sites: blogs, documentation, marketing pages, portfolios',
          'Framework-agnostic — bring your components from React, Vue, or Svelte',
          'Excellent image optimisation built in',
          'Growing ecosystem and strong community',
        ],
      },
      {
        type: 'p',
        text: '**Astro\'s weaknesses:**',
      },
      {
        type: 'ul',
        items: [
          'Not designed for highly dynamic applications — poor fit for dashboards, real-time data, complex user interactions',
          'Islands architecture adds mental overhead for developers used to React',
          'Smaller ecosystem than Next.js',
        ],
      },
      {
        type: 'analogy',
        text: '**Who uses Astro:** Content-heavy sites where performance and SEO matter most. Documentation sites, blogs, marketing sites, portfolios. Your personal site would actually be a strong candidate for Astro — it\'s primarily content with limited dynamic functionality.',
      },
    ],
  },
  {
    heading: 'Nuxt — Vue\'s answer to Next.js',
    blocks: [
      {
        type: 'p',
        text: 'Nuxt is to Vue what Next.js is to React. If you understand the Next.js/React relationship, you understand Nuxt/Vue.',
      },
      {
        type: 'p',
        text: 'Nuxt adds to Vue exactly what Next.js adds to React: file-based routing, server-side rendering, static generation, API routes, image optimisation, and seamless deployment. The concepts are nearly identical. The syntax reflects Vue rather than React.',
      },
      {
        type: 'p',
        text: 'Nuxt is particularly popular in Europe and with teams that chose Vue as their UI library. Its developer experience is consistently praised — many developers find Nuxt\'s conventions slightly more intuitive than Next.js\'s.',
      },
      {
        type: 'p',
        text: '**Nuxt\'s strengths:**',
      },
      {
        type: 'ul',
        items: [
          'Excellent developer experience — clean conventions, good defaults',
          'All the rendering flexibility of Next.js',
          'Strong in Europe and Asia where Vue adoption is higher',
          'Well-maintained with active community',
        ],
      },
      {
        type: 'p',
        text: '**Nuxt\'s weaknesses:**',
      },
      {
        type: 'ul',
        items: [
          'Smaller ecosystem than Next.js',
          'Vue ecosystem, not React — can\'t use React-specific packages',
          'Less job market demand in most English-speaking countries',
        ],
      },
      {
        type: 'analogy',
        text: '**Who uses Nuxt:** Teams who chose Vue and need a full-stack framework. If you were starting fresh and preferred Vue\'s syntax, Nuxt would be the equivalent choice to Next.js.',
      },
    ],
  },
  {
    heading: 'The verdict — and what you should actually use',
    blocks: [
      {
        type: 'table',
        headers: ['', 'Next.js', 'Remix', 'Astro', 'Nuxt'],
        rows: [
          ['UI library',     'React',         'React',           'Any',           'Vue'],
          ['Rendering',      'Hybrid (all)',   'SSR-first',       'Static-first',  'Hybrid'],
          ['Best for',       'Most web apps',  'Data-heavy apps', 'Content sites', 'Vue teams'],
          ['Learning curve', 'Steep',          'Medium',          'Gentle',        'Medium'],
          ['Ecosystem',      'Largest',        'Medium',          'Growing',       'Medium'],
          ['Backed by',      'Vercel',         'Shopify',         'Community',     'Community'],
          ['Job market',     'Dominant',       'Growing',         'Niche',         'Regional'],
        ],
      },
      {
        type: 'p',
        text: '**What you should use:** Next.js. You\'re already using it and the decision is correct for your situation — you\'re building dynamic applications that need the hybrid rendering flexibility Next.js provides.',
      },
      {
        type: 'p',
        text: '**The honest assessment of that choice:** Next.js is powerful but complex. Its App Router (the current system) introduced Server Components — a new mental model where some components run only on the server and some run in the browser, with different rules for each. This is genuinely confusing at first. When you see `\'use client\'` at the top of a file, that\'s Next.js telling React "this component runs in the browser." Without that directive, it runs on the server by default in the App Router.',
      },
      {
        type: 'analogy',
        text: '**The insight worth keeping:** The framework you choose defines the mental model you think in. Next.js thinks in rendering strategies — when and where is this page built? Remix thinks in loaders and actions — what data does this route need and what can it do? Astro thinks in islands — what actually needs JavaScript and what doesn\'t? Understanding these different mental models makes you a better developer regardless of which framework you use.',
      },
      {
        type: 'p',
        text: 'Your personal site is primarily content. Astro would serve it better than Next.js on pure technical merit. But switching has a cost, you\'re already learning Next.js, and the performance difference won\'t matter until you have significant traffic. Stay on Next.js, understand why Astro exists, and revisit if performance becomes a real issue.',
      },
    ],
  },
];

// ── Module 3 Quiz ────────────────────────────────────────────────────────────

export const MODULE3_QUIZ: QuizQuestion[] = [
  {
    id: 'm3q1',
    question: 'What is the key difference between a library and a framework?',
    options: [
      'A library is free; a framework costs money',
      'A library is a tool you call; a framework calls you — it defines the structure and you work within it',
      'A library is for frontend; a framework is for backend',
      'A framework is just a larger library',
    ],
    correct: 1,
  },
  {
    id: 'm3q2',
    question: 'How does Next.js handle routing?',
    options: [
      'You write routing rules manually in a config file',
      'You install React Router and configure it separately',
      'File-based routing — the folder and file structure of your project automatically becomes your URL structure',
      'Vercel handles routing at the CDN level',
    ],
    correct: 2,
  },
  {
    id: 'm3q3',
    question: 'What is Static Site Generation (SSG)?',
    options: [
      'The page is built in the visitor\'s browser using JavaScript',
      'The page is rebuilt on the server every time a visitor arrives',
      'The page is built once at deploy time and stored as plain HTML — every visitor gets the same pre-built file',
      'The page is partially built on the server and completed in the browser',
    ],
    correct: 2,
  },
  {
    id: 'm3q4',
    question: "You're building a user dashboard that shows live account data. Which rendering strategy makes most sense?",
    options: [
      'Static Site Generation — fastest delivery',
      'Server-Side Rendering — the page needs fresh data on every visit',
      'No JavaScript — progressive enhancement only',
      'Incremental Static Regeneration with a 24-hour revalidation',
    ],
    correct: 1,
  },
  {
    id: 'm3q5',
    question: "What does `'use client'` at the top of a Next.js file mean?",
    options: [
      'The file contains client billing logic',
      'The file should only be accessible to logged-in users',
      'This component runs in the browser, not on the server — it can use browser APIs and React state',
      'The file uses client-side CSS only',
    ],
    correct: 2,
  },
  {
    id: 'm3q6',
    question: "What is Astro's core philosophy?",
    options: [
      'Server-render everything and avoid static files',
      'Use Vue instead of React for better performance',
      'Ship as little JavaScript as possible — static HTML by default, JavaScript only in isolated interactive islands',
      'Build everything as a single-page application',
    ],
    correct: 2,
  },
  {
    id: 'm3q7',
    question: 'Why might a content-heavy site like a blog or portfolio perform better on Astro than Next.js?',
    options: [
      'Astro uses a faster server than Vercel',
      'Astro has better CSS support than Next.js',
      'Astro ships minimal JavaScript by default — static HTML loads faster than a JavaScript-heavy React bundle',
      'Astro automatically generates more SEO-friendly URLs',
    ],
    correct: 2,
  },
  {
    id: 'm3q8',
    question: 'What is the relationship between Nuxt and Vue?',
    options: [
      'Nuxt is a competitor to Vue',
      'Nuxt replaces Vue with a faster rendering engine',
      'Nuxt is to Vue what Next.js is to React — a full-stack framework built on top of the UI library',
      "Nuxt is Vue's package manager, equivalent to npm",
    ],
    correct: 2,
  },
];

// ── Module 4: Databases ──────────────────────────────────────────────────────

export const DATABASES_CONTENT: Subsection[] = [
  {
    heading: 'What a database actually is',
    blocks: [
      {
        type: 'p',
        text: 'A database is a system for storing, organising, and retrieving data efficiently. The key word is efficiently. You could store all your data in a text file. For ten users, that works fine. For ten thousand users, searching that file for a specific record becomes slow. For a million users, it becomes unusable.',
      },
      {
        type: 'p',
        text: 'Databases solve this with two things: **structure** (data is organised in a predictable way so the system knows where to look) and **indexing** (the database maintains a map of where things are, like the index at the back of a book, so lookups are fast rather than scanning everything).',
      },
      {
        type: 'p',
        text: 'Databases also handle **concurrent access** — multiple users reading and writing at the same time without corrupting each other\'s data. If two people book the last retreat spot simultaneously, the database ensures only one succeeds. Your application code can\'t reliably do this alone.',
      },
      {
        type: 'p',
        text: 'Every time someone visits a page on your site that shows dynamic content — a user profile, a list of events, a booking confirmation — your application is making a query to a database, getting data back, and rendering it. The database is the memory of your application.',
      },
      {
        type: 'analogy',
        text: '**The analogy:** A database is a filing cabinet designed by an engineer rather than an office worker. Every drawer is labelled precisely, every folder follows a strict format, there\'s an index of everything stored, and a lock system ensures two people can\'t modify the same folder simultaneously.',
      },
    ],
  },
  {
    heading: 'Relational databases — tables, rows, and relationships',
    blocks: [
      {
        type: 'p',
        text: 'A relational database stores data in **tables**. Each table represents one type of thing — users, bookings, events, payments. Each table has **columns** (the fields — name, email, date) and **rows** (individual records — one row per user, one row per booking).',
      },
      {
        type: 'p',
        text: 'Here\'s what makes it relational: tables can **reference each other** using keys. Imagine your Connection Retreat database:',
      },
      {
        type: 'table',
        headers: ['id', 'name', 'email'],
        rows: [
          ['1', 'Flo', 'flo@example.com'],
          ['2', 'Maria', 'maria@example.com'],
        ],
      },
      {
        type: 'table',
        headers: ['id', 'user_id', 'retreat_id', 'date'],
        rows: [
          ['1', '1', '3', '2026-10-07'],
          ['2', '2', '3', '2026-10-07'],
        ],
      },
      {
        type: 'p',
        text: 'The `user_id` column in the bookings table references the `id` column in the users table. This is a **foreign key** — a pointer from one table to another. When you query "show me all bookings and who made them," the database follows that pointer and joins the data together.',
      },
      {
        type: 'p',
        text: 'This is a **JOIN** — combining data from multiple tables based on their relationships. "Give me all bookings where the user\'s email is flo@example.com" requires joining the bookings table to the users table.',
      },
      {
        type: 'p',
        text: 'The alternative — storing all user information inside every booking row — would mean duplicating data everywhere. If Maria changes her email, you\'d have to update every booking she ever made. With relationships, you update one row in the users table and every booking automatically reflects it.',
      },
      {
        type: 'p',
        text: '**SQL** (Structured Query Language) is the language used to talk to relational databases. It\'s not a programming language like JavaScript — it\'s a query language specifically for asking databases questions. `SELECT * FROM users WHERE email = \'flo@example.com\'` — select everything from the users table where the email matches. Supabase translates your JavaScript function calls into SQL behind the scenes.',
      },
    ],
  },
  {
    heading: 'Postgres — the gold standard',
    blocks: [
      {
        type: 'p',
        text: 'PostgreSQL (almost always called Postgres) was first released in 1996 and is widely considered the most advanced open-source relational database in the world. Supabase, Neon, Railway, and most modern hosting platforms default to Postgres.',
      },
      {
        type: 'p',
        text: 'Postgres is a **full-featured relational database** — it supports everything SQL offers plus significant extensions: JSON storage (you can store unstructured data inside a Postgres column), full-text search, geospatial queries (finding things near a location), custom data types, and complex indexing strategies.',
      },
      {
        type: 'p',
        text: '**Postgres\'s strengths:**',
      },
      {
        type: 'ul',
        items: [
          'Extremely reliable and battle-tested over nearly 30 years',
          'Highly standards-compliant SQL — code transfers easily to other systems',
          'JSON support means you can store flexible data alongside structured data',
          'Excellent performance at scale',
          'Open source with no vendor lock-in',
          'Supabase, your current database, runs on Postgres',
        ],
      },
      {
        type: 'p',
        text: '**Postgres\'s weaknesses:**',
      },
      {
        type: 'ul',
        items: [
          'More complex to self-host and tune than MySQL',
          'Slightly more verbose syntax than MySQL in some cases',
          'Historically slower than MySQL for simple read-heavy workloads (the gap has narrowed significantly)',
        ],
      },
      {
        type: 'analogy',
        text: '**Who uses Postgres:** Instagram, Reddit, Spotify, most modern startups. It\'s the default choice for new projects in 2026. You\'re already using it via Supabase.',
      },
    ],
  },
  {
    heading: 'MySQL — the old reliable',
    blocks: [
      {
        type: 'p',
        text: 'MySQL was released in 1995 — a year before Postgres — and for a long time was the most popular database in the world. It powers WordPress, which runs roughly 40% of the web. Facebook built its early infrastructure on MySQL. It\'s owned by Oracle.',
      },
      {
        type: 'p',
        text: 'MySQL and Postgres are both relational databases using SQL. For most applications, they\'re interchangeable — the queries look nearly identical. The differences are in advanced features, performance characteristics, and philosophy.',
      },
      {
        type: 'p',
        text: '**MySQL\'s strengths:**',
      },
      {
        type: 'ul',
        items: [
          'Extremely widely used — most shared hosting supports MySQL, huge amount of documentation',
          'Slightly faster than Postgres for simple read-heavy workloads',
          'WordPress and most PHP applications default to MySQL',
          'Mature and stable',
        ],
      },
      {
        type: 'p',
        text: '**MySQL\'s weaknesses:**',
      },
      {
        type: 'ul',
        items: [
          'Fewer advanced features than Postgres — limited JSON support, weaker full-text search',
          'Oracle ownership creates some open-source purity concerns',
          'Less standards-compliant SQL — some queries written for MySQL need adjustment for Postgres',
          'The developer community has largely shifted preference to Postgres for new projects',
        ],
      },
      {
        type: 'analogy',
        text: '**Who uses MySQL:** WordPress sites, legacy PHP applications, teams with existing MySQL infrastructure. For new projects in 2026, most developers choose Postgres.',
      },
      {
        type: 'p',
        text: '**MariaDB** is worth a brief mention — it\'s a community fork of MySQL created when Oracle acquired it, designed to stay fully open-source. Functionally nearly identical to MySQL.',
      },
    ],
  },
  {
    heading: 'SQLite — the database that lives in a file',
    blocks: [
      {
        type: 'p',
        text: 'SQLite is unlike any other database on this list. There is no server. There is no installation. The entire database — all your data, all your tables, all your indexes — lives in a single file on your computer or server.',
      },
      {
        type: 'p',
        text: 'You import a SQLite library into your application, point it at a file, and start querying. That\'s it.',
      },
      {
        type: 'p',
        text: 'SQLite is the most deployed database in the world by a massive margin — not because developers choose it for web apps, but because it\'s embedded everywhere: every iPhone, every Android phone, every Chrome browser, every desktop application that needs local storage uses SQLite internally. It\'s in billions of devices.',
      },
      {
        type: 'p',
        text: '**SQLite\'s strengths:**',
      },
      {
        type: 'ul',
        items: [
          'Zero setup — just a file',
          'Extremely fast for read-heavy workloads on a single machine',
          'Perfect for local development, testing, and prototyping',
          'Excellent for mobile apps and desktop apps',
          'Self-contained — backup by copying one file',
        ],
      },
      {
        type: 'p',
        text: '**SQLite\'s weaknesses:**',
      },
      {
        type: 'ul',
        items: [
          'No concurrent writes — only one process can write at a time, which causes problems at scale',
          'Lives on one machine — no built-in replication or cloud hosting',
          'Not suitable for applications with many simultaneous users writing data',
        ],
      },
      {
        type: 'analogy',
        text: '**Who uses SQLite:** Mobile apps, desktop apps, local development, small tools that don\'t need multi-user write access. Also increasingly interesting for small web apps via services like Turso, which hosts SQLite in the cloud with replication. Not the right choice for a multi-user web application like The Connection Retreat.',
      },
    ],
  },
  {
    heading: 'NoSQL — when tables aren\'t the answer',
    blocks: [
      {
        type: 'p',
        text: '"NoSQL" doesn\'t mean "no SQL" exactly — it means "not only SQL." It\'s a broad category of databases that don\'t use the relational table model.',
      },
      {
        type: 'p',
        text: 'Relational databases are excellent when your data has a consistent, predictable structure. Every user has an id, name, email, and created_at. Every booking has a user_id, retreat_id, and date. Clean tables, clear relationships.',
      },
      {
        type: 'p',
        text: 'But some data is inherently flexible. A product in an e-commerce store might have colour and size. Another might have weight and dimensions. A third might have digital download links. If you put this in a relational table, you either have columns that are empty for most rows, or you end up with a complex structure that\'s hard to query.',
      },
      {
        type: 'p',
        text: 'NoSQL databases solve this by storing data as **documents** — flexible JSON-like objects where each record can have different fields. **MongoDB** is the most popular. Instead of tables and rows, it has **collections and documents**:',
      },
      {
        type: 'code',
        language: 'json',
        text: `{
  "_id": "abc123",
  "name": "Flo",
  "email": "flo@example.com",
  "retreats_attended": ["MAC 2024", "MAC 2025"],
  "preferences": {
    "diet": "vegetarian",
    "room": "shared"
  }
}`,
      },
      {
        type: 'p',
        text: 'That nested structure — an array of retreats, an object of preferences — would require multiple tables and joins in a relational database. In MongoDB it\'s one document.',
      },
      {
        type: 'p',
        text: '**MongoDB\'s strengths:**',
      },
      {
        type: 'ul',
        items: [
          'Flexible schema — documents in the same collection can have different fields',
          'Natural fit for hierarchical or nested data',
          'Scales horizontally very well — designed for massive distributed systems',
          'JSON-like documents feel natural for JavaScript developers',
        ],
      },
      {
        type: 'p',
        text: '**MongoDB\'s weaknesses:**',
      },
      {
        type: 'ul',
        items: [
          'No joins — querying across collections is more complex than SQL joins',
          'Flexible schema is also a weakness — no enforced structure means inconsistent data sneaks in',
          'Transactions are more complex than in Postgres',
          'The developer community has become more skeptical of MongoDB — many teams that started with it have migrated back to Postgres',
        ],
      },
      {
        type: 'p',
        text: '**Other NoSQL types worth knowing:**',
      },
      {
        type: 'ul',
        items: [
          '**Key-value stores** (Redis, DynamoDB) — store simple key:value pairs, extremely fast, used for caching and sessions',
          '**Column stores** (Cassandra) — optimised for writing enormous amounts of time-series data',
          '**Graph databases** (Neo4j) — store relationships between entities, used for social networks and recommendation engines',
        ],
      },
    ],
  },
  {
    heading: 'The verdict — and what you should actually use',
    blocks: [
      {
        type: 'table',
        headers: ['', 'Postgres', 'MySQL', 'SQLite', 'MongoDB'],
        rows: [
          ['Type',             'Relational',     'Relational',     'Relational',      'Document (NoSQL)'],
          ['Setup',            'Server required', 'Server required', 'Just a file',    'Server required'],
          ['Best for',         'Most web apps',  'WordPress, legacy', 'Local dev, mobile', 'Flexible/nested data'],
          ['Concurrent users', 'Excellent',      'Excellent',      'Poor',            'Excellent'],
          ['SQL',              'Full support',   'Full support',   'Full support',    'No SQL'],
          ['Trend',            'Growing',        'Stable/declining', 'Growing (edge)', 'Declining (new projects)'],
        ],
      },
      {
        type: 'p',
        text: '**What you should use:** Postgres via Supabase, which you\'re already doing. The choice is correct.',
      },
      {
        type: 'p',
        text: 'For your specific projects:',
      },
      {
        type: 'ul',
        items: [
          '**The Connection Retreat** — Postgres. User accounts, bookings, payments. Relational data with clear structure and relationships.',
          '**FlowGrid** — Postgres. Events, schedules, users. All relational.',
          '**/learn progress tracking** — localStorage for now, Postgres via Supabase when you want progress to persist across devices.',
          '**Local prototyping** — SQLite is worth knowing for quickly testing ideas without setting up a full database.',
        ],
      },
      {
        type: 'analogy',
        text: '**The insight worth keeping:** The relational vs NoSQL debate was fierce in the 2010s — MongoDB was positioned as the modern replacement for old-fashioned SQL databases. That narrative has largely collapsed. Postgres added excellent JSON support, closing the flexibility gap. MongoDB\'s lack of enforced structure turned out to cause more problems than it solved for most applications. For the vast majority of web applications, a relational database — specifically Postgres — is the right choice. NoSQL databases solve specific problems at specific scales. You\'re unlikely to need them until you\'re operating at a scale most independent developers never reach.',
      },
    ],
  },
];

// ── Module 4 Quiz ────────────────────────────────────────────────────────────

export const MODULE4_QUIZ: QuizQuestion[] = [
  {
    id: 'm4q1',
    question: 'What problem does a database solve that a simple text file cannot?',
    options: [
      'Text files don\'t support JavaScript',
      'Efficient structured storage with fast lookups, concurrent access, and data integrity at scale',
      'Text files can only store words, not numbers',
      'Databases provide automatic backups that text files don\'t',
    ],
    correct: 1,
  },
  {
    id: 'm4q2',
    question: 'In a relational database, what is a foreign key?',
    options: [
      'A security key that encrypts sensitive columns',
      'An API key used to access the database remotely',
      'A column in one table that references the id of a row in another table, creating a relationship',
      'A backup key stored separately from the main database',
    ],
    correct: 2,
  },
  {
    id: 'm4q3',
    question: 'You have a users table and a bookings table. A booking needs to know which user made it. What\'s the correct approach?',
    options: [
      'Copy all user data into every booking row',
      'Store bookings inside the users table',
      'Add a user_id column to the bookings table that references the users table id',
      'Create a separate database for bookings',
    ],
    correct: 2,
  },
  {
    id: 'm4q4',
    question: 'What makes SQLite fundamentally different from Postgres and MySQL?',
    options: [
      'SQLite uses a different query language',
      'SQLite only works on mobile devices',
      'SQLite doesn\'t support tables or rows',
      'SQLite has no server — the entire database lives in a single file on your machine',
    ],
    correct: 3,
  },
  {
    id: 'm4q5',
    question: 'What is the core difference between a relational database and a NoSQL document database like MongoDB?',
    options: [
      'NoSQL databases are always faster than relational databases',
      'Relational databases store data in structured tables with enforced schemas; document databases store flexible JSON-like objects where each record can have different fields',
      'NoSQL databases don\'t require any setup',
      'Relational databases can only be used for small amounts of data',
    ],
    correct: 1,
  },
  {
    id: 'm4q6',
    question: "You're building The Connection Retreat booking system. Users, bookings, retreats, and payments all relate to each other. Which database type is most appropriate?",
    options: [
      'MongoDB — more flexible for complex data',
      'SQLite — simplest to set up',
      'Postgres — relational data with clear structure and relationships between entities',
      'A key-value store like Redis',
    ],
    correct: 2,
  },
  {
    id: 'm4q7',
    question: 'What language do you use to query a relational database?',
    options: [
      'JavaScript',
      'Python',
      'JSON',
      'SQL — Structured Query Language, specifically designed for querying relational databases',
    ],
    correct: 3,
  },
  {
    id: 'm4q8',
    question: "Why has MongoDB fallen out of favour for many new projects compared to the 2010s?",
    options: [
      'MongoDB became too expensive',
      'MongoDB stopped supporting JavaScript',
      'Postgres added strong JSON support, closing the flexibility gap, while MongoDB\'s lack of enforced schema caused data consistency problems',
      'MongoDB was acquired by Oracle and became closed-source',
    ],
    correct: 2,
  },
];
