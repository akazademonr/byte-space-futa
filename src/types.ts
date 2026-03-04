export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  tag?: string;
}

export interface WorkspaceType {
  id: string;
  name: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export type Page = 'home' | 'library' | 'booking' | 'membership' | 'admin';
