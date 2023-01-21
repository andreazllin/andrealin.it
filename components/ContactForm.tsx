import { FunctionComponent, ReactElement, useState } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { CgSpinner } from "react-icons/cg"
import { FaPaperPlane, FaCheck, FaExclamationTriangle } from "react-icons/fa"
import { Email } from "@/types/email"

const inputStyles: string = "w-full border border-gray-200 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
const commonButtonStyles: string = "flex items-center gap-2 text-white px-5 py-2 w-max"  + " "

const ContactForm: FunctionComponent = () => {
  const { register, handleSubmit } = useForm<Email>()

  const [button, setButton] = useState<{
    css: string
    disabled: boolean
    content: ReactElement
  }>({
    css: commonButtonStyles + "bg-black",
    disabled: false,
    content: <>
      <FaPaperPlane /> Send
    </>
  })

  const onSubmit = async(data: Email): Promise<void> => {
    setButton({
      css: commonButtonStyles + "bg-gray-900/50",
      disabled: true,
      content: <CgSpinner className="animate-spin text-2xl" />
    })

    axios
      .post("/api/email", data)
      .then((response) => {
        setButton({
          css: commonButtonStyles + "bg-gray-900/50",
          disabled: true,
          content: <>
            <FaCheck /> {response.data.toString()}
          </>
        })
      })
      .catch(() => {
        setButton({
          disabled: true,
          css: commonButtonStyles + "bg-gray-900/50",
          content: <>
            <FaExclamationTriangle /> There was an error while sending the email, try again later.
          </>
        })
      })
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)} id="contactme">
      <div className="flex flex-col gap-2">
        <input
          {...register("contact")}
          className={inputStyles}
          type="email"
          placeholder="email@example.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <textarea
          {...register("content")}
          className={inputStyles}
          rows={10}
          placeholder="Type something here..."
        />
      </div>

      <button
        type="submit"
        className={button.css}
        disabled={button.disabled}
      >
        {button.content}
      </button>
    </form>
  )
}

export default ContactForm
