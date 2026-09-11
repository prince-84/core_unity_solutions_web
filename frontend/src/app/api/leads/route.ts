import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL || process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL;

    if (scriptUrl) {
      try {
        const response = await fetch(scriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        const resultText = await response.text();
        console.log("Google Apps Script response:", resultText);
      } catch (err) {
        console.error("Error sending lead to Google Apps Script URL:", err);
      }
    } else {
      console.warn("GOOGLE_SHEETS_SCRIPT_URL is not configured yet. Lead payload received:", body);
    }

    return NextResponse.json({ success: true, message: "Lead submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error in /api/leads:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
