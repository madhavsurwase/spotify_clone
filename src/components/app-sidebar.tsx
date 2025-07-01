"use client";

import {
  Home,
  Search,
  Library,
  PlusSquare,
  Heart,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export function AppSidebar() {
  const pathname = usePathname();

  const mainNav = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/search', label: 'Search', icon: Search },
    { href: '/library', label: 'Your Library', icon: Library },
  ];

  const secondaryNav = [
    { href: '/playlist/create', label: 'Create Playlist', icon: PlusSquare },
    { href: '/collection/tracks', label: 'Liked Songs', icon: Heart },
  ];
  
  const aiNav = [
    { href: '/ai-playlist', label: 'AI Playlist Generator', icon: Sparkles },
  ]

  const NavLink = ({
    item,
  }: {
    item: { href: string; label: string; icon: React.ElementType };
  }) => {
    const Icon = item.icon;
    const isActive = pathname === item.href;
    return (
      <Link href={item.href} passHref>
        <Button
          variant={isActive ? 'secondary' : 'ghost'}
          className="w-full justify-start font-semibold text-base h-12 gap-4"
        >
          <Icon className={cn("h-6 w-6", isActive ? "text-primary" : "text-foreground")} />
          <span className={isActive ? 'text-foreground' : 'text-muted-foreground'}>{item.label}</span>
        </Button>
      </Link>
    );
  };

  return (
    <aside className="w-64 flex-shrink-0 bg-sidebar border-r border-sidebar-border h-screen flex flex-col p-4 space-y-8">
      <h1 className="text-2xl font-bold font-headline px-4">TuneFlow</h1>
      <nav className="flex flex-col space-y-2">
        {mainNav.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </nav>
      <nav className="flex flex-col space-y-2">
        {secondaryNav.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </nav>
       <div className="mt-auto">
        <nav className="flex flex-col space-y-2">
            {aiNav.map((item) => (
                <Link href={item.href} key={item.href} passHref>
                    <Button variant="ghost" className="w-full justify-start h-12 gap-4 text-base bg-primary/20 hover:bg-primary/30">
                        <item.icon className="h-6 w-6 text-primary" />
                        <span className="text-primary-foreground">{item.label}</span>
                    </Button>
                </Link>
            ))}
        </nav>
      </div>
    </aside>
  );
}
