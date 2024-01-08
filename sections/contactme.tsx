import { useForm, ValidationError } from "@formspree/react";

const messages = [
  "Thanks for reaching out! 🚀 I'll get back to you shortly.",
  "Thank you for getting in touch! 🌟 I'll respond to your message soon.",
  "Appreciate your message! 🙌 Expect a reply from me soon.",
  "Awesome, thanks for contacting me! 📩 I'll be in touch shortly.",
  "Thanks a bunch for reaching out! 🌈 I'll respond as soon as possible.",
  "Cheers for your message! 🎉 I'll get back to you before you know it.",
  "Hey there! Thanks for contacting me! 🙏 Expect a prompt response.",
  "Thank you! Your message is received! 📬 I'll respond shortly.",
  "Hey, thanks for getting in touch! 🌻 I'll be sure to respond soon!",
  "Thank you for reaching out to me! 💌 I'll reply ASAP!",
];

export default function ContactMe() {
  const [state, handleSubmit] = useForm("xleyyrro");
  if (state.succeeded) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return (
      <div
        id="contactme"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-20 section"
      >
        <div
          data-aos="fade-down"
          className="flex border mb-6 border-line w-36 justify-between rounded-3xl px-4 py-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <div>Contact Me</div>
        </div>
        <div className="h-full w-full flex items-center flex-col gap-3">
          <h1 className="text-2xl text-center font-medium">
            {messages[randomIndex]}{" "}
          </h1>
          <h1 className="text-[5rem]">🤝</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        id="contactme"
        className="px-1 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-20 section"
      >
        <div
          data-aos="fade-down"
          className="flex border items-center mb-6 border-line w-36 justify-between rounded-3xl px-4 py-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <div>Contact Me</div>
        </div>
        <div className="h-full w-full flex items-center flex-col gap-4">
          <h1 className="font-semibold text-3xl">Lets Get Started!</h1>
          <div className="p-4 py-10 w-[80%] flex justify-center dark:bg-[#262626] shadow-2xl rounded-xl">
            <form
              className="flex flex-col gap-8 w-full items-center"
              onSubmit={handleSubmit}
            >
              <input
                placeholder="Email"
                id="email"
                type="email"
                name="email"
                className="h-10 w-[80%] bg-transparent border dark:border-line border-[#737373] rounded focus:outline-none p-2 text-sm"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea
                id="message"
                name="message"
                placeholder="Your idea goes here"
                className="h-40 w-[80%] bg-transparent border dark:border-line border-[#737373] rounded focus:outline-none p-2 text-sm"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                className="py-1 w-[80%] text-[#ffff] disabled:bg-[#0ea5e9] disabled:cursor-not-allowed font-medium rounded-md bg-[#0ea5e9] hover:bg-[#0284c7]"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
