'use client'

import { Search, Bell, Calendar, ChevronDown, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useTheme } from 'next-themes'

interface NavbarProps {
  timeRange: string
  setTimeRange: (range: string) => void
  viewType: string
  setViewType: (type: string) => void
}

export default function Navbar({ timeRange, setTimeRange, viewType, setViewType }: NavbarProps) {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Title */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
        </div>

        {/* Right side - Search, Notification, Profile */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <Input
              type="text"
              placeholder="Search anything here..."
              className="pl-10 w-64 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="p-2">
            <Bell size={20} className="text-gray-600 dark:text-gray-300" />
          </Button>

          {/* Profile */}
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm">
              <div className="font-medium text-gray-900 dark:text-white flex items-center">
                Madhu Kumar
                <ChevronDown size={16} className="ml-1 text-gray-400" />
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-xs">May 10, 2024</div>
            </div>
          </div>
        </div>
      </div>

      {/* Company and Controls */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Axis MF</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
              <span>Home</span>
              <span>›</span>
              <span>Dashboard</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Time Range Buttons */}
            <div className="flex space-x-1">
              <Button
                variant={timeRange === 'today' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTimeRange('today')}
                className={timeRange === 'today' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600'}
              >
                Today
              </Button>
              <Button
                variant={timeRange === 'thisMonth' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTimeRange('thisMonth')}
                className={timeRange === 'thisMonth' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600'}
              >
                This Month
              </Button>
              <Button
                variant={timeRange === 'custom' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTimeRange('custom')}
                className={timeRange === 'custom' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600'}
              >
                Custom
              </Button>
            </div>

            {/* Date Display */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded px-3 py-1 bg-white dark:bg-gray-700">
              <Calendar size={16} />
              <span>12 Feb 2025</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}