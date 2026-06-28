import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBullseye,
  faGlobe,
  faLightbulb,
  faPiggyBank,
  faPlay,
  faRocket,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import './App.css'

import cardKiosk from './assets/vishai/card-kiosk.png'
import cardMobileApp from './assets/vishai/card-mobile-app.png'
import cardMobileCalling from './assets/vishai/card-mobile-calling.png'
import cardWebsite from './assets/vishai/card-website.png'
import flow from './assets/vishai/flow.png'
import hero from './assets/vishai/hero.png'
import productVideo from './assets/vishai/V1.mp4'
import videoPoster from './assets/vishai/video-poster.png'
import wavingPerson from './assets/vishai/waving-person.gif'

const leftBenefits = [
  {
    icon: faLightbulb,
    title: 'Actionable Insights',
    body: 'AI-Assistants collect and analyze data, offering valuable insights that can drive better decision-making and enhance strategic planning.',
  },
  {
    icon: faPiggyBank,
    title: 'Cost Savings',
    body: 'By automating repetitive tasks, AI-Assistants help reduce operational costs, making them a budget-friendly solution for businesses of all sizes.',
  },
]

const rightBenefits = [
  {
    icon: faUser,
    title: 'Personalized Service',
    body: "AI-Assistants provide tailored interactions that adapt to each user's unique needs, ensuring a seamless and personalized experience every time.",
  },
  {
    icon: faRocket,
    title: 'Increased Efficiency',
    body: 'Streamline workflows and boost productivity by automating routine tasks, freeing up human resources for more complex responsibilities.',
  },
  {
    icon: faBullseye,
    title: '24/7 Availability',
    body: 'Available around the clock, AI-Assistants ensure that customers always receive the support they need, regardless of the time or day.',
  },
]

const touchpoints = [
  { image: cardKiosk, label: 'Kiosks' },
  { image: cardMobileApp, label: 'Mobile Application' },
  { image: cardMobileCalling, label: 'Mobile Calling' },
  { image: cardWebsite, label: 'Website' },
]

function BenefitItem({ item }) {
  return (
    <article className="benefit-item">
      <FontAwesomeIcon icon={item.icon} className="benefit-icon" aria-hidden="true" />
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </article>
  )
}

function App() {
  const [sent, setSent] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="VishAi home">
          <span className="brand-mark" aria-hidden="true">
            V<span>A</span>
          </span>
          <span className="brand-name">VishAi</span>
        </a>
        <a className="contact-link" href="#contact">
          Contact Us
        </a>
      </header>

      <main id="top">
        <section className="hero-section" aria-label="Shaping The Future With Autonomous AI-Assistants">
          <img src={hero} alt="Shaping The Future With Autonomous AI-Assistants" />
        </section>

        <section className="section benefits-section" aria-labelledby="benefits-title">
          <div className="benefits-glow" aria-hidden="true" />
          <div className="section-inner benefits-inner">
            <h2 id="benefits-title">Benefits of AI-Assistants</h2>
            <div className="benefits-grid">
              <div className="benefits-column benefits-column-left">
                {leftBenefits.map((benefit) => (
                  <BenefitItem item={benefit} key={benefit.title} />
                ))}
              </div>

              <div className="assistant-figure" aria-label="AI assistant waving">
                <img className="assistant-person" src={wavingPerson} alt="AI assistant waving" />
              </div>

              <div className="benefits-column benefits-column-right">
                {rightBenefits.map((benefit) => (
                  <BenefitItem item={benefit} key={benefit.title} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section action-section" aria-labelledby="action-title">
          <h2 id="action-title">The Virtual Human in Action</h2>
          <button className="video-card" type="button" onClick={() => setVideoOpen(true)} aria-label="Play virtual human video">
            <img src={videoPoster} alt="Virtual human preview" />
            <span className="play-control" aria-hidden="true">
              <FontAwesomeIcon icon={faPlay} />
            </span>
          </button>
        </section>

        <section className="section flow-section" aria-labelledby="flow-title">
          <h2 id="flow-title">How it Works?</h2>
          <img className="flow-image" src={flow} alt="How VishAi connects the user, AI, Firebase, Twilio, and a knowledge database" />
        </section>

        <section className="section touchpoints-section" aria-labelledby="touchpoints-title">
          <h2 id="touchpoints-title">One AI, Many Touchpoints</h2>
          <p>Here are some key forms of deployment</p>
          <div className="touchpoint-grid">
            {touchpoints.map((card) => (
              <article className="touchpoint-card" key={card.label}>
                <img src={card.image} alt={card.label} />
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-panel">
            <h2 id="contact-title">Get in Touch</h2>
            <p>Want to get in touch? We'd love to hear from you!</p>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  <span>First Name *</span>
                  <input type="text" name="firstName" placeholder="First Name" required />
                </label>
                <label>
                  <span>Last Name *</span>
                  <input type="text" name="lastName" placeholder="Last Name" required />
                </label>
                <label>
                  <span>Email *</span>
                  <input type="email" name="email" placeholder="Email" required />
                </label>
                <label>
                  <span>Phone Number *</span>
                  <span className="phone-input">
                    <FontAwesomeIcon icon={faGlobe} aria-hidden="true" />
                    <input type="tel" name="phone" placeholder="Phone Number" required />
                  </span>
                </label>
              </div>
              <label className="message-field">
                <span>Message</span>
                <textarea name="message" rows="4" placeholder="Type here" />
              </label>
              <button className="submit-button" type="submit">
                Let&apos;s Connect <span aria-hidden="true">★</span>
              </button>
              <p className={`form-status ${sent ? 'is-visible' : ''}`} aria-live="polite">
                Thanks! We&apos;ll be in touch shortly.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© Copyright 2024, All Rights Reserved</p>
      </footer>

      {videoOpen && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label="Virtual human video preview">
          <button className="modal-backdrop" type="button" onClick={() => setVideoOpen(false)} aria-label="Close video preview" />
          <div className="modal-panel">
            <button className="modal-close" type="button" onClick={() => setVideoOpen(false)} aria-label="Close video preview">
              <FontAwesomeIcon icon={faXmark} aria-hidden="true" />
            </button>
            <video src={productVideo} poster={videoPoster} controls autoPlay playsInline />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
