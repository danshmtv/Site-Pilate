'use client'
import { useEffect, useRef, useState } from 'react'

const DESIGN_WIDTH = 1440

export default function ScaleWrapper({ children }: { children: React.ReactNode }) {
  const [scale, setScale] = useState(1)
  const innerRef = useRef<HTMLDivElement>(null)
  const [scaledHeight, setScaledHeight] = useState<number | null>(null)

  useEffect(() => {
    const updateAll = () => {
      const w = window.innerWidth
      const s = w < DESIGN_WIDTH ? w / DESIGN_WIDTH : 1
      setScale(s)
      if (innerRef.current && s < 1) {
        setScaledHeight(innerRef.current.scrollHeight * s)
      } else {
        setScaledHeight(null)
      }
    }

    updateAll()
    window.addEventListener('resize', updateAll)

    const ro = new ResizeObserver(updateAll)
    if (innerRef.current) ro.observe(innerRef.current)

    return () => {
      window.removeEventListener('resize', updateAll)
      ro.disconnect()
    }
  }, [])

  if (scale >= 1) return <>{children}</>

  return (
    <div style={{ overflow: 'hidden', height: scaledHeight ?? undefined }}>
      <div
        ref={innerRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          width: `${DESIGN_WIDTH}px`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
