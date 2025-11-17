import React from 'react'

export default function page() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6">
        <h1 className="text-2xl font-bold text-green-800 mb-6">Settings</h1>
        <div className="space-y-6">
          {/* Add your settings content here */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Notifications</h3>
                <p className="text-sm text-gray-500">Receive email notifications</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


