import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code") ?? "";
  const state = url.searchParams.get("state") ?? "";
  const error = url.searchParams.get("error") ?? "";

  console.log("[APPLE CALLBACK] GET", {
    hasCode: !!code,
    state,
    error,
  });

  return NextResponse.json({ method: "GET", code, state, error });
}

export async function POST(req: Request) {
  const contentType = req.headers.get("content-type") ?? "";
  let code = "";
  let state = "";
  let error = "";
  let id_token = "";
  let user = "";

  // Apple sends application/x-www-form-urlencoded when using response_mode=form_post
  if (contentType.includes("application/x-www-form-urlencoded")) {
    const bodyText = await req.text();
    const params = new URLSearchParams(bodyText);

    code = params.get("code") ?? "";
    state = params.get("state") ?? "";
    error = params.get("error") ?? "";
    id_token = params.get("id_token") ?? "";
    user = params.get("user") ?? "";
  } else if (contentType.includes("application/json")) {
    // just in case you hit it manually with JSON
    const body = await req.json().catch(() => ({}));
    code = body.code ?? "";
    state = body.state ?? "";
    error = body.error ?? "";
    id_token = body.id_token ?? "";
    user = body.user ?? "";
  } else {
    const bodyText = await req.text().catch(() => "");
    console.log("[APPLE CALLBACK] POST unknown content-type", contentType, bodyText);
  }

  console.log("[APPLE CALLBACK] POST", {
    hasCode: !!code,
    hasIdToken: !!id_token,
    state,
    error,
    userPreview: user ? user.slice(0, 80) : "",
  });

  // For now, just show something in the browser so you know it worked.
  // Later we will exchange `code` for tokens server-side and redirect back into the app.
  const html = `<!doctype html>
<html>
  <head><meta charset="utf-8"><title>Apple Callback</title></head>
  <body style="font-family: -apple-system, system-ui; padding: 24px;">
    <h2>Apple callback received (POST)</h2>
    <pre>${escapeHtml(JSON.stringify({ code, state, error, hasIdToken: !!id_token }, null, 2))}</pre>
    <p>You can close this window.</p>
  </body>
</html>`;

  return new NextResponse(html, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}