import React from 'react';
import Navbar from '../Navbar';
import { cn } from '@/lib/utils';
import Footer from '../Footer';

interface BaseLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, className }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={cn("flex-grow", className)}>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default BaseLayout;