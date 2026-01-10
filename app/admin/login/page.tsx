"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }

      // success → go to dashboard
      router.push("/admin/dashboard");
    } catch (err) {
      setError("Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl bg-white/5 border border-white/10 p-8"
      >
        <h1 className="text-2xl text-white mb-6">Admin Login</h1>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-4 px-4 py-3 rounded-xl
                     bg-black/40 border border-white/10
                     text-white outline-none
                     focus:border-white/30"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-6 px-4 py-3 rounded-xl
                     bg-black/40 border border-white/10
                     text-white outline-none
                     focus:border-white/30"
        />

        {/* ERROR */}
        {error && (
          <p className="text-red-400 text-sm mb-4">
            {error}
          </p>
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-white text-black
                     py-3 font-medium transition
                     hover:bg-gray-200 disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
