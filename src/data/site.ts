import { featuredProject } from './projects';

export const site = {
  name: "Liel Almog",
  role: "Senior Software Engineer & Backend Developer",
  title: "Liel Almog | Senior Software Engineer & Backend Developer",
  description:
    "Liel Almog is a senior software engineer and backend developer in Israel, building reliable APIs, distributed systems, cloud platforms, and complete production software.",
  url: "https://lielalmog.com/",
  resume:
    "https://drive.google.com/drive/folders/15Nr72FC4d_oyjNiCR-VU9ReDNCHlDwbJ",
  email: "train-fit-frantic@duck.com",
  profiles: [
    { name: "GitHub", href: "https://github.com/liel-almog" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/liel-almog-454158335/",
    },
  ],
} as const;

// Switch each destination to a local anchor when its Astro section is ready.
export const legacySection = (id: string) => `${site.url}#${id}`;

export const navigation = [
  { label: "60-second intro", href: "/#intro-video" },
  { label: "Experience", href: "/#experience" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Projects", href: "/#projects" },
  { label: "Algo Studio", href: featuredProject.href, external: true },
  { label: "Contact", href: "/#contact" },
] as const;
