'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import LayoutSwitcher, { LayoutType } from '@/components/LayoutSwitcher'

// Import layout components
import OriginalLayout from './layouts/original'
import HybridLayout from './layouts/hybrid'
import MultiStepLayout from './layouts/multi-step'
import VideoLayout from './layouts/video'
import SuperQuickLayout from './layouts/super-quick'

export default function Home() {
  const searchParams = useSearchParams()
  const [currentLayout, setCurrentLayout] = useState<LayoutType>('super-quick')

  // Initialize layout from URL params or localStorage
  useEffect(() => {
    const urlLayout = searchParams?.get('layout') as LayoutType | null
    const savedLayout = (typeof window !== 'undefined' ? localStorage.getItem('baseaim-layout') : null) as LayoutType | null

    if (urlLayout && ['original', 'hybrid', 'multi-step', 'video', 'super-quick'].includes(urlLayout)) {
      setCurrentLayout(urlLayout)
      if (typeof window !== 'undefined') {
        localStorage.setItem('baseaim-layout', urlLayout)
      }
    } else if (savedLayout && ['original', 'hybrid', 'multi-step', 'video', 'super-quick'].includes(savedLayout)) {
      setCurrentLayout(savedLayout)
    }
  }, [searchParams])

  const handleLayoutChange = (layout: LayoutType) => {
    setCurrentLayout(layout)

    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('baseaim-layout', layout)
    }

    // Update URL without page reload
    const url = new URL(window.location.href)
    url.searchParams.set('layout', layout)
    window.history.pushState({}, '', url.toString())
  }

  // Render the selected layout
  const renderLayout = () => {
    switch (currentLayout) {
      case 'hybrid':
        return <HybridLayout />
      case 'multi-step':
        return <MultiStepLayout />
      case 'video':
        return <VideoLayout />
      case 'super-quick':
        return <SuperQuickLayout />
      case 'original':
      default:
        return <OriginalLayout />
    }
  }

  return (
    <>
      {renderLayout()}
      <LayoutSwitcher
        currentLayout={currentLayout}
        onLayoutChange={handleLayoutChange}
      />
    </>
  )
}
