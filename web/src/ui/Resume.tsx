import { motion } from 'framer-motion'

interface ResumeProps {
  lang: 'en' | 'zh'
}

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

export default function Resume({ lang }: ResumeProps) {
  return (
    <section className="resume-section">
      <div className="resume-container">
        <motion.div
          className="resume-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="resume-heading">EXPERIENCE</h2>
          <div className="resume-list">
            {EXPERIENCES.map((exp, index) => (
              <div className="resume-item" key={index}>
                <div className="resume-period">{exp.period}</div>
                <div className="resume-details">
                  <h3 className="resume-role">{exp.role}</h3>
                  <div className="resume-company">{exp.company}</div>
                  <p className="resume-desc">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="resume-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="resume-heading">EDUCATION</h2>
          <div className="resume-list">
            {EDUCATION.map((edu, index) => (
              <div className="resume-item" key={index}>
                <div className="resume-period">{edu.period}</div>
                <div className="resume-details">
                  <h3 className="resume-role">{edu.degree}</h3>
                  <div className="resume-company">{edu.school}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
