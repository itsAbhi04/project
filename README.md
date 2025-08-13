# KYC Dashboard - Next.js Application

A professional KYC (Know Your Customer) dashboard built with Next.js 14, featuring real-time analytics, interactive charts, and a responsive design.

## 🚀 Features

### Core Functionality
- **Comprehensive Dashboard**: Real-time KYC metrics and analytics
- **Interactive Charts**: Bar charts and pie charts with hover tooltips using Recharts
- **Status Tracking**: Monitor KYC applications across different stages
- **Category Analytics**: RI/NRI breakdown with progress visualization
- **Time Range Filtering**: Today, This Month, and Custom date ranges
- **View Type Switching**: Individual vs Non-Individual data views

### UI/UX Features
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Mobile-first approach with collapsible sidebar
- **Loading States**: Skeleton loaders for improved perceived performance
- **Smooth Animations**: Micro-interactions and transitions
- **Professional Design**: Clean, modern interface following enterprise standards

### Technical Features
- **Next.js 14**: App Router with TypeScript
- **Tailwind CSS**: Utility-first styling with custom design system
- **Recharts**: Interactive and responsive charts
- **Lucide Icons**: Consistent iconography
- **Mock API**: Dynamic data loading simulation

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **Theme**: next-themes for dark mode
- **TypeScript**: Full type safety

## 📋 Requirements Implemented

### Layout & Sections ✅
- **Sidebar Navigation**: Logo, menu items with active highlighting
- **Top Navbar**: Breadcrumb, search bar, notification icon, profile section
- **Main Dashboard**: All sections as per requirements

### Functionality ✅
- **Tab Switching**: Time range and view type controls
- **Responsive Design**: Mobile-friendly with collapsible sidebar
- **Dynamic Data Loading**: All stats populated from mock API

### Bonus Features ✅
- **Dark Mode**: Complete theme switching
- **Loading Skeletons**: Enhanced user experience
- **Interactive Charts**: Hover tooltips and animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/itsAbhi04/project.git
cd kyc-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── api/dashboard/           # Mock API endpoints
│   ├── applications/            # Applications page
│   ├── billing/                # Billing page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx               # Home page (Dashboard)
├── components/
│   ├── dashboard/              # Dashboard-specific components
│   │   ├── sidebar.tsx
│   │   ├── navbar.tsx
│   │   ├── dashboard-content.tsx
│   │   ├── stats-card.tsx
│   │   ├── bar-chart.tsx
│   │   ├── status-cards.tsx
│   │   ├── category-section.tsx
│   │   ├── circular-chart.tsx
│   │   └── pan-data-stats.tsx
│   ├── ui/                    # Reusable UI components
│   └── theme-provider.tsx     # Theme context provider
├── lib/
│   └── utils.ts              # Utility functions
└── tailwind.config.ts        # Tailwind configuration
```

## 🔌 API Endpoints

### Dashboard Data
- **GET** `/api/dashboard?timeRange={today|thisMonth|custom}&viewType={individual|nonIndividual}`
  - Returns comprehensive dashboard data including metrics, charts data, and statistics

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6) - Main brand color
- **Success**: Green (#10B981) - Positive metrics
- **Warning**: Orange (#F59E0B) - Cautionary states
- **Error**: Red (#EF4444) - Errors and critical issues

### Components
- **Cards**: Clean card-based layout
- **Charts**: Interactive Recharts components
- **Progress Bars**: Animated category breakdowns
- **Status Indicators**: Color-coded KYC stages

## 📱 Responsive Breakpoints

- **Mobile**: < 768px - Stacked layout, collapsible sidebar
- **Tablet**: 768px - 1024px - Adapted grid layouts
- **Desktop**: > 1024px - Full multi-column layout

## ⚡ Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Loading States**: Skeleton UI for improved perceived performance
- **Optimized Renders**: Efficient state management
- **Static Generation**: Where applicable

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 🌐 Browser Support

- Chrome 91+
- Firefox 90+
- Safari 14+
- Edge 91+

## 📸 Screenshots

The dashboard includes:
- Interactive sidebar navigation
- Real-time KYC metrics
- Bar charts for Individual vs Non-Individual comparison
- Status cards for KYC stages
- Category progress bars
- Circular charts for PAN data
- Dark mode support
- Mobile responsive design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.