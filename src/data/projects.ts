export type ExternalUrl = `https://${string}`;

export interface ArchitectureStep {
  readonly layer: string;
  readonly title: string;
  readonly stack: string;
  readonly description: string;
}

export interface ProjectPreview {
  readonly name: string;
  readonly category: string;
  readonly summary: string;
  readonly href: ExternalUrl;
  readonly linkLabel: string;
}

export interface Project extends ProjectPreview {
  readonly id: string;
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly schemaType: "SoftwareSourceCode" | "WebApplication";
  readonly repositoryUrl?: ExternalUrl;
  readonly motivation: string;
  readonly approach: readonly string[];
  readonly technologies: readonly string[];
  // The diagram always displays the first step on initial render.
  readonly architecture: readonly [ArchitectureStep, ...ArchitectureStep[]];
}

export interface ProjectsSection {
  readonly eyebrow: string;
  readonly heading: string;
  readonly emphasis: string;
  readonly description: string;
}

export const projectsSection: ProjectsSection = {
  eyebrow: "Selected projects",
  heading: "Curiosity into code.",
  emphasis: "From Go to the kernel.",
  description:
    "I’m enthusiastic about Go (Golang), systems programming, and understanding how software works beneath the surface. These projects turn that curiosity into working systems, from kernel-level security to search algorithms and developer tools.",
};

export const featuredProject: ProjectPreview = {
  name: "Algo Studio",
  category: "Interactive algorithm playground",
  summary:
    "A React and TypeScript playground backed by a Go API for exploring search, graph, and randomized verification algorithms.",
  href: "https://algorithms.lielalmog.com/",
  linkLabel: "Explore Algo Studio",
};

export const projects: readonly Project[] = [
  {
    id: "ebpf",
    schemaType: "SoftwareSourceCode",
    name: "eBPF Shield",
    category: "Kernel-level security · Go & C",
    summary:
      "A per-process firewall that connects a browser control plane and backend services to a Go host agent and kernel-level eBPF enforcement on Linux.",
    seoTitle: "eBPF Shield: Per-Process Linux Firewall",
    seoDescription:
      "Explore eBPF Shield, a per-process Linux firewall built with Go, C, eBPF, FastAPI, MongoDB, and React. See how its control plane and host agent connect.",
    motivation:
      "Building on my degree and systems programming knowledge, I explored how operating systems, networking, and process-aware security fit together. I was especially excited to connect Go in user space with C and eBPF programs running inside the Linux kernel.",
    approach: [
      "eBPF Shield separates policy management from enforcement. A React control plane gives users a place to manage organizations, hosts, processes, and firewall rules. FastAPI services coordinate those workflows and store their state in MongoDB.",
      "On each protected Linux host, a Go agent observes processes and synchronizes policy with the backend. C and eBPF programs then apply process-aware network rules in the kernel. The project brings the product interface, APIs, host software, and kernel behavior into one system.",
    ],
    technologies: ["Go", "C", "eBPF", "Linux", "FastAPI", "MongoDB", "React"],
    href: "https://github.com/orgs/ebpf-shield/repositories",
    linkLabel: "Explore the organization",
    architecture: [
      {
        layer: "Product",
        title: "React control plane",
        stack: "React · TypeScript",
        description:
          "A browser interface for organizations, protected hosts, processes, dashboards, and firewall rules.",
      },
      {
        layer: "API",
        title: "FastAPI backend",
        stack: "Python · JWT",
        description:
          "Human-facing and machine-facing APIs coordinate authentication, product workflows, and host synchronization.",
      },
      {
        layer: "Data",
        title: "MongoDB state",
        stack: "MongoDB · Beanie",
        description:
          "Persistent models connect users and organizations with hosts, processes, and the policies enforced on them.",
      },
      {
        layer: "User space",
        title: "Go host agent",
        stack: "Go · Linux",
        description:
          "The Go agent observes processes, synchronizes policy, and bridges backend services with kernel-level enforcement.",
      },
      {
        layer: "Kernel space",
        title: "eBPF enforcement",
        stack: "C · eBPF",
        description:
          "Programs running inside the Linux kernel apply process-aware network policy close to the traffic source.",
      },
    ],
  },
  {
    id: "algo-studio",
    schemaType: "WebApplication",
    name: featuredProject.name,
    category: featuredProject.category,
    summary: featuredProject.summary,
    seoTitle: "Algo Studio: Interactive Algorithm Playground",
    seoDescription:
      "Explore Algo Studio's React interface and Go backend, from validated API requests and bounded algorithm execution to visual results for search, graphs, and randomized verification.",
    motivation:
      "I wanted to make search and graph algorithms easier to understand by giving people a place to explore how they behave interactively.",
    approach: [
      "A React and TypeScript frontend connects to a Go API built with Echo. Routes and controllers handle HTTP requests, services select the problem and algorithm, and dedicated problem packages own validation rules, computation, and result construction.",
      "The backend implements A*, breadth-first search, and iterative-deepening DFS for sliding puzzles, Karger's minimum-cut algorithm, Freivalds' matrix verification, and Schwartz–Zippel polynomial identity testing. Each lab returns structured results that the frontend can explain visually.",
      "Strict JSON validation, request-size limits, a five-second execution deadline, and bounded concurrency keep computational work under control. Request IDs and structured logs support diagnostics, while Docker Compose and Nginx provide the backend deployment setup.",
    ],
    technologies: [
      "Go",
      "Echo",
      "React",
      "TypeScript",
      "Docker",
      "Search algorithms",
      "Randomized algorithms",
    ],
    href: featuredProject.href,
    linkLabel: featuredProject.linkLabel,
    architecture: [
      {
        layer: "Explore",
        title: "Interactive algorithm labs",
        stack: "React · TypeScript",
        description:
          "Users configure puzzle boards, graphs, matrices, or polynomials. The frontend sends generation and solve requests to the Go API.",
      },
      {
        layer: "API",
        title: "Validate and route requests",
        stack: "Go · Echo · JSON",
        description:
          "The Go API validates input, selects the requested lab, and limits request size, execution time, and concurrent work.",
      },
      {
        layer: "Compute",
        title: "Run the algorithm",
        stack: "Search · Graphs · Verification",
        description:
          "Problem-specific Go packages run search, minimum-cut, matrix verification, or polynomial identity algorithms and build structured results.",
      },
      {
        layer: "Understand",
        title: "Explore the results",
        stack: "Results · Visualization",
        description:
          "The frontend turns solution paths, graph partitions, and verification results into visual explanations and playback.",
      },
    ],
  },
  {
    id: "vulnerability",
    schemaType: "SoftwareSourceCode",
    repositoryUrl:
      "https://github.com/liel-almog/package-vulnerability-detector",
    name: "Package Vulnerability Detector",
    category: "Application security · Developer tooling",
    summary:
      "A NestJS API that analyzes package definition files and retrieves known vulnerabilities through GitHub’s Security Advisories GraphQL API.",
    seoTitle: "Package Vulnerability Detector: NestJS API",
    seoDescription:
      "See how this NestJS API parses package dependencies and checks GitHub Security Advisories through GraphQL to help developers investigate known vulnerabilities.",
    motivation:
      "My curiosity extends to the tools developers rely on every day. This project brings together backend API design and security to make dependency risks easier to investigate.",
    approach: [
      "The NestJS API accepts package definition files, parses their dependencies, and validates requests before looking up advisory data. It uses GitHub’s Security Advisories GraphQL API as the source of known vulnerabilities.",
      "Results connect packages to relevant advisories so developers can investigate dependency risk. The service is packaged with Docker and keeps the parsing, external lookup, and result handling behind a clear API boundary.",
    ],
    technologies: [
      "TypeScript",
      "NestJS",
      "GraphQL",
      "GitHub Security Advisories",
      "Docker",
    ],
    href: "https://github.com/liel-almog/package-vulnerability-detector",
    linkLabel: "View repository",
    architecture: [
      {
        layer: "Input",
        title: "Package definition",
        stack: "Dependencies",
        description:
          "Package definition files supply the dependencies to inspect for known vulnerabilities.",
      },
      {
        layer: "Service",
        title: "NestJS API",
        stack: "TypeScript · Docker",
        description:
          "A structured API parses input, validates requests, and coordinates advisory lookups.",
      },
      {
        layer: "Integration",
        title: "Security Advisories",
        stack: "GitHub · GraphQL",
        description:
          "GitHub’s Security Advisories GraphQL API supplies known vulnerability records for the packages under analysis.",
      },
      {
        layer: "Output",
        title: "Vulnerability results",
        stack: "Packages · Advisories",
        description:
          "Results connect affected dependencies with known advisories so developers can investigate and act.",
      },
    ],
  },
];
