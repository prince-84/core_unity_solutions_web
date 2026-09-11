"use client";

import React, { useState } from "react";
import { PhoneInputComponent } from "./PhoneInputComponent";
import { submitLead } from "@/lib/leadService";
import { CheckCircle2, Loader2 } from "lucide-react";

interface ServiceInquiryFormProps {
  pageName: string;
}

export function ServiceInquiryForm({ pageName }: ServiceInquiryFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const result = await submitLead({
      formType: `Service Inquiry - ${pageName}`,
      name,
      email,
      phone,
      service: pageName,
      message,
    });

    if (result.success) {
      setStatus("success");
      setTimeout(() => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setStatus("idle");
      }, 4000);
    } else {
      setStatus("error");
      setErrorMessage(result.message || "Failed to submit. Please try again.");
    }
  };

  return (
    <div className="bg-[#1f1f1f] border-2 border-white rounded-3xl p-8 md:p-10 w-full max-w-[480px]">
      <h3 className="text-2xl font-bold text-white mb-2">Have any questions?</h3>
      <p className="text-sm text-gray-400 mb-8 font-light">or tell us about your upcoming project.</p>

      {status === "success" ? (
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-3 animate-fade-in">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
          <h4 className="text-lg font-bold text-white">Message Received!</h4>
          <p className="text-xs text-gray-300">
            Thank you for reaching out. Our experts for <span className="text-red-400 font-semibold">{pageName}</span> will get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor={`name-${pageName}`} className="text-[11px] text-gray-300 ml-1 font-medium">Name*</label>
            <input
              id={`name-${pageName}`}
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="bg-white text-black px-4 py-3 rounded-lg text-sm w-full outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={`email-${pageName}`} className="text-[11px] text-gray-300 ml-1 font-medium">Email*</label>
            <input
              id={`email-${pageName}`}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hello@gmail.com"
              className="bg-white text-black px-4 py-3 rounded-lg text-sm w-full outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] text-gray-300 ml-1 font-medium">Phone No*</label>
            <PhoneInputComponent value={phone} onChange={setPhone} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={`msg-${pageName}`} className="text-[11px] text-gray-300 ml-1 font-medium">Tell us about your project (Optional)</label>
            <textarea
              id={`msg-${pageName}`}
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your goals, timeline, or requirements..."
              className="bg-white text-black px-4 py-3 rounded-lg text-sm w-full outline-none resize-none placeholder:text-gray-400"
            />
          </div>

          {status === "error" && (
            <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 p-2.5 rounded-lg text-center">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#cc2936] hover:bg-red-700 disabled:opacity-75 text-white font-bold tracking-[0.2em] text-sm py-4 rounded-lg mt-3 transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> SUBMITTING...
              </>
            ) : (
              "SUBMIT"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
