import { Metadata } from 'next';
import DashboardSidebar from '@/components/DashboardNavbar';

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
    <div className="flex min-h-screen bg-[#1B2B27]">
      <DashboardSidebar />
      <main className="flex-1 ml-64">
        {children}
      </main>
    </div>
  );
} 