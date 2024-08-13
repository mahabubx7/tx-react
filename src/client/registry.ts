import { lazy } from 'react';
import { LayoutProps } from './shared';

export type RoutesRegistry = {
  component: React.LazyExoticComponent<() => JSX.Element>;
  path: string;
  layout?: React.FC<LayoutProps>;
};

/// REGISTER YOUR PAGES HERE ...
export const registry: RoutesRegistry[] = [
  { component: lazy(() => import('./pages/home')), path: '/' },
  { component: lazy(() => import('./pages/about')), path: '/about' },
  {
    component: lazy(() => import('./pages/not-found')),
    path: '*',
  },
];
