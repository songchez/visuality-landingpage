import { useState } from "react";

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log({ email, subject, message });
    // Add your form submission logic here
  };

  return (
    <div className="w-full max-w-lg backdrop-blur-lg bg-slate-900/30 rounded-xl shadow-2xl p-8">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Contact Us
      </h1>

      <p className="text-center text-slate-300 mb-10">
        Got a technical issue? Want to send feedback about a beta feature? Need
        details about our Business plan? Let us know.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="name@flowbite.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Let us know how we can help you"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Your message
          </label>
          <textarea
            id="message"
            className="w-full p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Leave a comment..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="inline-flex justify-center items-center w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 focus:ring-4 focus:ring-blue-500/50"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
