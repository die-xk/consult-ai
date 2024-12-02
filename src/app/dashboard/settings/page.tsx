'use client'

import { useState } from 'react';
import { IoSaveOutline, IoLockClosedOutline, IoMailOutline, IoKeyOutline, IoPersonOutline, IoSettingsOutline, IoTrashOutline } from 'react-icons/io5';

export default function Settings() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    contactNumber: '',
    profilePicture: null,
  });

  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [emailPreferences, setEmailPreferences] = useState({
    proposalUpdates: false,
    accountUpdates: false,
    featureAnnouncements: false,
    marketingEmails: false,
  });

  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const [appPreferences, setAppPreferences] = useState({
    defaultTemplate: '',
    scorecardSettings: '',
    language: 'English',
    region: 'US',
    notifications: 'email',
  });

  const [billingInfo, setBillingInfo] = useState({
    plan: 'Basic',
    billingAddress: '',
    creditCard: '',
  });

  const [teamManagement, setTeamManagement] = useState({
    members: [],
  });

  const handleSaveChanges = () => {
    // Implement save changes logic
  };

  return (
    <div className="min-h-screen bg-[#1B2B27] p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">
          Manage your account settings and preferences.
        </p>
      </header>

      {/* Account Settings */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-6">Account Settings</h2>
        <div className="bg-[#2B3B37] rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <IoPersonOutline className="w-5 h-5 text-[#7CFF9B]" />
            Personal Information
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              value={personalInfo.name}
              onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
              className="w-full bg-[#1B2B27] text-white p-3 rounded-lg focus:outline-none"
              placeholder="Name"
            />
            <input
              type="email"
              value={personalInfo.email}
              onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
              className="w-full bg-[#1B2B27] text-white p-3 rounded-lg focus:outline-none"
              placeholder="Email Address"
            />
            <input
              type="text"
              value={personalInfo.contactNumber}
              onChange={(e) => setPersonalInfo({ ...personalInfo, contactNumber: e.target.value })}
              className="w-full bg-[#1B2B27] text-white p-3 rounded-lg focus:outline-none"
              placeholder="Contact Number"
            />
            <button className="bg-[#7CFF9B] text-[#1B2B27] px-4 py-2 rounded-lg hover:bg-[#6ee889] transition-colors">
              Upload Profile Picture
            </button>
          </div>
        </div>

        <div className="bg-[#2B3B37] rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <IoKeyOutline className="w-5 h-5 text-[#7CFF9B]" />
            Password Management
          </h3>
          <div className="space-y-4">
            <input
              type="password"
              value={passwords.oldPassword}
              onChange={(e) => setPasswords({ ...passwords, oldPassword: e.target.value })}
              className="w-full bg-[#1B2B27] text-white p-3 rounded-lg focus:outline-none"
              placeholder="Old Password"
            />
            <input
              type="password"
              value={passwords.newPassword}
              onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
              className="w-full bg-[#1B2B27] text-white p-3 rounded-lg focus:outline-none"
              placeholder="New Password"
            />
            <input
              type="password"
              value={passwords.confirmPassword}
              onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })}
              className="w-full bg-[#1B2B27] text-white p-3 rounded-lg focus:outline-none"
              placeholder="Confirm New Password"
            />
            <button className="bg-[#7CFF9B] text-[#1B2B27] px-4 py-2 rounded-lg hover:bg-[#6ee889] transition-colors">
              Save Changes
            </button>
            <a href="#" className="text-[#7CFF9B] hover:underline">Reset Password</a>
          </div>
        </div>

        <div className="bg-[#2B3B37] rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <IoMailOutline className="w-5 h-5 text-[#7CFF9B]" />
            Email Preferences
          </h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                checked={emailPreferences.proposalUpdates}
                onChange={(e) => setEmailPreferences({ ...emailPreferences, proposalUpdates: e.target.checked })}
                className="form-checkbox text-[#7CFF9B]"
              />
              Proposal updates
            </label>
            <label className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                checked={emailPreferences.accountUpdates}
                onChange={(e) => setEmailPreferences({ ...emailPreferences, accountUpdates: e.target.checked })}
                className="form-checkbox text-[#7CFF9B]"
              />
              Account updates
            </label>
            <label className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                checked={emailPreferences.featureAnnouncements}
                onChange={(e) => setEmailPreferences({ ...emailPreferences, featureAnnouncements: e.target.checked })}
                className="form-checkbox text-[#7CFF9B]"
              />
              New feature announcements
            </label>
            <label className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                checked={emailPreferences.marketingEmails}
                onChange={(e) => setEmailPreferences({ ...emailPreferences, marketingEmails: e.target.checked })}
                className="form-checkbox text-[#7CFF9B]"
              />
              Marketing emails
            </label>
          </div>
        </div>

        <div className="bg-[#2B3B37] rounded-lg p-6">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <IoLockClosedOutline className="w-5 h-5 text-[#7CFF9B]" />
            Two-Factor Authentication
          </h3>
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                checked={twoFactorAuth}
                onChange={(e) => setTwoFactorAuth(e.target.checked)}
                className="form-checkbox text-[#7CFF9B]"
              />
              Enable Two-Factor Authentication
            </label>
            <p className="text-sm text-gray-400">
              Add an extra layer of security to your account.
            </p>
          </div>
        </div>
      </section>

      {/* App Preferences */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-6">App Preferences</h2>
        <div className="bg-[#2B3B37] rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <IoSettingsOutline className="w-5 h-5 text-[#7CFF9B]" />
            Proposal Preferences
          </h3>
          <div className="space-y-4">
            <select
              value={appPreferences.defaultTemplate}
              onChange={(e) => setAppPreferences({ ...appPreferences, defaultTemplate: e.target.value })}
              className="w-full bg-[#1B2B27] text-white p-3 rounded-lg focus:outline-none"
            >
              <option value="">Select Default Template</option>
              <option value="template1">Template 1</option>
              <option value="template2">Template 2</option>
            </select>
            <select
              value={appPreferences.scorecardSettings}
              onChange={(e) => setAppPreferences({ ...appPreferences, scorecardSettings: e.target.value })}
              className="w-full bg-[#1B2B27] text-white p-3 rounded-lg focus:outline-none"
            >
              <option value="">Select Scorecard Settings</option>
              <option value="setting1">Setting 1</option>
              <option value="setting2">Setting 2</option>
            </select>
          </div>
        </div>

        <div className="bg-[#2B3B37] rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <IoSettingsOutline className="w-5 h-5 text-[#7CFF9B]" />
            Language & Region
          </h3>
          <div className="space-y-4">
            <select
              value={appPreferences.language}
              onChange={(e) => setAppPreferences({ ...appPreferences, language: e.target.value })}
              className="w-full bg-[#1B2B27] text-white p-3 rounded-lg focus:outline-none"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
            <select
              value={appPreferences.region}
              onChange={(e) => setAppPreferences({ ...appPreferences, region: e.target.value })}
              className="w-full bg-[#1B2B27] text-white p-3 rounded-lg focus:outline-none"
            >
              <option value="US">United States</option>
              <option value="EU">Europe</option>
            </select>
          </div>
        </div>

        <div className="bg-[#2B3B37] rounded-lg p-6">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <IoSettingsOutline className="w-5 h-5 text-[#7CFF9B]" />
            Notifications & Alerts
          </h3>
          <div className="space-y-4">
            <select
              value={appPreferences.notifications}
              onChange={(e) => setAppPreferences({ ...appPreferences, notifications: e.target.value })}
              className="w-full bg-[#1B2B27] text-white p-3 rounded-lg focus:outline-none"
            >
              <option value="email">Email</option>
              <option value="in-app">In-App</option>
              <option value="both">Both</option>
            </select>
            <label className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                className="form-checkbox text-[#7CFF9B]"
              />
              Mute non-urgent notifications
            </label>
          </div>
        </div>
      </section>

      {/* Integration Settings */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-6">Integration Settings</h2>
        <div className="bg-[#2B3B37] rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <IoSettingsOutline className="w-5 h-5 text-[#7CFF9B]" />
            Connected Accounts
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-white">Google Docs</span>
              <button className="bg-red-500/10 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/20 transition-colors">
                Disconnect
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white">Dropbox</span>
              <button className="bg-[#7CFF9B]/10 text-[#7CFF9B] px-4 py-2 rounded-lg hover:bg-[#7CFF9B]/20 transition-colors">
                Connect
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#2B3B37] rounded-lg p-6">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <IoSettingsOutline className="w-5 h-5 text-[#7CFF9B]" />
            API Keys
          </h3>
          <div className="space-y-4">
            <button className="bg-[#7CFF9B] text-[#1B2B27] px-4 py-2 rounded-lg hover:bg-[#6ee889] transition-colors">
              Generate New API Key
            </button>
            <a href="#" className="text-[#7CFF9B] hover:underline">View API Documentation</a>
          </div>
        </div>
      </section>

      {/* Billing & Subscription */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-6">Billing & Subscription</h2>
        <div className="bg-[#2B3B37] rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <IoSettingsOutline className="w-5 h-5 text-[#7CFF9B]" />
            Subscription Plan
          </h3>
          <div className="space-y-4">
            <p className="text-white">Current Plan: {billingInfo.plan}</p>
            <button className="bg-[#7CFF9B] text-[#1B2B27] px-4 py-2 rounded-lg hover:bg-[#6ee889] transition-colors">
              Change Plan
            </button>
          </div>
        </div>

        <div className="bg-[#2B3B37] rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <IoSettingsOutline className="w-5 h-5 text-[#7CFF9B]" />
            Billing Information
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              value={billingInfo.billingAddress}
              onChange={(e) => setBillingInfo({ ...billingInfo, billingAddress: e.target.value })}
              className="w-full bg-[#1B2B27] text-white p-3 rounded-lg focus:outline-none"
              placeholder="Billing Address"
            />
            <input
              type="text"
              value={billingInfo.creditCard}
              onChange={(e) => setBillingInfo({ ...billingInfo, creditCard: e.target.value })}
              className="w-full bg-[#1B2B27] text-white p-3 rounded-lg focus:outline-none"
              placeholder="Credit Card Information"
            />
            <button className="bg-[#7CFF9B] text-[#1B2B27] px-4 py-2 rounded-lg hover:bg-[#6ee889] transition-colors">
              Update Billing Info
            </button>
          </div>
        </div>

        <div className="bg-[#2B3B37] rounded-lg p-6">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <IoSettingsOutline className="w-5 h-5 text-[#7CFF9B]" />
            Team Management
          </h3>
          <div className="space-y-4">
            <button className="bg-[#7CFF9B] text-[#1B2B27] px-4 py-2 rounded-lg hover:bg-[#6ee889] transition-colors">
              Add Team Member
            </button>
            <div className="flex items-center justify-between">
              <span className="text-white">John Doe</span>
              <button className="bg-red-500/10 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/20 transition-colors">
                Remove
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Privacy & Security */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-6">Data Privacy & Security</h2>
        <div className="bg-[#2B3B37] rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <IoSettingsOutline className="w-5 h-5 text-[#7CFF9B]" />
            Download Your Data
          </h3>
          <button className="bg-[#7CFF9B] text-[#1B2B27] px-4 py-2 rounded-lg hover:bg-[#6ee889] transition-colors">
            Request Data Export
          </button>
        </div>

        <div className="bg-[#2B3B37] rounded-lg p-6">
          <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <IoTrashOutline className="w-5 h-5 text-red-400" />
            Delete Account
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Deleting your account will remove all your data permanently. This action cannot be undone.
          </p>
          <button className="bg-red-500/10 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/20 transition-colors">
            Delete Account
          </button>
        </div>
      </section>
    </div>
  );
} 