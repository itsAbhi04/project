import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const timeRange = searchParams.get('timeRange') || 'today'
    const viewType = searchParams.get('viewType') || 'individual'

  // Simulate different data based on parameters
  const baseMultiplier = timeRange === 'today' ? 1 : timeRange === 'thisMonth' ? 30 : 15
  const viewMultiplier = viewType === 'individual' ? 1.2 : 0.8

  const mockData = {
    totalKyc: Math.floor(3456 * baseMultiplier * viewMultiplier),
    newKyc: { 
      count: Math.floor(3000 * baseMultiplier * viewMultiplier), 
      change: timeRange === 'today' ? 12 : timeRange === 'thisMonth' ? -5 : 8 
    },
    modifiedKyc: { 
      count: Math.floor(456 * baseMultiplier * viewMultiplier), 
      change: timeRange === 'today' ? -10 : timeRange === 'thisMonth' ? 15 : -2 
    },
    barChartData: [
      {
        name: 'Today',
        individual: Math.floor(450 * viewMultiplier),
        nonIndividual: Math.floor(320 * viewMultiplier),
      },
      {
        name: 'Yesterday',
        individual: Math.floor(380 * viewMultiplier),
        nonIndividual: Math.floor(290 * viewMultiplier),
      },
    ],
    statusCards: [
      { title: 'KYC Initiated', count: Math.floor(234 * baseMultiplier * viewMultiplier), color: 'blue', icon: '🚀' },
      { title: 'Under Process', count: Math.floor(45 * baseMultiplier * viewMultiplier), color: 'orange', icon: '⚙️' },
      { title: 'Registered', count: Math.floor(350 * baseMultiplier * viewMultiplier), color: 'green', icon: '✅' },
      { title: 'Validated', count: Math.floor(654 * baseMultiplier * viewMultiplier), color: 'green', icon: '✓' },
      { title: 'Hold', count: Math.floor(269 * baseMultiplier * viewMultiplier), color: 'red', icon: '⏸️' },
      { title: 'Docs Pending', count: Math.floor(100 * baseMultiplier * viewMultiplier), color: 'red', icon: '📄' },
    ],
    categories: {
      individual: { 
        ri: timeRange === 'today' ? 75 : 68, 
        nri: timeRange === 'today' ? 25 : 32 
      },
      nonIndividual: { 
        ri: timeRange === 'today' ? 82 : 76, 
        nri: timeRange === 'today' ? 18 : 24 
      },
    },
    panData: {
      solicited: {
        count: Math.floor(956 * baseMultiplier * viewMultiplier),
        withImage: Math.floor(250 * baseMultiplier * viewMultiplier),
        withoutImage: Math.floor(256 * baseMultiplier * viewMultiplier)
      },
      received: {
        count: Math.floor(320 * baseMultiplier * viewMultiplier),
        withImage: Math.floor(100 * baseMultiplier * viewMultiplier),
        withoutImage: Math.floor(20 * baseMultiplier * viewMultiplier)
      },
    },
  }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300))

    return NextResponse.json(mockData)
  } catch (error) {
    console.error('Dashboard API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    )
  }
}