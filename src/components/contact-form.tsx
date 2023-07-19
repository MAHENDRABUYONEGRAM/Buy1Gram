import type { FormEvent } from "react"
import { useState } from "react"

function Loader() {
  return (
    <span className="relative inline-block h-[2.6rem] w-[2.6rem] animate-spin rounded-full before:absolute before:inset-0 before:animate-prixClipFix before:rounded-full before:border-[5px] before:border-black before:content-['']"></span>
  )
}

function Form({ onSuccess }: { onSuccess: () => void }) {
  const [loadingSpinner, setLoadingSpinner] = useState(false)
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    fetch("/api/contact", {
      method: "POST",
      body: formData,
    })
      .then(res => {
        if (res.ok) onSuccess()
      })
      .catch(err => console.error(err))
  }
  return (
    <form
      className="flex flex-col gap-8 p-8 [&_input]:mt-4 [&_input]:w-full [&_input]:p-4 [&_input]:text-black [&_label]:text-white"
      onSubmit={e => {
        onSubmit(e)
        setLoadingSpinner(true)
      }}
      autoComplete="off"
    >
      <label>
        Name <sup>*</sup>
        <input name="name" type="text" placeholder="Your name..." required />
      </label>
      <label>
        Email <sup>*</sup>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </label>
      <label>
        Mobile No. <sup>*</sup>
        <input name="mobile" type="tel" pattern="[0-9]{10}" required />
      </label>
      <label>
        Purpose
        <select name="purpose" className="mt-4 w-full p-4 text-black">
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
      </label>
      <label>
        Comment
        <textarea name="comment" className="mt-4 w-full p-4 text-black" />
      </label>
      <button
        className="mt-32 w-full rounded-full bg-gradient-yellow-green px-8 py-4"
        type="submit"
      >
        {loadingSpinner ? <Loader /> : "SUBMIT"}
      </button>
    </form>
  )
}

const ContactForm = () => {
  const [displayContactForm, setDisplayContactForm] = useState(false)
  const [thankYouPage, setThankYouPage] = useState(false)
  return (
    <div className="flex min-h-[70vh] flex-col items-center gap-4 bg-light-black p-8 md:p-20">
      {thankYouPage ? (
        <>
          <p className="text-center text-5xl uppercase leading-normal text-white md:text-8xl">
            Thank you for <span className="text-accent">Contacting Us.</span>
            <br />
            Your query will be <span className="text-accent">
              resolved
            </span>{" "}
            soon.
          </p>
          <a
            href="/"
            className="mt-32 rounded-full bg-gradient-yellow-green px-8 py-4 uppercase"
          >
            Back To HomePage
          </a>
        </>
      ) : displayContactForm ? (
        <div className="w-full border border-solid border-white md:w-3/5">
          <div className="bg-xl-black p-8">
            <h3 className="text-5xl capitalize leading-normal text-white">
              contact us
            </h3>
            <p className="capitalize text-white">
              please fill this form to get support
            </p>
            <p className="capitalize text-white">
              fields marked with * are required
            </p>
          </div>
          <Form onSuccess={() => setThankYouPage(true)} />
        </div>
      ) : (
        <>
          <p className="text-center text-5xl uppercase leading-normal text-white md:text-8xl">
            please send us your <span className="text-accent">questions</span>{" "}
            and
            <br />
            we can <span className="text-accent">help</span> you better
          </p>
          <button
            className="mt-32 rounded-full bg-gradient-yellow-green px-8 py-4"
            onClick={() => setDisplayContactForm(true)}
          >
            CONTACT US
          </button>
        </>
      )}
    </div>
  )
}

export default ContactForm
