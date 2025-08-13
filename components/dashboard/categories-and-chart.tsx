'use client'

import { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

interface CategoriesAndChartProps {
  categories: {
    individual: { ri: number; nri: number }
    nonIndividual: { ri: number; nri: number }
  }
  panData: {
    solicited: { count: number; withImage: number; withoutImage: number }
    received: { count: number; withImage: number; withoutImage: number }
  }
}

const COLORS = ['#3b82f6', '#06b6d4', '#10b981', '#ef4444']

export default function CategoriesAndChart({ categories, panData }: CategoriesAndChartProps) {
  const [activeTab, setActiveTab] = useState('individual')
  const [chartTab, setChartTab] = useState('solicited')
  const [viewTab, setViewTab] = useState('individual')

  const currentData = categories[activeTab as keyof typeof categories]

  const chartData = [
    { name: 'No Of PANs Solicited', value: panData.solicited.count, color: COLORS[0] },
    { name: 'Received', value: panData.received.count, color: COLORS[1] },
    { name: 'Consumed', value: Math.floor(panData.received.count * 0.8), color: COLORS[2] },
    { name: 'Pending', value: Math.floor(panData.received.count * 0.2), color: COLORS[3] },
  ]

  const total = chartData.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">Categories</h3>
          <div className="flex space-x-4 text-sm">
            <button
              onClick={() => setActiveTab('individual')}
              className={`${activeTab === 'individual' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-500 dark:text-gray-400'} pb-1`}
            >
              Individual
            </button>
            <button
              onClick={() => setActiveTab('nonIndividual')}
              className={`${activeTab === 'nonIndividual' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-500 dark:text-gray-400'} pb-1`}
            >
              Non Individual
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">RI</div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: `${currentData.ri}%`}}></div>
            </div>
          </div>
          
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">NRI</div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full" style={{width: `${currentData.nri}%`}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Circular Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4 text-sm">
            <button
              onClick={() => setChartTab('solicited')}
              className={`${chartTab === 'solicited' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-500 dark:text-gray-400'} pb-1`}
            >
              Solicited
            </button>
            <button className="text-gray-400 pb-1">Unsolicited</button>
          </div>
          <div className="flex space-x-4 text-sm">
            <button
              onClick={() => setViewTab('individual')}
              className={`${viewTab === 'individual' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-500 dark:text-gray-400'} pb-1`}
            >
              Individual
            </button>
            <button className="text-gray-400 pb-1">Non Individual</button>
          </div>
        </div>
        
        <div className="relative">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xs text-gray-500 dark:text-gray-400">Total</div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">{total.toLocaleString()}</div>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          {chartData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}