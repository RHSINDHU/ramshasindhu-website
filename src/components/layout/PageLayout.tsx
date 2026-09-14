import { type ReactNode } from 'react';
import Navigation from '@/components/navigation/Navigation';
import CustomCursor from '@/components/gallery/CustomCursor';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-ink-0">
      <CustomCursor />
      <Navigation />
      <main className={`flex-1 ${className}`}>
        {children}
      </main>
    </div>
  );
}
