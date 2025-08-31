import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const name = String(form.get("name") || "");
  const email = String(form.get("email") || "");
  const message = String(form.get("message") || "");
  const company = String(form.get("company") || ""); // honeypot

  if (company) return json({ ok: true });

  if (!name || !email || !message) {
    return json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    // For now, just redirect to a mailto fallback if no backend email provider.
    // You can integrate Resend/Sendgrid here later.
    const mailto = `mailto:hello@jkm.art?subject=${encodeURIComponent(
      `Portfolio Contact from ${name}`
    )}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)}`;
    if ((request.headers.get("Accept") || "").includes("text/html")) {
      return redirect(mailto);
    }
    return json({ ok: true });
  } catch (e) {
    return json({ error: "Failed to send" }, { status: 500 });
  }
}

export default function ContactRoute() {
  return null;
}
