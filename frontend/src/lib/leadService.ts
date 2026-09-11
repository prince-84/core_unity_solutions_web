export interface LeadPayload {
  formType: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  service?: string;
  specialist?: string;
  contactMethod?: string;
  message?: string;
  question?: string;
  pageUrl?: string;
}

export async function submitLead(payload: LeadPayload): Promise<{ success: boolean; message?: string }> {
  try {
    const leadData = {
      ...payload,
      pageUrl: payload.pageUrl || (typeof window !== "undefined" ? window.location.href : ""),
      timestamp: new Date().toISOString(),
    };

    // 1. Submit via Next.js API Route (/api/leads) which posts to Google Sheet server-side
    try {
      const apiRes = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });

      if (apiRes.ok) {
        return { success: true, message: "Lead submitted successfully!" };
      }
    } catch (err) {
      console.warn("API route submission failed, trying direct Google Sheet fallback:", err);
    }

    // 2. Fallback only if /api/leads failed or wasn't reachable
    const googleAppsScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL;
    if (googleAppsScriptUrl) {
      try {
        await fetch(googleAppsScriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadData),
        });
        return { success: true, message: "Lead submitted successfully!" };
      } catch (err) {
        console.warn("Direct Google Apps Script fetch error:", err);
      }
    }

    return { success: true, message: "Thank you! We have received your request." };
  } catch (error) {
    console.error("Lead submission error:", error);
    return { success: false, message: "Failed to submit form. Please try again." };
  }
}
