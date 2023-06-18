import ButtonPrimary from "./ButtonPrimary";

export default function ContactForm() {
  return (
    <form
          className="w-full max-w-6xl lg:w-1/2 "
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          name="contact"
          method="POST"
          action="/success"
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
            className="form-field text-base my-6 p-5 w-full border-b border-gray-200 focus:outline-none bg-transparent"
            type="text"
            name="name"
            required
            autoComplete="name"
          />

          <label htmlFor="email">Correo</label>
          <input
            id="email"
            className="form-field text-base my-6 p-5 w-full border-b border-gray-200 focus:outline-none bg-transparent"
            type="email"
            name="email"
            required
            autoComplete="email"
          />

          <label htmlFor="feedback">Mensaje</label>
          <textarea
            id="feedback"
            className="form-field text-base my-6 p-5 w-full border-b border-gray-200 focus:outline-none bg-transparent"
            wrap="soft"
            name="message"
            required
          ></textarea>
          <ButtonPrimary className="" type="submit">
            Enviar
          </ButtonPrimary>
        </form>
  )
}