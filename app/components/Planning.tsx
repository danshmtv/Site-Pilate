'use client'
import { useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { useI18n } from '../lib/i18n'

const schedule: Record<string, { time: string; name: string; instructor: string; studio: string; level: string }[]> = {
  0: [
    { time: '07:00', name: 'Hatha Yoga', instructor: 'Ella M.', studio: 'Port', level: 'all' },
    { time: '09:30', name: 'Vinyasa Flow', instructor: 'Noa K.', studio: 'Sarona', level: 'inter' },
    { time: '12:00', name: 'Yin Yoga', instructor: 'Maya R.', studio: 'Port', level: 'all' },
    { time: '18:30', name: 'Ashtanga', instructor: 'Tal B.', studio: 'Sarona', level: 'advanced' },
    { time: '20:00', name: 'Yoga Nidra', instructor: 'Ella M.', studio: 'Port', level: 'all' },
  ],
  1: [
    { time: '07:00', name: 'Vinyasa Flow', instructor: 'Noa K.', studio: 'Sarona', level: 'inter' },
    { time: '10:00', name: 'Yoga Prénatal', instructor: 'Maya R.', studio: 'Port', level: 'special' },
    { time: '12:30', name: 'Hatha Yoga', instructor: 'Ella M.', studio: 'Port', level: 'all' },
    { time: '19:00', name: 'Yin Yoga', instructor: 'Lior S.', studio: 'Sarona', level: 'all' },
  ],
  2: [
    { time: '07:00', name: 'Ashtanga', instructor: 'Tal B.', studio: 'Port', level: 'advanced' },
    { time: '09:00', name: 'Hatha Yoga', instructor: 'Ella M.', studio: 'Sarona', level: 'all' },
    { time: '12:00', name: 'Vinyasa Flow', instructor: 'Noa K.', studio: 'Port', level: 'inter' },
    { time: '17:30', name: 'Yin Yoga', instructor: 'Maya R.', studio: 'Port', level: 'all' },
    { time: '20:00', name: 'Yoga Nidra', instructor: 'Lior S.', studio: 'Sarona', level: 'all' },
  ],
  3: [
    { time: '07:00', name: 'Hatha Yoga', instructor: 'Ella M.', studio: 'Port', level: 'all' },
    { time: '10:00', name: 'Yoga Prénatal', instructor: 'Maya R.', studio: 'Sarona', level: 'special' },
    { time: '19:00', name: 'Vinyasa Flow', instructor: 'Noa K.', studio: 'Port', level: 'inter' },
    { time: '20:30', name: 'Ashtanga', instructor: 'Tal B.', studio: 'Sarona', level: 'advanced' },
  ],
  4: [
    { time: '07:00', name: 'Vinyasa Flow', instructor: 'Noa K.', studio: 'Port', level: 'inter' },
    { time: '09:30', name: 'Hatha Yoga', instructor: 'Lior S.', studio: 'Sarona', level: 'all' },
    { time: '12:00', name: 'Yin Yoga', instructor: 'Ella M.', studio: 'Port', level: 'all' },
    { time: '17:00', name: 'Yoga Nidra', instructor: 'Maya R.', studio: 'Sarona', level: 'all' },
  ],
  5: [
    { time: '08:00', name: 'Ashtanga', instructor: 'Tal B.', studio: 'Port', level: 'advanced' },
    { time: '09:30', name: 'Hatha Yoga', instructor: 'Ella M.', studio: 'Port', level: 'all' },
    { time: '11:00', name: 'Vinyasa Flow', instructor: 'Noa K.', studio: 'Sarona', level: 'inter' },
    { time: '12:30', name: 'Yoga Prénatal', instructor: 'Maya R.', studio: 'Port', level: 'special' },
  ],
  6: [
    { time: '09:00', name: 'Hatha Yoga', instructor: 'Ella M.', studio: 'Sarona', level: 'all' },
    { time: '10:30', name: 'Yin Yoga', instructor: 'Lior S.', studio: 'Port', level: 'all' },
    { time: '12:00', name: 'Yoga Nidra', instructor: 'Maya R.', studio: 'Sarona', level: 'all' },
  ],
}

const levelColor: Record<string, string> = {
  all: '#7A9675',
  inter: '#9A7A65',
  advanced: '#6A7A9A',
  special: '#9A7A9A',
}

export default function Planning() {
  const { t, isRtl } = useI18n()
  const [activeDay, setActiveDay] = useState(0)
  const [activeStudio, setActiveStudio] = useState<string | null>(null)
  const isMobile = useIsMobile()

  const filtered = schedule[activeDay]?.filter(
    (c) => activeStudio === null || c.studio === activeStudio
  ) ?? []

  return (
    <section id="planning" className="py-16 px-5 md:py-32 md:px-8" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
          <div style={{ width: '2rem', height: '1px', background: 'var(--sage-dark)' }} />
          <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.7rem', letterSpacing: isRtl ? '0' : '0.22em', textTransform: 'uppercase', color: 'var(--sage-dark)', fontWeight: 500 }}>
            {t.planning.label}
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text)', textAlign: isRtl ? 'right' : 'left' }}>
            {t.planning.title}
          </h2>

          {/* Studio filter */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {([null, 'Port', 'Sarona'] as const).map((s) => (
              <button
                key={s ?? 'all'}
                onClick={() => setActiveStudio(s)}
                style={{ background: activeStudio === s ? 'var(--text)' : 'transparent', color: activeStudio === s ? 'var(--white)' : 'var(--text-muted)', border: '1px solid', borderColor: activeStudio === s ? 'var(--text)' : 'var(--border)', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: '2px', cursor: 'pointer', transition: 'all 0.2s' }}
              >
                {s ?? t.planning.filterAll}
              </button>
            ))}
          </div>
        </div>

        {/* Day tabs */}
        <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid var(--border)', marginBottom: '2.5rem', overflowX: 'auto' }}>
          {t.planning.days.map((d, i) => (
            <button
              key={d}
              onClick={() => setActiveDay(i)}
              style={{ background: 'none', border: 'none', borderBottom: activeDay === i ? '2px solid var(--text)' : '2px solid transparent', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.78rem', fontWeight: activeDay === i ? 500 : 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: activeDay === i ? 'var(--text)' : 'var(--text-muted)', padding: '0.75rem 1.5rem', cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap', marginBottom: '-1px' }}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Classes list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.9rem' }}>
              {t.planning.noClass}
            </div>
          ) : filtered.map((c, i) => (
            <div
              key={i}
              style={{ display: 'grid', gridTemplateColumns: isMobile ? '70px 1fr auto' : '80px 1fr auto auto auto', gap: isMobile ? '0.75rem' : '1.5rem', alignItems: 'center', padding: isMobile ? '1rem' : '1.25rem 1.5rem', background: 'var(--white)', borderRadius: '4px', border: '1px solid var(--border)', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--sage)'; (e.currentTarget as HTMLElement).style.background = '#F8FBF7' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'var(--white)' }}
            >
              {/* Time */}
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 400, color: 'var(--text)' }}>
                {c.time}
              </div>

              {/* Name + instructor */}
              <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
                <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text)', marginBottom: '0.2rem' }}>
                  {c.name}
                </div>
                <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  {t.planning.with} {c.instructor}
                </div>
              </div>

              {/* Level */}
              <span style={{ display: isMobile ? 'none' : undefined, fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: levelColor[c.level] || 'var(--text-muted)', background: `${levelColor[c.level]}22`, padding: '0.25rem 0.65rem', borderRadius: '2px', whiteSpace: 'nowrap' }}>
                {t.cours.levels[c.level as keyof typeof t.cours.levels]}
              </span>

              {/* Studio */}
              <span style={{ display: isMobile ? 'none' : undefined, fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.62rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-light)', whiteSpace: 'nowrap' }}>
                {c.studio}
              </span>

              {/* CTA */}
              <a
                href="#reservation"
                style={{ background: 'var(--text)', color: 'var(--white)', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '2px', whiteSpace: 'nowrap', transition: 'background 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--sage-dark)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--text)' }}
              >
                {t.planning.book}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
