import { site } from './site';
import { featuredProject } from './projects';

export const hero = {
  eyebrow: 'Senior Software Engineer · Systems thinker · End-to-end owner',
  heading: 'I build backend systems',
  emphasis: 'that keep everything moving.',
  description:
    'From backend architecture to the product interface, I turn complex constraints into dependable software teams can ship, run, and trust. I work across distributed systems, cloud platforms, Go, Python, and TypeScript.',
  actions: [
    { label: 'See the work', href: '#experience', variant: 'primary', arrow: '↓' },
    { label: 'View resume', href: site.resume, variant: 'secondary', arrow: '↗' },
    { label: 'Try Algo Studio', href: featuredProject.href, variant: 'secondary', arrow: '↗' },
  ],
  capabilities: ['Backend systems', 'Cloud platforms', 'Distributed architecture', 'Complete delivery'],
} as const;
