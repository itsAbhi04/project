'use client'

interface PanDataStatsProps {
  panData: {
    solicited: { count: number; withImage: number; withoutImage: number }
    received: { count: number; withImage: number; withoutImage: number }
  }
}

export default function PanDataStats({ panData }: PanDataStatsProps) {
  return (
    <div className="space-y-4">
      {/* No. Of PANs Solicited */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">📊</span>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">No. Of PANs Solicited</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                400 KRA KRA | {panData.solicited.withImage} With Image | {panData.solicited.withoutImage} Without Image
              </div>
            </div>
          </div>
          <div className="text-xl font-bold text-gray-900 dark:text-white">{panData.solicited.count}</div>
        </div>
      </div>
      
      {/* Data Received */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded flex items-center justify-center">
              <span className="text-green-600 dark:text-green-400 text-sm font-bold">✓</span>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">Data Received</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                300 KRA KRA | {panData.received.withImage} With Image | {panData.received.withoutImage} Without Image
              </div>
            </div>
          </div>
          <div className="text-xl font-bold text-gray-900 dark:text-white">{panData.received.count}</div>
        </div>
      </div>
    </div>
  )
}