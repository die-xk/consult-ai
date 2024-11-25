import { Metadata } from 'next';
import DashboardNavbar from '@/components/DashboardNavbar';

export const metadata: Metadata = {
  title: 'Dashboard | ConsultAI',
  description: 'Manage your proposals and templates',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DashboardNavbar />
      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
} 