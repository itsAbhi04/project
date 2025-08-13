'use client'

interface StatusCard {
  title: string
  count: number
  color: string
  icon: string
}

interface StatusCardsProps {
  statusData: StatusCard[]
}

const iconMap = {
  '🚀': '🚀',
  '⚙️': '⚙️', 
  '✅': '✅',
  '✓': '✅',
  '⏸️': '⏸️',
  '📄': '📄'
}

const colorMap = {
  blue: 'text-blue-600',
  orange: 'text-orange-600', 
  green: 'text-green-600',
  red: 'text-red-600',
  purple: 'text-purple-600',
  yellow: 'text-yellow-600'
}

export default function StatusCards({ statusData }: StatusCardsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4 text-sm text-gray-600 dark:text-gray-400">
        <span>Today</span>
        <span>Yesterday</span>
        <span>Individual</span>
        <span>Non Individual</span>
      </div>
      
      <div className="grid grid-cols-6 gap-4">
        {statusData.map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl mb-2">{iconMap[item.icon as keyof typeof iconMap] || item.icon}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 leading-tight">{item.title}</div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">{item.count}</div>
          </div>
        ))}
      </div>
    </div>
  )
}