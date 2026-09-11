"use client";

import React, { useState } from "react";
import { submitLead } from "@/lib/leadService";
import { CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const result = await submitLead({
      formType: "Contact Us Page",
      firstName,
      lastName,
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone,
      message,
    });

    if (result.success) {
      setStatus("success");
      setTimeout(() => {
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setStatus("idle");
      }, 4000);
    } else {
      setStatus("error");
      setErrorMessage(result.message || "Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-[#fafafa] border border-gray-200 rounded-[24px] p-8 lg:p-10 shadow-sm">
      {status === "success" ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 animate-fade-in">
          <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
          <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
          <p className="text-sm text-gray-600">
            Thank you for reaching out to CoreUnity Solutions. Our team will review your message and respond within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <input
              type="text"
              required
              placeholder="First Name*"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-1/2 border border-gray-200 rounded-lg p-3.5 text-[14px] outline-none focus:border-gray-400 text-black placeholder:text-gray-400 bg-white"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-1/2 border border-gray-200 rounded-lg p-3.5 text-[14px] outline-none focus:border-gray-400 text-black placeholder:text-gray-400 bg-white"
            />
          </div>

          <input
            type="text"
            placeholder="Phone No"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3.5 text-[14px] outline-none focus:border-gray-400 text-black placeholder:text-gray-400 bg-white"
          />

          <input
            type="email"
            required
            placeholder="E-mail*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3.5 text-[14px] outline-none focus:border-gray-400 text-black placeholder:text-gray-400 bg-white"
          />

          <textarea
            placeholder="Message (Optional)"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3.5 text-[14px] outline-none focus:border-gray-400 text-black placeholder:text-gray-400 resize-none bg-white"
          />

          {status === "error" && (
            <p className="text-xs text-red-600 bg-red-50 border border-red-200 p-3 rounded-lg text-center font-medium">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#c52833] hover:bg-[#a6222b] disabled:opacity-75 text-white font-semibold py-4 rounded-lg mt-2 transition-colors text-[15px] flex items-center justify-center gap-2 cursor-pointer"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Sending Message...
              </>
            ) : (
              "Submit Message"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
