"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const initialState = {
  name: "",
  email: "",
  project: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Please enter a valid email.";
    if (!form.project.trim()) nextErrors.project = "Please describe your project type.";
    if (!form.message.trim()) nextErrors.message = "Please write a message.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setForm(initialState);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_120px_-45px_rgba(15,23,42,0.75)]">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-200">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
            data-cursor
          />
          {errors.name ? <p className="mt-2 text-xs text-rose-400">{errors.name}</p> : null}
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-200">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
            data-cursor
          />
          {errors.email ? <p className="mt-2 text-xs text-rose-400">{errors.email}</p> : null}
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-semibold text-slate-200">Project Type</span>
        <input
          type="text"
          name="project"
          value={form.project}
          onChange={handleChange}
          className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
          data-cursor
        />
        {errors.project ? <p className="mt-2 text-xs text-rose-400">{errors.project}</p> : null}
      </label>

      <label className="block">
        <span className="text-sm font-semibold text-slate-200">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="mt-2 w-full rounded-[1.5rem] border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
          data-cursor
        />
        {errors.message ? <p className="mt-2 text-xs text-rose-400">{errors.message}</p> : null}
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400"
          data-cursor
        >
          <Send size={16} />
          Send Message
        </button>
        {status === "success" ? (
          <p className="flex items-center gap-2 text-sm text-emerald-300">
            <CheckCircle2 size={18} /> Message ready to send.
          </p>
        ) : status === "error" ? (
          <p className="text-sm text-rose-400">Please fix the errors above before sending.</p>
        ) : null}
      </div>
    </form>
  );
}
