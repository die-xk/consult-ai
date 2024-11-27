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
    <div className="dashboard-container">
      <DashboardNavbar />
      <main>
        {children}
      </main>
    </div>
  );
} 