import { useEffect, useMemo, useState } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import {
  FiActivity,
  FiArrowRight,
  FiBarChart2,
  FiBriefcase,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiEdit3,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiPenTool,
  FiUsers,
  FiX,
} from 'react-icons/fi'
import {
  SiAffinitydesigner,
  SiAffinityphoto,
  SiBehance,
  SiClaude,
  SiInstagram,
  SiOllama,
  SiPython,
} from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa6'

const skills = [
  {
    name: 'Adobe Photoshop',
    level: 94,
    icon: [
      { type: 'label', text: 'Ps' },
      { type: 'component', icon: FiPenTool },
    ],
  },
  { name: 'Adobe Illustrator', level: 80, icon: [{ type: 'label', text: 'Ai' }, { type: 'component', icon: FiEdit3 }] },
  { name: 'Social Media Design', level: 92, icon: [{ type: 'component', icon: FiBarChart2 }, { type: 'component', icon: FiMonitor }] },
  {
    name: 'Layout Design & Visual Communication',
    level: 89,
    icon: [
      { type: 'component', icon: FiBriefcase },
      { type: 'component', icon: FiCheckCircle },
      { type: 'component', icon: FiCode },
    ],
  },
]

const services = [
  { title: 'Graphic Design', desc: 'High-impact layouts, branding, and visuals for digital and print.', icon: FiEdit3 },
  {
    title: 'Social Media Management',
    desc: 'Content planning, campaign execution, and team workflow optimization.',
    icon: FiBarChart2,
  },
  { title: 'Visual Identity', desc: 'Brand systems that communicate personality, clarity, and consistency.', icon: FiBriefcase },
  { title: 'Content Creation', desc: 'Compelling assets, reels, and campaign content built for conversion.', icon: FiCheckCircle },
]

const timeline = [
  {
    year: '04/2025 - 11/2025',
    role: 'Graphic Design Intern',
    org: 'Creativa Innovation Hub (TIEC) – Sohag',
    highlights: [
      'Designed engaging visual content and promotional materials for the hub\'s events and activities.',
      'Collaborated with the management team to produce high-quality designs reflecting the hub\'s creative and innovative environment.',
      'Delivered creative assets efficiently within tight deadlines to support ongoing marketing campaigns.',
    ],
  },
  {
    year: '07/2024 - Present',
    role: 'Social Media Manager',
    org: 'Life Makers Foundation - Sohag',
    highlights: [
      'Managed and directed the foundation\'s media presence while covering local community initiatives and events.',
      'Directed a highly skilled team of volunteers, overseeing content creation and execution of media campaigns.',
      'Created impactful social media design content that helped grow the page\'s audience to 20,000 followers.',
      'Coordinated with different teams to ensure a unified and effective media message.',
    ],
  },
  {
    year: '04/2025 - 07/2025',
    role: 'Media Manager',
    org: 'Life Makers Foundation - Sohag University',
    highlights: [
      'Led and managed a media volunteer team, delegating tasks to execute high-quality community campaigns.',
      'Achieved growth in page reach and engagement across social media platforms through content strategy.',
      'Directed successful media campaigns that boosted community awareness and participation.',
      'Oversaw visual identity to keep all graphic materials aligned with the foundation\'s core message.',
    ],
  },
]

const projects = [
  {
    title: 'Aurora Brand System',
    category: 'Visual Identity',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80',
    description: 'Full identity kit, typography system, and social launch assets for a modern startup.',
  },
  {
    title: 'Campaign Motion Pack',
    category: 'Media Management',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80',
    description: 'Short-form animated visuals used for awareness campaigns across multiple platforms.',
  },
  {
    title: 'Editorial Layout Series',
    category: 'Graphic Design',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80',
    description: 'Magazine-inspired digital layouts with rich typographic hierarchy and storytelling.',
  },
  {
    title: 'Charity Event Media',
    category: 'Content Creation',
    image:
      'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1400&q=80',
    description: 'Unified media assets and content strategy executed with a team of volunteers.',
  },
  {
    title: 'AI-Assisted Design Sprint',
    category: 'Creative Workflow',
    image:
      'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1400&q=80',
    description: 'Rapid concept development using AI tools integrated into production-ready design pipelines.',
  },
  {
    title: 'Retail Product Visuals',
    category: 'Brand Campaign',
    image:
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80',
    description: 'Bold product storytelling through social creatives, mockups, and ad-ready formats.',
  },
]

const stats = [
  { label: 'Social Media Followers Reached', value: 20, suffix: 'K+' },
  { label: 'Current Volunteer Leadership Roles', value: 2, suffix: '' },
  { label: 'Years of Active Experience', value: 2, suffix: '+' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function Counter({ to, suffix }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1500
    const stepTime = 1000 / 60
    const increment = Math.ceil(to / (duration / stepTime))

    const timer = setInterval(() => {
      start += increment
      if (start >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [to])

  return (
    <span className="text-4xl font-bold tracking-tight text-white md:text-5xl">
      {count}
      {suffix}
    </span>
  )
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [formFeedback, setFormFeedback] = useState({ type: '', text: '' })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const profileImage = '/profile-zeyad.png'
  const profileTiltX = useMotionValue(0)
  const profileTiltY = useMotionValue(0)
  const profileShiftX = useMotionValue(0)
  const profileShiftY = useMotionValue(0)
  const springTiltX = useSpring(profileTiltX, { stiffness: 180, damping: 20, mass: 0.45 })
  const springTiltY = useSpring(profileTiltY, { stiffness: 180, damping: 20, mass: 0.45 })
  const springShiftX = useSpring(profileShiftX, { stiffness: 170, damping: 22, mass: 0.45 })
  const springShiftY = useSpring(profileShiftY, { stiffness: 170, damping: 22, mass: 0.45 })

  const socialLinks = useMemo(
    () => [
      { href: 'https://www.behance.net/ziadosama24', icon: SiBehance, label: 'Behance' },
      { href: 'https://linkedin.com/in/zeyad-osama-5924aa228', icon: FaLinkedinIn, label: 'LinkedIn' },
      { href: 'mailto:zeyadosama14740@gmail.com', icon: FiMail, label: 'Email' },
    ],
    [],
  )

  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', closeOnEsc)
    return () => window.removeEventListener('keydown', closeOnEsc)
  }, [])

  const handleContactChange = (e) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    const name = contactForm.name.trim()
    const email = contactForm.email.trim()
    const message = contactForm.message.trim()

    if (!name || !email || !message) {
      setFormFeedback({ type: 'error', text: 'Please fill in your name, email, and message.' })
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setFormFeedback({ type: 'error', text: 'Please enter a valid email address.' })
      return
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:zeyadosama14740@gmail.com?subject=${subject}&body=${body}`

    setFormFeedback({ type: 'success', text: 'Your email app opened with your message ready to send.' })
    setContactForm({ name: '', email: '', message: '' })
  }

  const handleProfileMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const pointerX = (e.clientX - rect.left) / rect.width - 0.5
    const pointerY = (e.clientY - rect.top) / rect.height - 0.5

    profileTiltY.set(pointerX * 16)
    profileTiltX.set(-pointerY * 16)
    profileShiftX.set(pointerX * 10)
    profileShiftY.set(pointerY * 10)
  }

  const handleProfileMouseLeave = () => {
    profileTiltX.set(0)
    profileTiltY.set(0)
    profileShiftX.set(0)
    profileShiftY.set(0)
  }

  return (
    <main className="relative overflow-x-hidden bg-bg text-slate-300">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(68,240,255,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(139,92,246,0.16),transparent_36%),radial-gradient(circle_at_50%_80%,rgba(68,240,255,0.08),transparent_45%)]" />

      <motion.section style={{ y }} className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-14 px-6 py-20 md:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <motion.p variants={fadeUp} initial="hidden" animate="show" className="text-lg text-accent">
            Hello, I am Zeyad Osama.
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.12 }}
            className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-7xl"
          >
            Graphic Designer &amp; Social Media Manager.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-xl"
          >
            Creative Graphic Designer with practical media management experience and a proven track record of leading design teams to build strong brand identities.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.3 }} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-slate-900 transition hover:shadow-glow"
            >
              View My Portfolio <FiArrowRight />
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-accent">
              Contact Me
            </a>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.38 }} className="mt-10 flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-slate-700 bg-slate-900/60 p-3 text-xl text-slate-200 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0"
          onMouseMove={handleProfileMouseMove}
          onMouseLeave={handleProfileMouseLeave}
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 1.4, 0, -1.4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ rotateX: springTiltX, rotateY: springTiltY, transformPerspective: 900 }}
            className="relative mx-auto h-72 w-72 rounded-full border border-accent/40 bg-gradient-to-b from-accent/15 via-slate-900/50 to-slate-950/70 p-2 shadow-[0_0_55px_rgba(68,240,255,0.25)] sm:h-80 sm:w-80 md:h-96 md:w-96"
          >
            <motion.img
              src={profileImage}
              alt="Zeyad Osama portrait"
              style={{ x: springShiftX, y: springShiftY }}
              className="h-full w-full rounded-full object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.5, 0.35] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute inset-4 -z-10 rounded-full bg-accent/20 blur-2xl"
          />
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="pointer-events-none absolute inset-0 -z-10 rounded-full border border-dashed border-accent/30"
          />
        </motion.div>
      </motion.section>

      <section className="relative mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="section-heading">Skills &amp; Tools</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <motion.article key={skill.name} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="rounded-2xl border border-slate-800 bg-card/70 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-white">{skill.name}</h3>
                <div className="flex gap-2 text-lg text-accent">
                  {skill.icon.map((item, index) =>
                    item.type === 'component' ? (
                      <item.icon key={`${skill.name}-${index}`} />
                    ) : (
                      <span
                        key={`${skill.name}-${index}`}
                        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-xs font-bold"
                      >
                        {item.text}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accentSoft"
                />
              </div>
            </motion.article>
          ))}
          <motion.article variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/10 to-accentSoft/10 p-6 md:col-span-2">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-slate-950/50 p-3 text-2xl text-accent">
                <FiUsers />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Creative Direction &amp; Team Leadership</h3>
                <p className="mt-2 max-w-3xl text-slate-300">
                  Strong in team coordination, mentorship, and building scalable creative workflows across design and media operations.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="section-heading">Services</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map(({ title, desc, icon: Icon }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="group rounded-2xl border border-slate-800 bg-card/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/70"
            >
              <div className="mb-4 inline-flex rounded-xl bg-slate-900 p-3 text-xl text-accent transition group-hover:shadow-glow">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-slate-300">{desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="section-heading">Experience &amp; Volunteering</h2>
        <div className="relative mt-10 border-l border-slate-800 pl-8">
          {timeline.map((item) => (
            <motion.div key={item.role} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="relative mb-10">
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-bg bg-accent" />
              <p className="text-sm font-medium uppercase tracking-wider text-accent">{item.year}</p>
              <h3 className="mt-1 text-xl font-semibold text-white">{item.role}</h3>
              <p className="text-slate-400">{item.org}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="relative mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="section-heading">Portfolio / Projects</h2>
        <div className="masonry-layout mt-10">
          {projects.map((project) => (
            <motion.button
              key={project.title}
              type="button"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              onClick={() => setSelectedProject(project)}
              className="masonry-item group relative mb-5 overflow-hidden rounded-2xl border border-slate-800 bg-card text-left"
            >
              <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4">
                <p className="text-xs uppercase tracking-widest text-accent">{project.category}</p>
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="section-heading">Stats</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <motion.article key={stat.label} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl border border-slate-800 bg-card/70 p-8 text-center">
              <Counter to={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-slate-300">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-6xl px-6 pb-10 pt-20 md:px-10">
        <h2 className="section-heading">Contact</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <form onSubmit={handleContactSubmit} className="rounded-2xl border border-slate-800 bg-card/65 p-6">
            <div className="grid gap-4">
              <input
                type="text"
                name="name"
                value={contactForm.name}
                onChange={handleContactChange}
                placeholder="Your Name"
                className="input-ui"
              />
              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleContactChange}
                placeholder="Your Email"
                className="input-ui"
              />
              <textarea
                rows="5"
                name="message"
                value={contactForm.message}
                onChange={handleContactChange}
                placeholder="Tell me about your project..."
                className="input-ui resize-none"
              />
              <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 font-semibold text-slate-900 transition hover:shadow-glow">
                Send Message
              </button>
              {formFeedback.text && (
                <p className={`text-sm ${formFeedback.type === 'error' ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {formFeedback.text}
                </p>
              )}
            </div>
          </form>
          <div className="rounded-2xl border border-slate-800 bg-card/40 p-6">
            <h3 className="text-xl font-semibold text-white">Let&apos;s build something remarkable.</h3>
            <div className="mt-6 space-y-4 text-slate-300">
              <p className="flex items-center gap-3">
                <FiMail className="text-accent" /> zeyadosama14740@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <FiActivity className="text-accent" /> 01030588375
              </p>
              <p className="flex items-center gap-3">
                <FiMapPin className="text-accent" /> Sohag, Egypt
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-slate-800 py-8 text-center text-sm text-slate-400">
        Designed for a bold creative presence - Zeyad Osama
      </footer>

      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-950" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setSelectedProject(null)} className="absolute right-4 top-4 rounded-full bg-slate-900 p-2 text-white transition hover:text-accent">
              <FiX />
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="h-auto w-full object-cover" />
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-accent">{selectedProject.category}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{selectedProject.title}</h3>
              <p className="mt-3 text-slate-300">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
