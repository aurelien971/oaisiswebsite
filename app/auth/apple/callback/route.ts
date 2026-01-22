import { NextResponse } from "next/server";

function html(body: string) {
  return new NextResponse(
    `<!doctype html><html><head><meta charset="utf-8"><title>Apple Callback</title></head><body style="font-family: ui-sans-serif, system-ui; padding: 24px;">
      <h2>Apple callback received</h2>
      ${body}
    </body></html>`,
    { headers: { "content-type": "text/html; charset=utf-8" } }
  );
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const code = String(form.get("code") ?? "");
    const state = String(form.get("state") ?? "");
    const idToken = String(form.get("id_token") ?? "");
    const user = String(form.get("user") ?? "");
    const error = String(form.get("error") ?? "");
    const errorDescription = String(form.get("error_description") ?? "");

    console.log("[APPLE CALLBACK] POST", {
      hasCode: !!code,
      hasIdToken: !!idToken,
      state,
      error,
      errorDescription,
      userLen: user.length,
    });

    return html(`
      <pre style="background:#f6f6f6; padding:12px; border-radius:8px; overflow:auto;">${escapeHtml(
        JSON.stringify(
          {
            code: code ? code.slice(0, 12) + "..." : "",
            state,
            id_token: idToken ? idToken.slice(0, 24) + "..." : "",
            user: user ? user.slice(0, 120) + (user.length > 120 ? "..." : "") : "",
            error,
            error_description: errorDescription,
          },
          null,
          2
        )
      )}</pre>
      <p>If you see <b>code</b> here, the web callback is working.</p>
    `);
  } catch (e: any) {
    console.error("[APPLE CALLBACK] POST error", e);
    return html(`<p style="color:#b00020;">POST error: ${escapeHtml(String(e?.message ?? e))}</p>`);
  }
}

// Optional: helpful if you ever switch to response_mode=query for debugging
export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code") ?? "";
  const state = url.searchParams.get("state") ?? "";
  const error = url.searchParams.get("error") ?? "";
  console.log("[APPLE CALLBACK] GET", { hasCode: !!code, state, error });

  return html(`
    <pre style="background:#f6f6f6; padding:12px; border-radius:8px; overflow:auto;">${escapeHtml(
      JSON.stringify({ code: code ? code.slice(0, 12) + "..." : "", state, error }, null, 2)
    )}</pre>
  `);
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}