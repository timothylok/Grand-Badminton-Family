'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'
import { contact } from '@/content/contact'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Partial<FormState>>({})

  function validate(): boolean {
    const next: Partial<FormState> = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.subject) next.subject = 'Please select a subject.'
    if (!form.message.trim()) next.message = 'Please enter a message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      })
      setStatus('success')
      setForm(initialState)
    } catch {
      setStatus('error')
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
        <span className="mb-4 text-5xl">✅</span>
        <h3 className="mb-2 text-xl font-semibold text-green-800">Message sent!</h3>
        <p className="mb-6 text-green-700">
          Thanks for getting in touch. We will get back to you soon.
        </p>
        <Button
          variant="ghost"
          className="border-green-600 text-green-700 hover:bg-green-100"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </Button>
      </div>
    )
  }

  const inputBase =
    'w-full rounded-xl border bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition-colors duration-200 focus:border-accent focus:ring-2 focus:ring-accent/30'
  const inputNormal = 'border-slate-200'
  const inputError  = 'border-red-400 ring-2 ring-red-200'

  return (
    /* Netlify Forms — this form is detected at build time */
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
      {/* Required hidden inputs for Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-700">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={`${inputBase} ${errors.subject ? inputError : inputNormal}`}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        >
          <option value="">Select a subject…</option>
          {contact.form.subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-sm text-red-600">{errors.subject}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help?"
          className={`${inputBase} resize-y ${errors.message ? inputError : inputNormal}`}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {status === 'error' && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          Something went wrong. Please try again or email us directly at{' '}
          <a href="mailto:gbfamilyclub@gmail.com" className="underline">
            gbfamilyclub@gmail.com
          </a>
          .
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}
