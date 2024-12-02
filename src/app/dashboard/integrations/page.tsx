'use client'

import { useState } from 'react';
import { 
  IoCheckmarkCircle,
  IoCloseCircle,
  IoHourglassOutline,
  IoChevronForward,
  IoHelpCircleOutline
} from 'react-icons/io5';
import Image from 'next/image';

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: 'connected' | 'disconnected' | 'coming_soon';
  category: 'document' | 'storage' | 'crm' | 'other';
}

export default function Integrations() {
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: 'google-docs',
      name: 'Google Docs',
      description: 'Sync your proposals seamlessly with Google Docs for real-time editing and collaboration.',
      icon: '/icons/google-docs.svg',
      status: 'connected',
      category: 'document'
    },
    {
      id: 'microsoft-word',
      name: 'Microsoft Word',
      description: 'Export and import proposals directly to Microsoft Word format.',
      icon: '/icons/microsoft-word.svg',
      status: 'disconnected',
      category: 'document'
    },
    {
      id: 'dropbox',
      name: 'Dropbox',
      description: 'Automatically backup your proposals to Dropbox cloud storage.',
      icon: '/icons/dropbox.svg',
      status: 'coming_soon',
      category: 'storage'
    },
    {
      id: 'salesforce',
      name: 'Salesforce',
      description: 'Connect with Salesforce to sync client data and proposal status.',
      icon: '/icons/salesforce.svg',
      status: 'coming_soon',
      category: 'crm'
    }
  ]);

  const handleToggleConnection = async (integrationId: string) => {
    // Implementation for connecting/disconnecting integrations
    setIntegrations(integrations.map(integration => 
      integration.id === integrationId
        ? { 
            ...integration, 
            status: integration.status === 'connected' ? 'disconnected' : 'connected' 
          }
        : integration
    ));
  };

  const getCurrentIntegrations = () => 
    integrations.filter(i => i.status !== 'coming_soon');

  const getUpcomingIntegrations = () => 
    integrations.filter(i => i.status === 'coming_soon');

  return (
    <div className="min-h-screen bg-[#1B2B27] p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Integrations</h1>
        <p className="text-gray-400">
          Connect your favorite tools to streamline your proposal creation process.
        </p>
      </header>

      {/* Current Integrations */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-6">Current Integrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {getCurrentIntegrations().map(integration => (
            <div 
              key={integration.id}
              className="bg-[#2B3B37] rounded-lg p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <Image
                    src={integration.icon}
                    alt={integration.name}
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <h3 className="text-white font-medium">{integration.name}</h3>
                  <p className="text-sm text-gray-400">{
                    integration.status === 'connected' ? 'Connected' : 'Not Connected'
                  }</p>
                </div>
              </div>
              <button
                onClick={() => handleToggleConnection(integration.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  integration.status === 'connected'
                    ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20'
                    : 'bg-[#7CFF9B]/10 text-[#7CFF9B] hover:bg-[#7CFF9B]/20'
                }`}
              >
                {integration.status === 'connected' ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Available Integrations */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-6">Available Integrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrations.map(integration => (
            <div 
              key={integration.id}
              className="bg-[#2B3B37] rounded-lg p-6"
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-white font-medium mb-2">{integration.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{integration.description}</p>
              <div className="flex items-center gap-2">
                {integration.status === 'connected' && (
                  <IoCheckmarkCircle className="text-[#7CFF9B] w-5 h-5" />
                )}
                {integration.status === 'coming_soon' && (
                  <IoHourglassOutline className="text-blue-400 w-5 h-5" />
                )}
                <span className={`text-sm ${
                  integration.status === 'connected' ? 'text-[#7CFF9B]' :
                  integration.status === 'coming_soon' ? 'text-blue-400' :
                  'text-gray-400'
                }`}>
                  {integration.status === 'connected' ? 'Connected' :
                   integration.status === 'coming_soon' ? 'Coming Soon' :
                   'Available'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#2B3B37] rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <IoHelpCircleOutline className="w-6 h-6 text-[#7CFF9B]" />
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7CFF9B]/10 text-[#7CFF9B] flex items-center justify-center text-sm">
                1
              </span>
              <h3 className="text-white font-medium">Connect</h3>
            </div>
            <p className="text-sm text-gray-400">
              Click the "Connect" button for your desired integration
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7CFF9B]/10 text-[#7CFF9B] flex items-center justify-center text-sm">
                2
              </span>
              <h3 className="text-white font-medium">Authenticate</h3>
            </div>
            <p className="text-sm text-gray-400">
              Sign in to your account and authorize the connection
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#7CFF9B]/10 text-[#7CFF9B] flex items-center justify-center text-sm">
                3
              </span>
              <h3 className="text-white font-medium">Start Using</h3>
            </div>
            <p className="text-sm text-gray-400">
              Begin using the integrated features in your proposals
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}