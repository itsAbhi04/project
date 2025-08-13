'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  FileText, 
  CreditCard, 
  Receipt, 
  FileCheck, 
  Bell
} from 'lucide-react'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: FileText, label: 'Applications', href: '/applications' },
  { icon: CreditCard, label: 'Billing', href: '/billing' },
  { icon: Receipt, label: 'Rate Card', href: '/rate-card' },
  { icon: FileCheck, label: 'Agreement Copy', href: '/agreement' },
  { icon: Bell, label: 'Notices', href: '/notices' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">📊</span>
          </div>
          <span className="text-gray-500 dark:text-gray-400 text-sm">Logo</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-6 py-3 text-sm transition-colors ${
                isActive
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-2 border-blue-600'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <Icon size={20} className="mr-3" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}