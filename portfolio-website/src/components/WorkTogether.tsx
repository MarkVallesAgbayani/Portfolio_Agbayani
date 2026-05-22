import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef, useState } from "react";

function WorkTogether() {
  const [state, handleSubmit] = useForm("mredkqpg");
  const [showToast, setShowToast] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (!state.succeeded) {
      return;
    }

    formRef.current?.reset();
    setShowToast(true);

    const timeoutId = window.setTimeout(() => {
      setShowToast(false);
    }, 4000);

    return () => window.clearTimeout(timeoutId);
  }, [state.succeeded]);

  return (
    <>
      <div className="mx-auto my-20 flex w-full max-w-5xl flex-col px-1 text-center sm:px-4">
        <h2 className="text-5xl font-bold uppercase text-white md:text-6xl">
          Open for
        </h2>
        <p className="text-5xl font-bold uppercase text-zinc-800 md:text-6xl">
          Opportunities
        </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mx-auto mt-8 w-full max-w-5xl"
        >
          <div className="grid gap-5 text-sm text-neutral-500 md:grid-cols-2">
            <div className="flex flex-col text-left">
              <label htmlFor="name" className="my-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="h-12 rounded-md bg-neutral-800 p-3 text-base text-white placeholder:text-zinc-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="flex flex-col text-left">
              <label htmlFor="email" className="my-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="h-12 rounded-md bg-neutral-800 p-3 text-base text-white placeholder:text-zinc-400"
                placeholder="Your Email Address"
                required
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col text-left text-sm text-neutral-500">
            <label htmlFor="message" className="my-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="min-h-40 rounded-md bg-neutral-800 p-3 text-base text-white placeholder:text-zinc-400"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <button
            disabled={state.submitting}
            type="submit"
            className="mt-6 w-full rounded-md bg-amber-600 p-3 font-semibold text-white transition-all duration-300 hover:bg-amber-700 sm:w-auto sm:px-8"
          >
            {state.submitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      {showToast && (
        <div
          id="toast-success"
          className="fixed right-5 top-5 z-50 flex w-full max-w-sm items-center rounded-md border border-emerald-500/20 bg-zinc-900 p-4 text-white shadow-lg shadow-black/30"
          role="alert"
          aria-live="polite"
        >
          <div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 11.917 9.724 16.5 19 7.5"
              />
            </svg>
          </div>

          <div className="ms-3 text-sm font-medium">
            Message sent successfully!
          </div>

          <button
            onClick={() => setShowToast(false)}
            className="ms-auto text-sm text-zinc-300 transition-colors hover:text-white"
            aria-label="Dismiss success message"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}

export default WorkTogether;
