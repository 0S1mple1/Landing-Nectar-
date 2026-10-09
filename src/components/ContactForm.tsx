import { useState, type FormEvent } from 'react'
import { whatsappNumber } from '../config/whatsapp'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [formError, setFormError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!whatsappNumber) {
      setFormError('O contato pelo WhatsApp está indisponível no momento.')
      return
    }

    const cleanName = name.trim()
    const cleanMessage = message.trim()

    if (!cleanName || !cleanMessage) {
      setFormError('Preencha seu nome e sua mensagem antes de continuar.')
      return
    }

    const text = `Olá! Meu nome é ${cleanName}.\n\n${cleanMessage}`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`

    setFormError('')
    window.location.assign(url)
  }

  return (
    <section
      id="contato"
      className="scroll-mt-28 bg-rose-950 px-5 py-20 text-white sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
            Vamos conversar?
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
            Mande uma mensagem.
          </h2>
          <p className="mt-5 max-w-md leading-7 text-rose-50/80">
            Preencha seus dados e continue a conversa com a Néctar pelo
            WhatsApp.
          </p>
          <p className="mt-8 font-medium text-amber-200">
            {whatsappNumber ?? 'Contato indisponível no momento.'}
          </p>
        </div>
        <div className="rounded-3xl bg-white p-6 text-stone-900 shadow-xl shadow-black/10 sm:p-9">
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-semibold"
              >
                Seu nome
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-rose-800 focus:ring-2 focus:ring-rose-800/20"
                aria-describedby="contact-privacy"
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold"
              >
                Mensagem
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full resize-y rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-rose-800 focus:ring-2 focus:ring-rose-800/20"
                aria-describedby="contact-privacy"
              />
            </div>
            <p
              id="contact-privacy"
              className="mt-4 text-sm leading-6 text-stone-600"
            >
              Ao continuar, o WhatsApp será aberto para você revisar e enviar a
              mensagem. Seus dados não são armazenados neste site.
            </p>
            {formError && (
              <p className="mt-4 text-sm font-medium text-red-700" role="alert">
                {formError}
              </p>
            )}
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-rose-900 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-rose-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-900"
            >
              Continuar para o WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
