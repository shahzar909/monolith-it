"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

const COUNTRY_CODES = [
  { code: "+1", label: "US" },
  { code: "+44", label: "UK" },
  { code: "+61", label: "AU" },
  { code: "+91", label: "IN" },
  { code: "+81", label: "JP" },
  { code: "+49", label: "DE" },
];

export default function GetStartedModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/get-started", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          countryCode,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted(true);

      setTimeout(() => {
        onClose();
      }, 2500);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-[90%] max-w-md rounded-2xl
          bg-white/5 backdrop-blur-xl
          border border-white/10
          p-8 text-white
          animate-[scaleIn_0.3s_ease]
        "
      >
        {!submitted ? (
          <>
            <h2 className="text-2xl font-semibold">Get Started</h2>
            <p className="mt-1 text-sm text-gray-400">
              Fill in your details and we’ll contact you.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Name */}
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/30"
                required
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/30"
                required
              />

              {/* Phone */}
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-28 rounded-xl bg-black/40 border border-white/10 px-3 py-3 text-sm outline-none focus:border-white/30"
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label} {c.code}
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  placeholder="10-digit phone number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value.replace(/\D/g, ""));
                    setError("");
                  }}
                  maxLength={10}
                  className="flex-1 rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/30"
                  required
                />
              </div>

              {error && (
                <p className="text-sm text-red-400">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-white py-3 text-black font-medium hover:bg-gray-200 transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center text-center py-10">
            <CheckCircle size={54} className="text-green-400 mb-4" />
            <h3 className="text-2xl font-semibold">
              Submitted Successfully
            </h3>
            <p className="mt-2 text-sm text-gray-400 max-w-xs">
              Thank you! We’ll contact you shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
