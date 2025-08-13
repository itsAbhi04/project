'use client'

import { useState } from 'react'
import Sidebar from '@/components/dashboard/sidebar'
import Navbar from '@/components/dashboard/navbar'
import DashboardContent from '@/components/dashboard/dashboard-content'
import ErrorBoundary from '@/components/error-boundary'

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('today')
  const [viewType, setViewType] = useState('individual')

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <ErrorBoundary>
        <Sidebar />
      </ErrorBoundary>
      
      <div className="flex-1 ml-64">
        <ErrorBoundary>
          <Navbar 
            timeRange={timeRange}
            setTimeRange={setTimeRange}
            viewType={viewType}
            setViewType={setViewType}
          />
        </ErrorBoundary>
        
        <main className="p-6">
          <ErrorBoundary>
            <DashboardContent timeRange={timeRange} viewType={viewType} />
          </ErrorBoundary>
        </main>
      </div>
    </div>
  )
}