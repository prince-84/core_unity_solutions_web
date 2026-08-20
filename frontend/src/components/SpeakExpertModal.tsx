"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ShieldAlert, Phone, Mail, User, Check, Loader2, MessageSquare } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface SpeakExpertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SpeakExpertModal({ isOpen, onClose }: SpeakExpertModalProps) {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  // Ensure portal only renders client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen && mounted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, mounted]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen || !mounted) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API connection to Laravel backend
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        // Reset and close
        onClose();
        setName("");
        setEmail("");
        setPhone("");
        setSpecialist("");
        setContactMethod("email");
        setQuestion("");
        setStatus("idle");
      }, 1500);
    }, 1800);
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/95 backdrop-blur-xl transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-[0_20px_60px_rgba(0,0,0,0.3)] z-10 overflow-hidden animate-scale-up">
        {/* Top brand red strip */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 to-rose-700"></div>

        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 border border-zinc-200 p-2 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 border border-rose-200/50 rounded-full text-[11px] font-semibold text-red-600 uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5" /> Speak to an Expert
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">Consult an Expert</h3>
          <p className="text-zinc-500 text-sm mt-1">Get strategic guidance from our digital agency specialists.</p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="expert-name" className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Your Name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-400" />
              <input 
                id="expert-name"
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-11 pr-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 placeholder-zinc-400"
                placeholder="e.g. Jane Doe"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="expert-email" className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-400" />
                <input 
                  id="expert-email"
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-11 pr-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 placeholder-zinc-400"
                  placeholder="name@company.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Phone Number</label>
              <PhoneInput
                defaultCountry="ae"
                value={phone}
                onChange={(phoneVal) => setPhone(phoneVal)}
                inputClassName="react-international-phone-input"
                countrySelectorClassName="react-international-phone-country-selector"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="expert-specialist" className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Consultation Topic</label>
              <div className="relative">
                <select 
                  id="expert-specialist"
                  value={specialist}
                  onChange={(e) => setSpecialist(e.target.value)}
                  required
                  className={`w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 appearance-none cursor-pointer ${
                    specialist === "" ? "text-zinc-400" : "text-zinc-900"
                  }`}
                >
                  <option value="" disabled>Select a topic</option>
                  <option value="tech-architecture" className="bg-white text-zinc-900">Technical Architecture</option>
                  <option value="product-strategy" className="bg-white text-zinc-900">Product Strategy</option>
                  <option value="creative-design" className="bg-white text-zinc-900">Creative UI/UX Design</option>
                  <option value="growth-marketing" className="bg-white text-zinc-900">Growth & Marketing</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="expert-method" className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Contact Preference</label>
              <div className="relative">
                <select 
                  id="expert-method"
                  value={contactMethod}
                  onChange={(e) => setContactMethod(e.target.value)}
                  required
                  className={`w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 appearance-none cursor-pointer ${
                    contactMethod === "" ? "text-zinc-400" : "text-zinc-900"
                  }`}
                >
                  <option value="" disabled className="text-zinc-400">Select an option</option>
                  <option value="email" className="bg-white text-zinc-900">Email Response</option>
                  <option value="whatsapp" className="bg-white text-zinc-900">WhatsApp Message</option>
                  <option value="call" className="bg-white text-zinc-900">Phone Call</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="expert-question" className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Core Question / Project Brief</label>
            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-400" />
              <textarea 
                id="expert-question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
                rows={3} 
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-11 pr-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 resize-none placeholder-zinc-400"
                placeholder="What challenges can our experts help you solve?"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={status !== "idle"}
            className={`w-full flex items-center justify-center py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg cursor-pointer ${
              status === "success" 
                ? "bg-green-600 shadow-green-950/20" 
                : "bg-red-600 hover:bg-red-700 active:scale-[0.98] shadow-red-950/20"
            }`}
          >
            {status === "idle" && "Request Consultation"}
            {status === "loading" && (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Connecting...
              </>
            )}
            {status === "success" && (
              <>
                <Check className="w-4 h-4 mr-2" />
                Request Submitted!
              </>
            )}
          </button>
        </form>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .animate-scale-up {
          animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .react-international-phone-input-container {
          width: 100% !important;
          display: flex !important;
          align-items: center !important;
        }
        .react-international-phone-input {
          flex: 1 !important;
          height: 46px !important;
          border-left: none !important;
          width: 100% !important;
        }
        .react-international-phone-country-selector {
          height: 46px !important;
        }
        .react-international-phone-country-selector-button {
          height: 46px !important;
          background: #fafafa !important;
          border-color: #e4e4e7 !important;
          border-radius: 0.75rem 0 0 0.75rem !important;
          padding: 10px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        .react-international-phone-input-container .react-international-phone-input {
          background: #fafafa !important;
          border-color: #e4e4e7 !important;
          color: #18181b !important;
          font-size: 0.875rem !important;
          border-radius: 0 0.75rem 0.75rem 0 !important;
          padding-top: 0.75rem !important;
          padding-bottom: 0.75rem !important;
          padding-left: 0.75rem !important;
          padding-right: 0.75rem !important;
          font-family: inherit !important;
        }
        .react-international-phone-input-container .react-international-phone-input:focus {
          border-color: #dc2626 !important;
          box-shadow: 0 0 0 1px rgba(220, 38, 38, 0.25) !important;
          outline: none !important;
        }
      `}</style>
    </div>,
    document.body
  );
}
