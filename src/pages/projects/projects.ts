import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'Product - Landing Page',
    description: 'Work at the speed of thought Tools, tutorials, design and innovation experts.',
    demoLink: 'https://product-alpha-taupe.vercel.app/',
    tags: ['Product']
  },
  {
    name: 'Workly - Platform Business',
    description: 'One platform to boost your business, Learn how to manage your business effieciently.',
    demoLink: 'https://workly.vercel.app/',
    demoLinkRel: 'https://workly.vercel.app/',
    tags: ['Business', 'Saas']
  },
  {
    name: 'Gaji.id App',
    description: 'Payroll and HR Management Information System',
    demoLink: 'https://sellercraft.co',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['HRIS', 'Saas']
  },
  {
    name: 'Viena - Cryptocurrency',
    description: 'The World Fastest Growing Crypto Web App. Buy and sell 200+ cryptocurrencies',
    demoLink: 'https://paradise-ui.com',
    tags: ['Tailwind', 'UI Library']
  },
  {
    name: 'PLAN PINTAR',
    description: 'Deepen your design and coding skills with experts in their fields and get official.',
    demoLink: 'https://planpintar.netlify.app/',
    tags: ['Vue.js', 'UI Library']
  },
  {
    name: 'BEAT NFT',
    description: 'Discover, collect, and sell extraordinary NFT. Explore on the world best & largest NFT.',
    demoLink: 'https://beatnft.netlify.app/',
    tags: ['Tailwind', 'UI Library']
  },
  {
    name: 'BEAT NFT',
    description: 'Discover, collect, and sell extraordinary NFT. Explore on the world best & largest NFT.',
    demoLink: 'https://beatnft.netlify.app/',
    tags: ['Tailwind', 'UI Library']
  },
  {
    name: 'CIKARANG PROPERTY',
    description: 'Contact us. Get Your Dream Property Through Our Trusted Services.',
    demoLink: 'https://cikpro.netlify.app/',
    tags: ['Bootstrap', 'UI Library']
  },
  {
    name: 'FAST UPB',
    description: 'Festival Ajang Sinergisitas Teknologi',
    demoLink: 'https://fastupb.com/',
    tags: ['Laravel', 'FAST UPB']
  },
  {
    name: 'DOCTALK - MEDICAL APP',
    description: 'Health and disease consulting platform.',
    demoLink: 'https://doctalk-tan.vercel.app/',
    tags: ['Doctalk', 'Health']
  },
  {
    name: 'PRO MENTOR - APP',
    description: 'Consultation platform with mentors.',
    demoLink: 'https://promentor.vercel.app/',
    tags: ['Vue.js', 'Consulting']
  }
]
