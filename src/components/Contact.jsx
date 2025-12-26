import React from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import FloatingLabelInput from "./FloatingLabelInput";

const Contact = () => (
  <section
    id="contact"
    className="py-16 bg-white dark:bg-slate-900 relative transition-colors duration-300"
  >
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-100/40 dark:bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-6 font-space-grotesk">
          Let's Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500">
            Something Future-Proof
          </span>
        </h2>
        <p className="text-stone-600 dark:text-slate-400 text-lg mb-12 max-w-md">
          Have an idea or need a hand with your next AI-integrated project? Drop
          me a message and let's talk.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/Shridhan15"
            target="_blank"
            className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 text-stone-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-900/20 hover:-translate-y-1 transition-all duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/shridhan-suman-3970a3293/"
            target="_blank"
            className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 text-[#0077b5] hover:bg-white dark:hover:bg-slate-800 hover:border-[#0077b5] hover:shadow-[0_0_15px_rgba(0,119,181,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shridhan.suman@gmail.com"
            target="_blank"
            className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 text-[#EA4335] hover:bg-white dark:hover:bg-slate-800 hover:border-[#EA4335] hover:shadow-[0_0_15px_rgba(234,67,53,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://wa.me/916397542808?text=Hi%20Shridhan,%20I%20came%20across%20your%20portfolio!"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 text-green-600 dark:text-green-500 hover:text-green-500 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:-translate-y-1 transition-all duration-300"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={24} />
          </a>
        </div>
      </div>

      <form  className="space-y-2 p-8 rounded-3xl bg-stone-50/80 dark:bg-slate-800/30 backdrop-blur-sm border border-stone-200 dark:border-slate-700">
        <FloatingLabelInput type="text" id="name" name="name"  required placeholder="Name" />
        <FloatingLabelInput
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email Address"
        />

        <div className="relative z-0 w-full mb-8 group">
          <textarea
            name="message"
            id="message"
            
            rows="4"
            className="block py-3 px-0 w-full text-base text-stone-900 dark:text-white bg-transparent border-0 border-b-2 border-stone-300 dark:border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-600 dark:focus:border-cyan-400 peer transition-colors resize-none"
            placeholder=" "
            required
          />
          <label
            htmlFor="message"
            className="peer-focus:font-medium absolute text-sm text-stone-500 dark:text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 dark:peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3.5 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Message
          </label>
        </div>

        <button type="submit" className="w-full cursor-pointer py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-600 dark:to-purple-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/20 dark:shadow-cyan-900/20 hover:shadow-cyan-500/40 dark:hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300 flex justify-center items-center gap-2">
          Send Message <Send size={18} />
        </button>
      </form>
    </div>
  </section>
);
export default Contact;
