import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import * as THREE from 'three'
import Scene from './scene/Scene'
import NoiseOverlay from './ui/NoiseOverlay'
import Resume from './ui/Resume'
import Works from './ui/Works'
import LoadingScreen from './ui/LoadingScreen'
import { useStore } from './store'

function Backdrop() {
  const setActive = useStore((s) => s.setActive)
  return (
    <mesh position={[0, 0, -40]} onClick={() => setActive(null)}>
      <planeGeometry args={[600, 300]} />
      <meshBasicMaterial transparent opacity={0} depthWrite={false} />
    </mesh>
  )
}

type Lang = 'en' | 'zh'

const COPY = {
  en: {
    title: 'About Vinay',
    paragraphs: [
      "I'm Vinay Rajput — a Data & Talent Sourcing Associate experienced in talent acquisition, lead generation, CRM & ATS management, and operations. I focus on connecting talent with opportunity and streamlining data workflows.",
    ],
  },
  zh: {
    title: 'About Vinay',
    paragraphs: [
      "I'm Vinay Rajput — a Data & Talent Sourcing Associate experienced in talent acquisition, lead generation, CRM & ATS management, and operations.",
    ],
  },
}

function Hero({ lang }: { lang: Lang }) {
  const { title, paragraphs } = COPY[lang]
  return (
    <section className="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem' }}>
      <div className="about-intro">
        <h1 className="about-title" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>
          {title}
        </h1>
        {paragraphs.map((p, i) => (
          <p key={i} className="about-body" style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#ccc' }}>
            {p}
          </p>
        ))}
      </div>
      <div style={{ marginTop: '2rem', color: '#888', fontSize: '0.9rem' }}>
        ↓ Scroll down to view Experience & Education
      </div>
    </section>
  )
}

export default function App() {
  const [lang] = useState<Lang>('en')
  const worksRef = useRef(null)

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#0a0e16', color: '#fff' }}>
      <LoadingScreen />

      <div className="scene-bg" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0 }}>
        <Canvas
          shadows={{ type: THREE.PCFShadowMap }}
          dpr={[1, 1.5]}
          camera={{ position: [0, 5, 19], fov: 39, near: 0.1, far: 500 }}
          gl={{ antialias: false, stencil: false, depth: true, toneMapping: THREE.ACESFilmicToneMapping }}
        >
          <color attach="background" args={['#0a0e16']} />
          <Suspense fallback={null}>
            <Backdrop />
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="hero-chrome" style={{ position: 'fixed', top: 0, left: 0, width: '100%', padding: '1rem', pointerEvents: 'none', zIndex: 5, display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <strong style={{ display: 'block' }}>Vinay Rajput</strong>
          <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Data & Talent Sourcing Associate</span>
        </div>
        <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Vadodara, India</div>
      </div>

      <NoiseOverlay />

      <main className="content" style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
        <Hero lang={lang} />
        <Resume lang={lang} />
        <Works lang={lang} innerRef={worksRef} />
      </main>
    </div>
  )
}
