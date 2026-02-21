"use client";

import { useState } from "react";

const PROJECT_TYPES = [
  "Branding",
  "Websites & SEO",
  "Paid ADS",
  "Content & Production",
  "Digital Marketing",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    phone:"",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((p) => ({ ...p, [key]: e.target.value }));
    };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", projectType: "", message: "",phone: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="min-h-[calc(100svh-var(--nav-h))] px-6 py-16">
      <form
        onSubmit={onSubmit}
        className="mx-auto max-w-6xl space-y-8"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-primary font-semibold">Full Name</span>
            <input
              value={form.name}
              onChange={onChange("name")}
              required
              className="w-full rounded-xl border border-primary bg-background px-5 py-4 text-primary outline-none"
              placeholder="Full Name"
            />
          </label>

          <label className="space-y-2">
            <span className="text-primary font-semibold">Email Address</span>
            <input
              value={form.email}
              onChange={onChange("email")}
              type="email"
              required
              className="w-full rounded-xl border border-primary bg-background px-5 py-4 text-primary outline-none"
              placeholder="youremail@domain.com"
            />
          </label>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
            <label className="space-y-2 block">
            <span className="text-primary font-semibold">Project Type</span>
            <select
                value={form.projectType}
                onChange={onChange("projectType")}
                required
                className="w-full rounded-xl border border-primary bg-background px-5 py-4 text-primary outline-none"
            >
                <option value="" disabled>
                Select a topic
                </option>
                {PROJECT_TYPES.map((t) => (
                <option key={t} value={t}>
                    {t}
                </option>
                ))}
            </select>
            </label>
            <label className="space-y-2">
            <span className="text-primary font-semibold">Phone</span>
            <input
              value={form.phone}
              onChange={onChange("phone")}
              type="phone"
              required
              className="w-full rounded-xl border border-primary bg-background px-5 py-4 text-primary outline-none"
              placeholder="Your Phone"
            />
          </label>
        </div>
        <label className="space-y-2 block">
          <span className="text-primary font-semibold">Message</span>
          <textarea
            value={form.message}
            onChange={onChange("message")}
            required
            rows={6}
            className="w-full resize-none rounded-xl border border-primary bg-background px-5 py-4 text-primary outline-none"
            placeholder="Write your message..."
          />
        </label>

        <div className="flex items-center justify-end gap-4">
          {status === "success" && (
            <p className="text-primary">Message sent ✅</p>
          )}
          {status === "error" && (
            <p className="text-red-600">Failed to send. Try again.</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-br-[50px] bg-primary px-10 py-4 font-semibold text-third disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message →"}
          </button>
        </div>
      </form>
    </section>
  );
}
