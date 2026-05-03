'use server'

import { prisma } from '@/lib/prisma'

export type ContactFormState = {
  success: boolean
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
  }
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name')?.toString().trim() ?? ''
  const email = formData.get('email')?.toString().trim() ?? ''
  const subject = formData.get('subject')?.toString().trim() ?? ''
  const message = formData.get('message')?.toString().trim() ?? ''

  const errors: ContactFormState['errors'] = {}

  if (!name || name.length < 2) {
    errors.name = ['Please provide your full name (at least 2 characters).']
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ['Please provide a valid email address.']
  }

  if (!subject || subject.length < 2) {
    errors.subject = ['Please provide a subject.']
  }

  if (!message || message.length < 10) {
    errors.message = ['Please provide a message (at least 10 characters).']
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, message: 'Please fix the errors below.', errors }
  }

  try {
    await prisma.contactMessage.create({
      data: { name, email, subject, message },
    })

    return {
      success: true,
      message: 'Thank you for reaching out! We will get back to you within 2–3 business days.',
    }
  } catch (err) {
    console.error('Contact form submission error:', err)
    return {
      success: false,
      message: 'Something went wrong. Please try again later or email us directly.',
    }
  }
}