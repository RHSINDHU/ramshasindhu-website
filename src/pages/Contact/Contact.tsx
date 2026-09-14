import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, FileText, ArrowRight, Check, AlertCircle } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import { supabase } from '@/lib/supabase';
import { contactConfig } from '@/data/contact/contactConfig';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const contactLinks = [
  {
    label: 'Email',
    value: contactConfig.email,
    href: `mailto:${contactConfig.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com',
    href: contactConfig.linkedinUrl,
    icon: Linkedin,
    external: true,
  },
  {
    label: 'Instagram',
    value: 'instagram.com',
    href: contactConfig.instagramUrl,
    icon: Instagram,
    external: true,
  },
  {
    label: 'Resume',
    value: 'Download PDF',
    href: contactConfig.resumePath,
    icon: FileText,
    external: false,
    download: contactConfig.resumeFilename,
  },
];

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Resume', path: '/resume' },
  { label: 'Art & Hobbies', path: '/art' },
  { label: 'Travel', path: '/travel' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (status === 'error' || status === 'success') setStatus('idle');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      if (!supabase) {
        throw new Error('Supabase client is not configured. Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY environment variables.');
      }

      const { error } = await supabase.from('contact_submissions').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
      setErrorMessage('Please try again, or contact me directly by email.');
    }
  };

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden bg-ink-950 flex items-center">
        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-ink-50/5" />
          <div className="absolute right-[8%] top-0 bottom-0 w-px bg-ink-50/5" />
        </div>

        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(255,255,255,0.04),transparent_60%)]" />

        <div className="relative z-20 w-full px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto pt-20 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-ink-300" />
            <span className="font-sans text-caption uppercase tracking-ultra-wide text-ink-300">
              Contact
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-display-xl text-ink-0 leading-[0.95] tracking-tight max-w-[1100px]"
          >
            Let's Create<br />Something Interesting.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 font-sans text-body-lg text-ink-200 max-w-lg leading-relaxed"
          >
            Have an idea, a project, a question, or simply want to say hello?
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-12 left-6 sm:left-10 lg:left-16 flex items-center gap-6"
          >
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-400">
              Contact · 2026
            </span>
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500">
              No. 07
            </span>
          </motion.div>
        </div>
      </section>

      {/* CONTACT LINKS */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto bg-ink-950">
        <motion.div {...sectionReveal} className="mb-16">
          <span className="label-eyebrow block mb-6 text-ink-500">Reach Me</span>
          <h2 className="font-serif text-display-md text-ink-0 leading-[1.05] tracking-tight">
            Direct Lines.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-800">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                download={link.download}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
                className="group relative bg-ink-950 p-8 lg:p-10 flex flex-col gap-6 transition-colors duration-500 hover:bg-ink-900"
                data-cursor="open"
              >
                <div className="flex items-center justify-between">
                  <Icon size={24} strokeWidth={1.2} className="text-ink-400 group-hover:text-ink-0 transition-colors duration-500" />
                  <ArrowRight
                    size={16}
                    strokeWidth={1.2}
                    className="text-ink-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500"
                  />
                </div>
                <div>
                  <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500 block mb-2">
                    {link.label}
                  </span>
                  <span className="font-serif text-subtitle text-ink-100 leading-tight">
                    {link.value}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="relative py-30 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto bg-ink-950">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column: heading */}
          <div className="lg:col-span-5">
            <motion.div {...sectionReveal}>
              <span className="label-eyebrow block mb-6 text-ink-500">Send a Message</span>
              <h2 className="font-serif text-display-md text-ink-0 leading-[1.05] tracking-tight">
                Write<br />to Me.
              </h2>
              <p className="mt-8 font-sans text-body-lg text-ink-400 leading-relaxed max-w-sm">
                Fill out the form and I'll get back to you as soon as possible. Every message is read personally.
              </p>
            </motion.div>
          </div>

          {/* Right column: form */}
          <div className="lg:col-span-7">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Name */}
              <FormField
                label="Name"
                id="name"
                type="text"
                value={form.name}
                onChange={(v) => handleChange('name', v)}
                disabled={status === 'submitting'}
                required
              />

              {/* Email */}
              <FormField
                label="Email"
                id="email"
                type="email"
                value={form.email}
                onChange={(v) => handleChange('email', v)}
                disabled={status === 'submitting'}
                required
              />

              {/* Subject */}
              <FormField
                label="Subject"
                id="subject"
                type="text"
                value={form.subject}
                onChange={(v) => handleChange('subject', v)}
                disabled={status === 'submitting'}
                required
              />

              {/* Message */}
              <div className="group">
                <label
                  htmlFor="message"
                  className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500 block mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  disabled={status === 'submitting'}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-ink-700 focus:border-ink-0 px-0 py-3 font-sans text-body text-ink-0 placeholder-ink-600 focus:outline-none transition-colors duration-300 resize-none disabled:opacity-50"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group inline-flex items-center gap-4 border border-ink-600 px-10 py-5 hover:bg-ink-0 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="font-sans text-body uppercase tracking-wide-editorial text-ink-100 group-hover:text-ink-950 transition-colors duration-300">
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </span>
                  <ArrowRight
                    size={18}
                    strokeWidth={1.5}
                    className="text-ink-100 group-hover:text-ink-950 transition-colors duration-300"
                  />
                </button>
              </div>

              {/* Success state */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 pt-4"
                >
                  <Check size={18} strokeWidth={1.5} className="text-ink-200" />
                  <span className="font-sans text-body text-ink-200">
                    Your message has been sent. I'll be in touch soon.
                  </span>
                </motion.div>
              )}

              {/* Error state */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 pt-4"
                >
                  <AlertCircle size={18} strokeWidth={1.5} className="text-ink-300 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-sans text-body text-ink-200 block">
                      Your message could not be sent.
                    </span>
                    <span className="font-sans text-body-sm text-ink-400">{errorMessage}</span>
                  </div>
                </motion.div>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="relative py-38 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto bg-ink-950 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-ink-700" />
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500">
              Stay Connected
            </span>
            <div className="h-px w-16 bg-ink-700" />
          </div>

          <h2 className="font-serif text-display-2xl text-ink-0 leading-[0.95] tracking-tight">
            Keep in Touch.
          </h2>

          {/* Animated line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="mx-auto mt-12 h-px bg-gradient-to-r from-transparent via-ink-500 to-transparent max-w-xs"
          />
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-ink-950 border-t border-ink-800 px-6 sm:px-10 lg:px-16 py-20">
        <div className="max-w-[1600px] mx-auto">
          {/* Navigation */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mb-16">
            <div>
              <span className="label-eyebrow block mb-6 text-ink-500">Navigation</span>
              <nav className="flex flex-wrap gap-x-8 gap-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    className="font-sans text-body-sm text-ink-300 hover:text-ink-0 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pb-12 border-b border-ink-800">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <a
                href={`mailto:${contactConfig.email}`}
                className="group flex items-center gap-2 text-ink-300 hover:text-ink-0 transition-colors duration-300"
              >
                <Mail size={16} strokeWidth={1.2} />
                <span className="font-sans text-body-sm">{contactConfig.email}</span>
              </a>
              <a
                href={contactConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-ink-300 hover:text-ink-0 transition-colors duration-300"
              >
                <Linkedin size={16} strokeWidth={1.2} />
                <span className="font-sans text-body-sm">LinkedIn</span>
              </a>
              <a
                href={contactConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-ink-300 hover:text-ink-0 transition-colors duration-300"
              >
                <Instagram size={16} strokeWidth={1.2} />
                <span className="font-sans text-body-sm">Instagram</span>
              </a>
              <a
                href={contactConfig.resumePath}
                download={contactConfig.resumeFilename}
                className="group flex items-center gap-2 text-ink-300 hover:text-ink-0 transition-colors duration-300"
              >
                <FileText size={16} strokeWidth={1.2} />
                <span className="font-sans text-body-sm">Resume</span>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-600">
              &copy; {new Date().getFullYear()} Creative Portfolio
            </span>
            <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-600">
              Fashion × Technology
            </span>
          </div>
        </div>
      </footer>
    </PageLayout>
  );
}

interface FormFieldProps {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
  required: boolean;
}

function FormField({ label, id, type, value, onChange, disabled, required }: FormFieldProps) {
  return (
    <div className="group">
      <label
        htmlFor={id}
        className="font-sans text-micro uppercase tracking-ultra-wide text-ink-500 block mb-3"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        required={required}
        className="w-full bg-transparent border-b border-ink-700 focus:border-ink-0 px-0 py-3 font-sans text-body text-ink-0 placeholder-ink-600 focus:outline-none transition-colors duration-300 disabled:opacity-50"
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
    </div>
  );
}
