import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import connectDB from "@/lib/mongodb";
import Lead from "@/models/Lead";
import Contact from "@/models/Contact";
import { verifyAdminToken } from "@/lib/auth";

export default async function AdminDashboardPage() {
  const token = cookies().get("admin_token")?.value;

  if (!token) redirect("/admin/login");

  try {
    verifyAdminToken(token);
  } catch {
    redirect("/admin/login");
  }

  await connectDB();

  const leads = await Lead.find().sort({ createdAt: -1 });
  const contacts = await Contact.find().sort({ createdAt: -1 });

  return (
    <div className="min-h-screen bg-black text-white px-10 pt-32 pb-24">

    {/* ================= HEADER ================= */}
<div className="mb-16 flex items-center justify-between">
  <div>
    <h1 className="text-4xl font-light tracking-tight">
      Admin Dashboard
    </h1>
    <p className="text-gray-400 mt-2">
      Manage leads and contact form submissions
    </p>
  </div>

  <form action="/api/admin/logout" method="POST">
    <button
      type="submit"
      className="rounded-full border border-white/20 px-5 py-2
                 text-sm text-white hover:bg-white hover:text-black
                 transition"
    >
      Logout
    </button>
  </form>
</div>


      {/* ================= LEADS SECTION ================= */}
<section className="mb-24">
  <h2 className="text-2xl font-light mb-6">
    Leads
  </h2>

  {leads.length === 0 ? (
    <p className="text-gray-400">No leads yet.</p>
  ) : (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm">
        <thead className="bg-white/5 text-gray-300">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Date</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead: any) => (
            <tr
              key={lead._id}
              className="border-t border-white/10 hover:bg-white/5 transition"
            >
              <td className="p-4 font-medium">
                {lead.name}
              </td>

              <td className="p-4 text-gray-300">
                {lead.email}
              </td>

              <td className="p-4 text-gray-300">
                {lead.phone || "-"}
              </td>

              <td className="p-4 text-xs text-gray-400 whitespace-nowrap">
                {lead.createdAt
                  ? new Date(lead.createdAt).toLocaleString()
                  : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</section>


      {/* ================= CONTACT SECTION ================= */}
      <section>
        <h2 className="text-2xl font-light mb-6">
          Contact Form
        </h2>

        {contacts.length === 0 ? (
          <p className="text-gray-400">No contact messages yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-white/5 text-gray-300">
                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Phone</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Message</th>
                  <th className="p-4 text-left">Date</th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((contact: any) => (
                  <tr
                    key={contact._id}
                    className="border-t border-white/10 hover:bg-white/5 transition"
                  >
                    <td className="p-4 font-medium">
                      {contact.name}
                    </td>
                    <td className="p-4 text-gray-300">
                      {contact.email}
                    </td>
                    <td className="p-4 text-gray-300">
                      {contact.phone || "-"}
                    </td>
                    <td className="p-4 text-gray-300">
                      {contact.subject}
                    </td>
                    <td className="p-4 max-w-md truncate text-gray-300">
                      {contact.message}
                    </td>
                    <td className="p-4 text-xs text-gray-400 whitespace-nowrap">
                      {new Date(contact.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

    </div>
  );
}
