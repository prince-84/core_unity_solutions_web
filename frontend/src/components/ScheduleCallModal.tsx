"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Calendar, User, Mail, Check, Loader2 } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScheduleCallModal({ isOpen, onClose }: ScheduleCallModalProps) {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
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
        setService("");
        setMessage("");
        setStatus("idle");
      }, 1500);
    }, 1800);
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop - darker overlay to make background completely invisible */}
      <div 
        className="fixed inset-0 bg-black/95 backdrop-blur-xl transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Container - Solid White background */}
      <div className="relative bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-[0_20px_60px_rgba(0,0,0,0.3)] z-10 overflow-hidden animate-scale-up">
        {/* Subtle top red glow bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 to-rose-600"></div>

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 border border-red-200/50 rounded-full text-[11px] font-semibold text-red-600 uppercase tracking-wider mb-3">
            <Calendar className="w-3 h-3" /> Direct Consultation
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">Schedule a Call</h3>
          <p className="text-zinc-500 text-sm mt-1">Let's discuss your project goals and requirements.</p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="modal-name" className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Full Name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-400" />
              <input 
                id="modal-name"
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-11 pr-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 placeholder-zinc-400"
                placeholder="e.g. John Doe"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-email" className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-400" />
                <input 
                  id="modal-email"
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

          <div>
            <label htmlFor="modal-service" className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Interested Service</label>
            <div className="relative">
              <select 
                id="modal-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                className={`w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 appearance-none cursor-pointer ${
                  service === "" ? "text-zinc-400" : "text-zinc-900"
                }`}
              >
                <option value="" disabled className="text-zinc-400">Please select a service</option>
                <option value="web-development" className="bg-white text-zinc-900">Web App & Core Development</option>
                <option value="mobile-app" className="bg-white text-zinc-900">Mobile Applications</option>
                <option value="ui-ux" className="bg-white text-zinc-900">UI/UX Product Design</option>
                <option value="digital-marketing" className="bg-white text-zinc-900">Growth & Performance Marketing</option>
                <option value="other" className="bg-white text-zinc-900">Other Inquiries</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="modal-message" className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Brief Message</label>
            <textarea 
              id="modal-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3} 
              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 text-sm focus:outline-none focus:border-red-600/80 focus:ring-1 focus:ring-red-600/25 transition-all duration-200 resize-none placeholder-zinc-400"
              placeholder="Describe your project, timeline, or objectives..."
            />
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
            {status === "idle" && "Book Call Now"}
            {status === "loading" && (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Connecting...
              </>
            )}
            {status === "success" && (
              <>
                <Check className="w-4 h-4 mr-2" />
                Booked Successfully!
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
        
        /* Override default phone input styling to match theme */
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
