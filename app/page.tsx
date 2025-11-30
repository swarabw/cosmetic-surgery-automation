'use client'

import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-indigo-900">
            🏥 Cosmetic Surgery Practice Manager
          </h1>
          <p className="text-gray-600 mt-1">Complete automation system for your practice</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm mt-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {['dashboard', 'patients', 'followups', 'social', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'patients' && <Patients />}
        {activeTab === 'followups' && <FollowUps />}
        {activeTab === 'social' && <SocialMedia />}
        {activeTab === 'reviews' && <Reviews />}
      </main>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Patients" value="156" icon="👥" color="blue" />
        <StatCard title="Pending Follow-ups" value="12" icon="📋" color="yellow" />
        <StatCard title="Reviews This Month" value="23" icon="⭐" color="green" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <AutomationCard
          title="Post-Op Follow-ups"
          description="Automated daily at 9am Australia time"
          status="Active"
          nextRun="Tomorrow 9:00 AM"
        />
        <AutomationCard
          title="Social Media Posts"
          description="Mon, Wed, Fri at 9am"
          status="Active"
          nextRun="Monday 9:00 AM"
        />
        <AutomationCard
          title="Review Requests"
          description="Daily at 8pm Australia time"
          status="Active"
          nextRun="Today 8:00 PM"
        />
      </div>
    </div>
  )
}

function Patients() {
  const [patients, setPatients] = useState([
    { id: 1, name: 'Sarah Johnson', procedure: 'Rhinoplasty', date: '2025-11-16', contact: 'Email' },
    { id: 2, name: 'Michael Chen', procedure: 'Facelift', date: '2025-11-20', contact: 'SMS' },
    { id: 3, name: 'Emma Williams', procedure: 'Breast Augmentation', date: '2025-11-25', contact: 'WhatsApp' },
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Patient Management</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          + Add Patient
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Procedure</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{patient.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.procedure}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.contact}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function FollowUps() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Post-Op Follow-ups</h2>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">⏰ Scheduled for Today (9:00 AM)</h3>
        <div className="space-y-4">
          <FollowUpItem
            patient="Sarah Johnson"
            type="Day 14 Check-in"
            procedure="Rhinoplasty"
            method="Email"
          />
          <FollowUpItem
            patient="Michael Chen"
            type="Day 7 Check-in"
            procedure="Facelift"
            method="SMS"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">📝 Message Template</h3>
        <textarea
          className="w-full h-32 p-3 border border-gray-300 rounded-lg"
          placeholder="Hi [PATIENT_NAME], this is Dr. [YOUR_NAME] checking in..."
          defaultValue="Hi [PATIENT_NAME], this is Dr. [YOUR_NAME] checking in on your recovery after your [PROCEDURE_NAME] on [DATE]. How are you feeling? Any concerns or questions? Please reply or call [YOUR_PHONE]."
        />
        <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Save Template
        </button>
      </div>
    </div>
  )
}

function SocialMedia() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Social Media Scheduler</h2>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">📅 Posting Schedule</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div>
              <p className="font-medium">Monday - Educational Content</p>
              <p className="text-sm text-gray-600">9:00 AM Australia time</p>
            </div>
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Active</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div>
              <p className="font-medium">Wednesday - Before/After</p>
              <p className="text-sm text-gray-600">9:00 AM Australia time</p>
            </div>
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Active</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div>
              <p className="font-medium">Friday - Testimonials</p>
              <p className="text-sm text-gray-600">9:00 AM Australia time</p>
            </div>
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Active</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">✍️ Content Bank</h3>
        <button className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700">
          + Add New Content
        </button>
      </div>
    </div>
  )
}

function Reviews() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Review Request Manager</h2>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">⏰ Scheduled for Today (8:00 PM)</h3>
        <div className="space-y-4">
          <ReviewItem
            patient="Emma Williams"
            procedure="Breast Augmentation"
            daysPost={14}
            method="WhatsApp"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">⭐ Google Review Link</h3>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg"
          placeholder="https://g.page/r/YOUR_REVIEW_LINK"
        />
        <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Save Link
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">📝 Review Request Template</h3>
        <textarea
          className="w-full h-32 p-3 border border-gray-300 rounded-lg"
          defaultValue="Hi [PATIENT_NAME]! We hope you're thrilled with your [PROCEDURE_NAME] results! Your feedback means the world to us. Would you mind sharing your experience on Google? [GOOGLE_REVIEW_LINK]"
        />
        <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Save Template
        </button>
      </div>
    </div>
  )
}

function StatCard({ title, value, icon, color }: any) {
  const colors = {
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
        <div className={`${colors[color]} w-12 h-12 rounded-full flex items-center justify-center text-2xl`}>
          {icon}
        </div>
      </div>
    </div>
  )
}

function AutomationCard({ title, description, status, nextRun }: any) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
          <div className="mt-4 space-y-1">
            <p className="text-sm">
              <span className="font-medium">Status:</span>{' '}
              <span className="text-green-600">{status}</span>
            </p>
            <p className="text-sm">
              <span className="font-medium">Next Run:</span> {nextRun}
            </p>
          </div>
        </div>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
          Active
        </span>
      </div>
    </div>
  )
}

function FollowUpItem({ patient, type, procedure, method }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div>
        <p className="font-medium">{patient}</p>
        <p className="text-sm text-gray-600">{type} - {procedure}</p>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-600">via {method}</p>
        <button className="mt-1 text-indigo-600 hover:text-indigo-900 text-sm font-medium">
          Send Now
        </button>
      </div>
    </div>
  )
}

function ReviewItem({ patient, procedure, daysPost, method }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div>
        <p className="font-medium">{patient}</p>
        <p className="text-sm text-gray-600">{procedure} - {daysPost} days post-op</p>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-600">via {method}</p>
        <button className="mt-1 text-indigo-600 hover:text-indigo-900 text-sm font-medium">
          Send Request
        </button>
      </div>
    </div>
  )
}
