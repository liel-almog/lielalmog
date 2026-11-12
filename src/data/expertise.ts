export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  technologies: readonly string[];
}

export const skillGroups = [
  {
    id: 'backend',
    title: 'Backend development',
    description: 'Services and APIs with clear boundaries, reliable data flows, and maintainable code.',
    technologies: ['Go', 'Python', 'TypeScript', 'Node.js', 'FastAPI', 'Flask', 'NestJS'],
  },
  {
    id: 'distributed-systems',
    title: 'Distributed systems & data',
    description: 'Concurrency, event-driven workflows, messaging, caching, and durable persistence.',
    technologies: ['Kafka', 'Service Bus', 'PostgreSQL', 'MongoDB', 'Redis', 'SQL Server'],
  },
  {
    id: 'cloud',
    title: 'Cloud & platforms',
    description: 'Applications and internal platforms delivered through managed cloud and containers.',
    technologies: ['Microsoft Azure', 'Docker', 'Kubernetes', 'OpenShift', 'AWS', 'CI/CD'],
  },
  {
    id: 'security',
    title: 'Security & systems',
    description: 'Security-aware engineering from application boundaries down to Linux kernel tooling.',
    technologies: ['eBPF', 'OWASP', 'Networking', 'Encryption', 'C', 'Linux'],
  },
  {
    id: 'product-delivery',
    title: 'Complete product delivery',
    description: 'Enough frontend and product context to turn capable infrastructure into useful software.',
    technologies: ['React', 'Angular', 'WebSockets', 'Responsive UI', 'Developer experience'],
  },
] as const satisfies readonly SkillGroup[];
