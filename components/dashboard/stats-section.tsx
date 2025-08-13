'use client'

import { TrendingUp, TrendingDown, Users, Settings } from 'lucide-react'

interface StatsSectionProps {
  data: {
    totalKyc: number
    newKyc: { count: number; change: number }
    modifiedKyc: { count: number; change: number }
  }
}

export default function StatsSection({ data }: StatsSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
      <div className="mb-4">
        <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total KYCs</h3>
        <div className="text-3xl font-bold text-gray-900 dark:text-white">{data.totalKyc.toLocaleString()}</div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* New KYC */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400">New KYC</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{data.newKyc.count.toLocaleString()}</div>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp size={16} className="mr-1" />
              <span>{data.newKyc.change}%</span>
            </div>
          </div>
        </div>

        {/* Modified KYC */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
            <Settings className="w-6 h-6 text-orange-600 dark:text-orange-400" />
          </div>
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Modified KYC</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{data.modifiedKyc.count.toLocaleString()}</div>
            <div className="flex items-center text-sm text-red-600">
              <TrendingDown size={16} className="mr-1" />
              <span>{Math.abs(data.modifiedKyc.change)}%</span>
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500">400 kg KRA | 56 Internal</div>
          </div>
        </div>
      </div>
    </div>
  )
}