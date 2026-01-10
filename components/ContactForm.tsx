"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
        p-6 md:p-8
        h-full
        flex flex-col justify-between
      "
    >
      <div className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            label="Full Name *"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <Input
            label="Email Address *"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            label="Phone Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <Input
            label="Subject *"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
            Message *
          </label>
          <textarea
            required
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="
              w-full rounded-xl bg-white/5 border border-white/10
              px-4 py-3 text-white
              focus:outline-none focus:border-white/30 focus:bg-white/10
              transition resize-none
            "
          />
        </div>
      </div>

      {/* Submit + Status */}
      <div className="mt-6 space-y-4">
        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={{ scale: status === "sending" ? 1 : 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="
            inline-flex items-center justify-center gap-3
            rounded-full border border-white/20
            px-8 py-3 text-sm text-white
            hover:bg-white hover:text-black
            transition
            disabled:opacity-50
          "
        >
          {status === "sending" ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <Send size={18} />
            </>
          )}
        </motion.button>

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="
                flex items-center gap-3
                rounded-xl border border-green-400/30
                bg-green-400/10 px-4 py-3 text-green-300 text-sm
              "
            >
              <CheckCircle size={18} />
              Message sent successfully.
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="
                flex items-center gap-3
                rounded-xl border border-red-400/30
                bg-red-400/10 px-4 py-3 text-red-300 text-sm
              "
            >
              <AlertCircle size={18} />
              {errorMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.form>
  );
}

/* ================= INPUT ================= */
function Input({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
        {label}
      </label>
      <input
        type={type}
        required={label.includes("*")}
        value={value}
        onChange={onChange}
        className="
          w-full rounded-xl bg-white/5 border border-white/10
          px-4 py-3 text-white
          focus:outline-none focus:border-white/30 focus:bg-white/10
          transition
        "
      />
    </div>
  );
}
