import ButtonPrimary from "../../components/es/ButtonPrimary";
import Link from "next/link";

export default function ContactForm() {
  return (
    <form
          className="w-full max-w-6xl pl-0 lg:w-3/5 "
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          name="contact"
          method="POST"
          action="/es/gracias"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              No llenar si eres humano: <input name="bot-field" />
            </label>
          </p>

          <label htmlFor="name">Nombre y apellido</label>
          <input
            id="name"
            className="form-field text-base my-6 p-5 w-full bg-transparent border-b border-gray-200 focus:outline-none"
            type="text"
            name="name"
            required
            autoComplete="name"
          />

          <label htmlFor="email">Correo</label>
          <input
            id="email"
            className="form-field text-base my-6 p-5 w-full bg-transparent border-b border-gray-200 focus:outline-none"
            type="email"
            name="email"
            required
            autoComplete="email"
          />

          <label htmlFor="feedback">Mensaje</label>
          <textarea
            id="feedback"
            className="form-field text-base my-6 p-5 w-full bg-transparent border-b border-gray-200 focus:outline-none"
            wrap="soft"
            name="message"
            required
          ></textarea>

          <div className="mb-6 w-full">
            <label className="">
              <input
                type="checkbox"
                className="form-checkbox mr-2 h-4 w-4"
                name="privacy"
                required
              />
              Al marcar esta casilla, acepta nuestra
              <Link href="/es/privacidad" target="_blank" className="underline underline-offset-4 ml-2">
                política de privacidad
              </Link>
            </label>
        </div>
          <ButtonPrimary className="" type="submit">
            Enviar
          </ButtonPrimary>
        </form>
  )
}


