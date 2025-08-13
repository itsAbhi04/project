'use client'

import { useEffect, useState } from 'react'
import StatsSection from './stats-section'
import BarChartSection from './bar-chart-section'
import StatusCards from './status-cards'
import CategoriesAndChart from './categories-and-chart'
import PanDataStats from './pan-data-stats'

interface DashboardContentProps {
  timeRange: string
  viewType: string
}

interface DashboardData {
  totalKyc: number
  newKyc: { count: number; change: number }
  modifiedKyc: { count: number; change: number }
  barChartData: Array<{
    name: string
    individual: number
    nonIndividual: number
  }>
  statusCards: Array<{
    title: string
    count: number
    color: string
    icon: string
  }>
  categories: {
    individual: { ri: number; nri: number }
    nonIndividual: { ri: number; nri: number }
  }
  panData: {
    solicited: { count: number; withImage: number; withoutImage: number }
    received: { count: number; withImage: number; withoutImage: number }
  }
}

export default function DashboardContent({ timeRange, viewType }: DashboardContentProps) {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(`/api/dashboard?timeRange=${timeRange}&viewType=${viewType}`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        if (result.error) {
          throw new Error(result.error)
        }
        setData(result)
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error)
        setError(error instanceof Error ? error.message : 'Failed to load dashboard data')
      } finally {
        setTimeout(() => setLoading(false), 500)
      }
    }

    fetchData()
  }, [timeRange, viewType])

  if (loading) {
    return <div className="text-center py-8 text-gray-600 dark:text-gray-400">Loading...</div>
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-600 dark:text-red-400 mb-4">{error}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Retry
        </button>
      </div>
    )
  }

  if (!data) {
    return <div className="text-center py-8 text-gray-600 dark:text-gray-400">No data available</div>
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left Column */}
      <div className="col-span-8 space-y-6">
        <StatsSection data={data} />
        <BarChartSection data={data.barChartData} />
        <StatusCards statusData={data.statusCards} />
      </div>

      {/* Right Column */}
      <div className="col-span-4 space-y-6">
        <CategoriesAndChart categories={data.categories} panData={data.panData} />
        <PanDataStats panData={data.panData} />
      </div>
    </div>
  )
}