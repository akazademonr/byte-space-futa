import { Book, NavItem, WorkspaceType } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#', id: 'home' },
  { label: 'Library', href: '#', id: 'library' },
  { label: 'Workspaces', href: '#', id: 'booking' },
  { label: 'Membership', href: '#', id: 'membership' },
  { label: 'Admin', href: '#', id: 'admin' },
];

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Designing Distributed Systems',
    author: 'Sarah Jenkins',
    category: 'Software Architecture',
    price: 54.99,
    oldPrice: 69.00,
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=400',
    tag: 'New'
  },
  {
    id: '2',
    title: 'Mastering Large Language Models',
    author: 'Dr. Aris Thorne',
    category: 'Artificial Intelligence',
    price: 82.00,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400',
    tag: 'Best Seller'
  },
  {
    id: '3',
    title: 'React for Enterprise Apps',
    author: 'Marcus T. Webb',
    category: 'Frontend Development',
    price: 45.50,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    title: 'Kubernetes Up & Running',
    author: 'Kelsey Hightower',
    category: 'DevOps & Cloud',
    price: 39.99,
    oldPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=400'
  }
];

export const WORKSPACE_TYPES: WorkspaceType[] = [
  { id: 'open', name: 'Open Desk', icon: 'Laptop' },
  { id: 'quiet', name: 'Quiet Study', icon: 'BookOpen' },
  { id: 'station', name: 'Computer Stn', icon: 'Monitor' },
  { id: 'meeting', name: 'Meeting Room', icon: 'Users' },
];
