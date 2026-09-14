import { Mail, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 text-ink-100 px-6 sm:px-10 lg:px-16 py-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
          <div>
            <span className="label-eyebrow block mb-6 text-ink-500">Get in touch</span>
            <h2 className="font-serif text-display-lg text-ink-0 leading-[1] tracking-tight">
              Let's create<br />something interesting.
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:hello@example.com"
              className="group flex items-center gap-3 text-ink-300 hover:text-ink-0 transition-colors duration-300"
              data-cursor="open"
            >
              <Mail size={18} strokeWidth={1.2} />
              <span className="font-sans text-body-sm tracking-wide">hello@example.com</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-ink-300 hover:text-ink-0 transition-colors duration-300"
              data-cursor="open"
            >
              <Linkedin size={18} strokeWidth={1.2} />
              <span className="font-sans text-body-sm tracking-wide">LinkedIn</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-ink-300 hover:text-ink-0 transition-colors duration-300"
              data-cursor="open"
            >
              <Instagram size={18} strokeWidth={1.2} />
              <span className="font-sans text-body-sm tracking-wide">Instagram</span>
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-600">
            &copy; {new Date().getFullYear()} Creative Portfolio
          </span>
          <span className="font-sans text-micro uppercase tracking-ultra-wide text-ink-600">
            Fashion × Technology
          </span>
        </div>
      </div>
    </footer>
  );
}
