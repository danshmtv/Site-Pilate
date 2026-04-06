'use client'
import { useState } from 'react'

const classes = [
  {
    name: 'Hatha Yoga',
    level: 'Tous niveaux',
    duration: '75 min',
    description: 'Un yoga classique et doux, idéal pour développer la conscience corporelle, la flexibilité et la sérénité.',
    color: '#D4E2D0',
    tag: 'Populaire',
  },
  {
    name: 'Vinyasa Flow',
    level: 'Intermédiaire',
    duration: '60 min',
    description: 'Un enchaînement dynamique de postures synchronisé avec le souffle. Énergie, fluidité et créativité.',
    color: '#DDE8DB',
    tag: null,
  },
  {
    name: 'Yin Yoga',
    level: 'Tous niveaux',
    duration: '75 min',
    description: 'Postures maintenues longtemps pour libérer les tensions profondes. Idéal en complément d\'un yoga dynamique.',
    color: '#E8EDE7',
    tag: 'Reposant',
  },
  {
    name: 'Yoga Nidra',
    level: 'Tous niveaux',
    duration: '60 min',
    description: 'La méditation couchée. Un voyage intérieur profond pour régénérer corps et esprit en toute douceur.',
    color: '#EAE6DF',
    tag: null,
  },
  {
    name: 'Ashtanga',
    level: 'Avancé',
    duration: '90 min',
    description: 'Série codifiée de postures pratiquée dans un ordre précis. Discipline, force et purification intérieure.',
    color: '#D8E4D5',
    tag: null,
  },
  {
    name: 'Yoga Prénatal',
    level: 'Spécialisé',
    duration: '60 min',
    description: 'Un cours adapté aux futures mamans, pour accompagner la grossesse avec douceur, souffle et présence.',
    color: '#EDE9E2',
    tag: 'Spécial',
  },
]

const levelColor: Record<string, string> = {
  'Tous niveaux': '#7A9675',
  'Intermédiaire': '#9A7A65',
  'Avancé': '#6A7A9A',
  'Spécialisé': '#9A7A9A',
}

export default function Cours() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="cours" style={{ padding: '8rem 2rem', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
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
                Nos disciplines
              </span>
            </div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: 'var(--text)',
            }}>
              Cours & pratiques
            </h2>
          </div>
          <a
            href="#planning"
            style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderBottom: '1px solid var(--border)',
              paddingBottom: '2px',
            }}
          >
            Voir le planning →
          </a>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}>
          {classes.map((c, i) => (
            <div
              key={c.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? c.color : 'var(--white)',
                borderRadius: '4px',
                padding: '2rem',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hovered === i ? '0 12px 48px rgba(0,0,0,0.06)' : '0 2px 8px rgba(0,0,0,0.03)',
                position: 'relative',
              }}
            >
              {c.tag && (
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'var(--sage)',
                  color: 'var(--white)',
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.6rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '2px',
                }}>
                  {c.tag}
                </div>
              )}

              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1.25rem',
                flexWrap: 'wrap',
              }}>
                <span style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: levelColor[c.level] || 'var(--text-muted)',
                  background: `${levelColor[c.level]}22`,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '2px',
                }}>
                  {c.level}
                </span>
                <span style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-light)',
                  background: 'var(--surface)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '2px',
                }}>
                  {c.duration}
                </span>
              </div>

              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.8rem',
                fontWeight: 400,
                color: 'var(--text)',
                marginBottom: '0.75rem',
                lineHeight: 1.1,
              }}>
                {c.name}
              </h3>

              <p style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.85rem',
                lineHeight: 1.75,
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
                fontWeight: 300,
              }}>
                {c.description}
              </p>

              <a
                href="#reservation"
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  opacity: hovered === i ? 1 : 0.5,
                  transition: 'opacity 0.3s',
                }}
              >
                Réserver →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
