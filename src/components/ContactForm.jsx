import { useState } from 'react'
import Button from './Button'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="contact-form__success" role="status">
        <p>Thank you for your message. This form is frontend-only for now — connect via email or LinkedIn.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required autoComplete="name" placeholder="Your name" />
      </div>

      <div className="contact-form__field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required autoComplete="email" placeholder="you@example.com" />
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project or opportunity..." />
      </div>

      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  )
}
