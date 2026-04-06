'use client'
import { useState } from 'react'

const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']

const schedule: Record<string, { time: string; name: string; instructor: string; studio: string; level: string }[]> = {
  Lun: [
    { time: '07:00', name: 'Hatha Yoga', instructor: 'Ella M.', studio: 'Port', level: 'Tous niveaux' },
    { time: '09:30', name: 'Vinyasa Flow', instructor: 'Noa K.', studio: 'Sarona', level: 'Intermédiaire' },
    { time: '12:00', name: 'Yin Yoga', instructor: 'Maya R.', studio: 'Port', level: 'Tous niveaux' },
    { time: '18:30', name: 'Ashtanga', instructor: 'Tal B.', studio: 'Sarona', level: 'Avancé' },
    { time: '20:00', name: 'Yoga Nidra', instructor: 'Ella M.', studio: 'Port', level: 'Tous niveaux' },
  ],
  Mar: [
    { time: '07:00', name: 'Vinyasa Flow', instructor: 'Noa K.', studio: 'Sarona', level: 'Intermédiaire' },
    { time: '10:00', name: 'Yoga Prénatal', instructor: 'Maya R.', studio: 'Port', level: 'Spécialisé' },
    { time: '12:30', name: 'Hatha Yoga', instructor: 'Ella M.', studio: 'Port', level: 'Tous niveaux' },
    { time: '19:00', name: 'Yin Yoga', instructor: 'Lior S.', studio: 'Sarona', level: 'Tous niveaux' },
  ],
  Mer: [
    { time: '07:00', name: 'Ashtanga', instructor: 'Tal B.', studio: 'Port', level: 'Avancé' },
    { time: '09:00', name: 'Hatha Yoga', instructor: 'Ella M.', studio: 'Sarona', level: 'Tous niveaux' },
    { time: '12:00', name: 'Vinyasa Flow', instructor: 'Noa K.', studio: 'Port', level: 'Intermédiaire' },
    { time: '17:30', name: 'Yin Yoga', instructor: 'Maya R.', studio: 'Port', level: 'Tous niveaux' },
    { time: '20:00', name: 'Yoga Nidra', instructor: 'Lior S.', studio: 'Sarona', level: 'Tous niveaux' },
  ],
  Jeu: [
    { time: '07:00', name: 'Hatha Yoga', instructor: 'Ella M.', studio: 'Port', level: 'Tous niveaux' },
    { time: '10:00', name: 'Yoga Prénatal', instructor: 'Maya R.', studio: 'Sarona', level: 'Spécialisé' },
    { time: '19:00', name: 'Vinyasa Flow', instructor: 'Noa K.', studio: 'Port', level: 'Intermédiaire' },
    { time: '20:30', name: 'Ashtanga', instructor: 'Tal B.', studio: 'Sarona', level: 'Avancé' },
  ],
  Ven: [
    { time: '07:00', name: 'Vinyasa Flow', instructor: 'Noa K.', studio: 'Port', level: 'Intermédiaire' },
    { time: '09:30', name: 'Hatha Yoga', instructor: 'Lior S.', studio: 'Sarona', level: 'Tous niveaux' },
    { time: '12:00', name: 'Yin Yoga', instructor: 'Ella M.', studio: 'Port', level: 'Tous niveaux' },
    { time: '17:00', name: 'Yoga Nidra', instructor: 'Maya R.', studio: 'Sarona', level: 'Tous niveaux' },
  ],
  Sam: [
    { time: '08:00', name: 'Ashtanga', instructor: 'Tal B.', studio: 'Port', level: 'Avancé' },
    { time: '09:30', name: 'Hatha Yoga', instructor: 'Ella M.', studio: 'Port', level: 'Tous niveaux' },
    { time: '11:00', name: 'Vinyasa Flow', instructor: 'Noa K.', studio: 'Sarona', level: 'Intermédiaire' },
    { time: '12:30', name: 'Yoga Prénatal', instructor: 'Maya R.', studio: 'Port', level: 'Spécialisé' },
  ],
  Dim: [
    { time: '09:00', name: 'Hatha Yoga', instructor: 'Ella M.', studio: 'Sarona', level: 'Tous niveaux' },
    { time: '10:30', name: 'Yin Yoga', instructor: 'Lior S.', studio: 'Port', level: 'Tous niveaux' },
    { time: '12:00', name: 'Yoga Nidra', instructor: 'Maya R.', studio: 'Sarona', level: 'Tous niveaux' },
  ],
}

const levelColor: Record<string, string> = {
  'Tous niveaux': '#7A9675',
  'Intermédiaire': '#9A7A65',
  'Avancé': '#6A7A9A',
  'Spécialisé': '#9A7A9A',
}

export default function Planning() {
  const [activeDay, setActiveDay] = useState('Lun')
  const [activeStudio, setActiveStudio] = useState<string | null>(null)

  const filtered = schedule[activeDay]?.filter(
    (c) => activeStudio === null || c.studio === activeStudio
  ) ?? []

  return (
    <section id="planning" style={{ padding: '8rem 2rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1.5rem',
        }}>
          <div style={{ width: '2rem', height: '1px', background: 'var(--sage-dark)' }} />
          <span style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--sage-dark)',
            fontWeight: 500,
          }}>
            Horaires
          </span>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: 'var(--text)',
          }}>
            Planning de la semaine
          </h2>

          {/* Studio filter */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[null, 'Port', 'Sarona'].map((s) => (
              <button
                key={s ?? 'all'}
                onClick={() => setActiveStudio(s)}
                style={{
                  background: activeStudio === s ? 'var(--text)' : 'transparent',
                  color: activeStudio === s ? 'var(--white)' : 'var(--text-muted)',
                  border: '1px solid',
                  borderColor: activeStudio === s ? 'var(--text)' : 'var(--border)',
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.4rem 1rem',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {s ?? 'Tous'}
              </button>
            ))}
          </div>
        </div>

        {/* Day tabs */}
        <div style={{
          display: 'flex',
          gap: '0',
          borderBottom: '1px solid var(--border)',
          marginBottom: '2.5rem',
          overflowX: 'auto',
        }}>
          {days.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDay(d)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: activeDay === d ? '2px solid var(--text)' : '2px solid transparent',
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.78rem',
                fontWeight: activeDay === d ? 500 : 300,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: activeDay === d ? 'var(--text)' : 'var(--text-muted)',
                padding: '0.75rem 1.5rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
                marginBottom: '-1px',
              }}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Classes list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {filtered.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '3rem',
              color: 'var(--text-muted)',
              fontFamily: 'Jost, sans-serif',
              fontSize: '0.9rem',
            }}>
              Aucun cours ce jour pour ce studio.
            </div>
          ) : filtered.map((c, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto auto auto',
                gap: '1.5rem',
                alignItems: 'center',
                padding: '1.25rem 1.5rem',
                background: 'var(--white)',
                borderRadius: '4px',
                border: '1px solid var(--border)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--sage)'
                ;(e.currentTarget as HTMLElement).style.background = '#F8FBF7'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                ;(e.currentTarget as HTMLElement).style.background = 'var(--white)'
              }}
            >
              {/* Time */}
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.4rem',
                fontWeight: 400,
                color: 'var(--text)',
              }}>
                {c.time}
              </div>

              {/* Name + instructor */}
              <div>
                <div style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--text)',
                  marginBottom: '0.2rem',
                }}>
                  {c.name}
                </div>
                <div style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                }}>
                  avec {c.instructor}
                </div>
              </div>

              {/* Level */}
              <span style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: levelColor[c.level] || 'var(--text-muted)',
                background: `${levelColor[c.level]}22`,
                padding: '0.25rem 0.65rem',
                borderRadius: '2px',
                whiteSpace: 'nowrap',
              }}>
                {c.level}
              </span>

              {/* Studio */}
              <span style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-light)',
                whiteSpace: 'nowrap',
              }}>
                {c.studio}
              </span>

              {/* CTA */}
              <a
                href="#reservation"
                style={{
                  background: 'var(--text)',
                  color: 'var(--white)',
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '2px',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--sage-dark)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--text)' }}
              >
                Réserver
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
