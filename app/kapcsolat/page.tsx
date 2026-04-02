'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DisclaimerBanner } from '@/components/disclaimer-banner'
import { AlertTriangle, Mail, MapPin, Clock, Send, CheckCircle2, X } from 'lucide-react'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'info@magyarsportevents.com',
    href: 'mailto:info@magyarsportevents.com',
  },
  {
    icon: MapPin,
    label: 'Cím',
    value: 'Panagioti Kaspi 5Α, Nicosia 1095, Cyprus',
    href: null,
  },
  {
    icon: Clock,
    label: 'Válaszidő',
    value: 'Általában 1–2 munkanapon belül válaszolunk',
    href: null,
  },
]

const SUBJECTS = [
  'Általános kérdés',
  'Partnerségi lehetőség',
  'Technikai probléma',
  'Jogi vagy adatvédelmi kérdés',
  'Sajtó / média megkeresés',
  'Egyéb',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    agree: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Kérjük, add meg a neved.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Érvényes e-mail cím szükséges.'
    if (!form.subject) e.subject = 'Válassz egy témát.'
    if (!form.message.trim() || form.message.trim().length < 20)
      e.message = 'Az üzenet legalább 20 karakter legyen.'
    if (!form.agree) e.agree = 'El kell fogadnod az adatvédelmi nyilatkozatot.'
    return e
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const target = e.target
    const value = target instanceof HTMLInputElement && target.type === 'checkbox'
      ? target.checked
      : target.value
    setForm((prev) => ({ ...prev, [target.name]: value }))
    setErrors((prev) => ({ ...prev, [target.name]: '' }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) {
      setErrors(e2)
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />

      {/* Google Ads compliant disclaimer — top 20% of page, always visible */}
      <DisclaimerBanner variant="page" />

      <main>
        {/* Hero */}
        <section className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              Kapcsolat
            </p>
            <h1 className="font-display font-black text-4xl md:text-5xl text-foreground text-balance leading-tight mb-4">
              Lépj kapcsolatba velünk
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Kérdésed van az oldalról, partnerségi lehetőségekről, vagy csak szeretnél
              visszajelzést küldeni? Írj nekünk — általában 1–2 munkanapon belül válaszolunk.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left — contact info + disclaimer */}
            <div className="flex flex-col gap-8">
              {/* Contact details */}
              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-6">
                  Elérhetőségek
                </h2>
                <ul className="space-y-5">
                  {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="size-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm text-foreground hover:text-primary transition-colors break-all"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-foreground leading-snug">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company card */}
              <div className="bg-card border border-border rounded-xl p-5">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-3">
                  Cégadatok
                </p>
                <p className="text-sm font-bold text-foreground leading-snug mb-1">
                  FISCUS NOSTRUM FUND SERVICES LIMITED
                </p>
                <p className="text-sm text-muted-foreground">Myrianthous Anna</p>
                <p className="text-sm text-muted-foreground">Panagioti Kaspi 5Α</p>
                <p className="text-sm text-muted-foreground">Nicosia 1095, Cyprus</p>
              </div>

              {/* Inline disclaimer box */}
              <div
                className="bg-primary/10 border border-primary/30 rounded-xl p-5 flex items-start gap-3"
                role="note"
                aria-label="Fontos tájékoztatás"
              >
                <AlertTriangle
                  className="size-5 text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div className="text-sm text-foreground leading-relaxed">
                  <p className="font-semibold text-primary mb-1">Fontos emlékeztető</p>
                  <p>
                    A MagyarSportEvents.com egy{' '}
                    <strong>másodlagos jegyközvetítő összehasonlító platform</strong>. Nem
                    értékesítünk jegyeket és nem gyűjtünk fizetési adatokat.{' '}
                    <strong>Az árak magasabbak lehetnek a névértéknél.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Right — contact form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <h2 className="font-display font-bold text-xl text-foreground mb-8">
                  Üzenet küldése
                </h2>

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Teljes név <span className="text-primary">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Pl. Kiss János"
                        className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition ${
                          errors.name ? 'border-red-500' : 'border-border'
                        }`}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-500" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        E-mail cím <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="pelda@email.com"
                        className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition ${
                          errors.email ? 'border-red-500' : 'border-border'
                        }`}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Téma <span className="text-primary">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition ${
                        errors.subject ? 'border-red-500' : 'border-border'
                      }`}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      aria-invalid={!!errors.subject}
                    >
                      <option value="" disabled>
                        Válassz egy témát...
                      </option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 text-xs text-red-500" role="alert">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Üzenet <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Írd le részletesen a kérdésed vagy megjegyzésed..."
                      className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none ${
                        errors.message ? 'border-red-500' : 'border-border'
                      }`}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                    />
                    <div className="flex justify-between mt-1">
                      {errors.message ? (
                        <p id="message-error" className="text-xs text-red-500" role="alert">
                          {errors.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <span className="text-xs text-muted-foreground">
                        {form.message.length} karakter
                      </span>
                    </div>
                  </div>

                  {/* Consent */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agree"
                        checked={form.agree}
                        onChange={handleChange}
                        className="mt-0.5 size-4 rounded border-border accent-primary shrink-0"
                        aria-describedby={errors.agree ? 'agree-error' : undefined}
                        aria-invalid={!!errors.agree}
                      />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        Elolvastam és elfogadom az{' '}
                        <a
                          href="/adatvedelem"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Adatvédelmi irányelveket
                        </a>
                        , és hozzájárulok ahhoz, hogy üzenetem feldolgozásához szükséges adataimat
                        tároljuk.{' '}
                        <strong className="text-foreground">
                          Tudomásul veszem, hogy ez az oldal másodlagos jegypiaci összehasonlító
                          platform, és az árak magasabbak lehetnek a névértéknél.
                        </strong>
                      </span>
                    </label>
                    {errors.agree && (
                      <p id="agree-error" className="mt-1 text-xs text-red-500 ml-7" role="alert">
                        {errors.agree}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="size-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                        Küldés...
                      </>
                    ) : (
                      <>
                        <Send className="size-4" aria-hidden="true" />
                        Üzenet küldése
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Success pop-up modal */}
      {submitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          aria-describedby="success-desc"
        >
          <div className="relative bg-card border border-border rounded-2xl shadow-2xl max-w-md w-full p-8 flex flex-col items-center text-center">
            <button
              onClick={() => setSubmitted(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Bezárás"
            >
              <X className="size-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mb-5">
              <CheckCircle2 className="size-9 text-primary" aria-hidden="true" />
            </div>

            <h2 id="success-title" className="font-display font-black text-2xl text-foreground mb-3">
              Üzenet elküldve!
            </h2>
            <p id="success-desc" className="text-muted-foreground text-sm leading-relaxed mb-6">
              Köszönjük, hogy felvettél velünk a kapcsolatot. Általában{' '}
              <strong className="text-foreground">1–2 munkanapon belül</strong> válaszolunk a
              megadott e-mail címre.
            </p>

            <div className="w-full bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 flex items-start gap-2 text-left mb-6">
              <AlertTriangle className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs text-foreground leading-relaxed">
                Emlékeztetünk: a MagyarSportEvents.com{' '}
                <strong>másodlagos jegyközvetítő platform</strong>. Jegyeket nem értékesítünk — az
                árak magasabbak lehetnek a névértéknél.
              </p>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="w-full bg-primary text-primary-foreground font-semibold text-sm py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Bezárás
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
