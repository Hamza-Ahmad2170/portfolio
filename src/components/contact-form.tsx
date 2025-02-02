export default function ContactForm() {
  return (
    <form className="mx-auto w-full max-w-3xl lg:max-w-auto">
      <p className="pb-3 text-center text-2xl font-bold lg:text-lg">
        Send a message
      </p>
      <div className="grid grid-cols-1 gap-8 gap-y-10 text-lg lg:grid-cols-2">
        <div>
          <input
            type="text"
            placeholder="Entre your name"
            className="input-shadow w-full py-1.5 pl-4"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Entre your email"
            className="input-shadow w-full py-1.5 pl-4"
          />
        </div>
        <div className="lg:col-span-2">
          <input
            type="text"
            placeholder="Subject of Message"
            className="input-shadow w-full py-1.5 pl-4"
          />
        </div>
        <div className="lg:col-span-2">
          <textarea
            placeholder="Entre your message"
            rows={8}
            className="input-shadow w-full resize-none py-1.5 pl-4"
          ></textarea>
        </div>
      </div>
      <div className="pt-10 text-center">
        <button
          type="submit"
          className="bg-active w-full rounded-sm px-8 py-1 text-lg font-bold lg:w-auto"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
