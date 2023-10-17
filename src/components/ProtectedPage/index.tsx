'use client'

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

interface ProtectedPageProps {
  children: React.ReactNode;
}

export default function ProtectedPage({ children }: ProtectedPageProps) {
  const { data: session } = useSession();

  if (!session) {
    redirect('/login');
  }

  return <>{children}</>;
}
