import { motion } from 'framer-motion'
import { ZooopLogo } from './ZooopLogo'
import { SOCIAL_ICONS } from './SocialIcons'
import { FOCUS_POINTS } from '../data/focusPoints'

const SOCIAL_LINKS = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:contact@example.com',
  },
]

const EXPERIENCES = [
  {
    period: 'Dec 2025 — Present',
    role: 'Data & Talent Sourcing Associate',
    company: 'Legacy Digitronics Private Limited',
    description:
      'Handling talent sourcing, candidate outreach, pipeline management, CRM/ATS database updates, and data operations.',
  },
  {
    period: 'Nov 2025 — Dec 2025',
    role: 'Sales Executive',
    company: 'Compucare India Private Limited',
    description:
      'Managed client outreach, sales inquiries, and account updates to drive business development.',
  },
  {
    period: 'Mar 2025 — Oct 2025',
    role: 'Advisor & Customer Support Executive',
    company: 'Concentrix',
    description:
      'Delivered high-quality customer support, resolved user queries efficiently, and maintained detailed activity logs.',
  },
  {
    period: 'Nov 2022 — Jan 2025',
    role: 'Event Coordinator',
    company: 'Freelance',
    description:
      'Coordinated on-site logistics, team operations, and client communications for large-scale events.',
  },
  {
    period: 'Oct 2020 — Jan 2022',
    role: 'Sales Promoter',
    company: 'Kohinoor Specialty Foods',
    description:
      'Engaged customers directly, presented key product value propositions, and boosted retail sales presence.',
  },
]

const EDUCATION = [
  {
    period: '2019 — 2022',
    degree: 'Bachelor of Commerce (B.Com)',
    school: 'M.S. University of Baroda',
  },
]

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  return (
    <section className="resume" lang={lang}>
      <div className="resume-inner">
        <motion.div
          className="resume-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="resume-section-title">EXPERIENCE</h2>
          <div className="resume-items">
            {EXPERIENCES.map((item, i) => (
              <div key={i} className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-item-period">{item.period}</span>
                  <h3 className="resume-item-role">{item.role}</h3>
                  <div className="resume-item-company">{item.company}</div>
                </div>
                <p className="resume-item-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="resume-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="resume-section-title">EDUCATION</h2>
          <div className="resume-items">
            {EDUCATION.map((item, i) => (
              <div key={i} className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-item-period">{item.period}</span>
                  <h3 className="resume-item-role">{item.degree}</h3>
                  <div className="resume-item-company">{item.school}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
