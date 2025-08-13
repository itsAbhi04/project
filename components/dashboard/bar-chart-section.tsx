'use client'

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { BarChart3, List } from 'lucide-react'

interface BarChartSectionProps {
  data: Array<{
    name: string
    individual: number
    nonIndividual: number
  }>
}

export default function BarChartSection({ data }: BarChartSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Today</span>
          <div className="w-3 h-3 bg-blue-300 rounded-full ml-4"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Yesterday</span>
        </div>
        <div className="flex space-x-2">
          <BarChart3 size={20} className="text-gray-400" />
          <List size={20} className="text-gray-400" />
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              className="text-sm text-gray-600 dark:text-gray-400"
            />
            <YAxis hide />
            <Bar 
              dataKey="individual" 
              fill="#3b82f6" 
              radius={[4, 4, 0, 0]}
              barSize={40}
            />
            <Bar 
              dataKey="nonIndividual" 
              fill="#93c5fd" 
              radius={[4, 4, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center space-x-8 mt-4 text-sm text-gray-600 dark:text-gray-400">
        <span>Individual</span>
        <span>Non Individual</span>
      </div>
    </div>
  )
}