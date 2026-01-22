import { NextResponse } from "next/server";

function buildAppRedirectURL(params: { code?: string; state?: string; error?: string }) {
  const url = new URL("oasis://apple/callback");
  if (params.code) url.searchParams.set("code", params.code);
  if (params.state) url.searchParams.set("state", params.state);
  if (params.error) url.searchParams.set("error", params.error);
  return url.toString();
}

export async function POST(req: Request) {
  const form = await req.formData();

  const code = (form.get("code") as string) || "";
  const state = (form.get("state") as string) || "";
  const error = (form.get("error") as string) || "";

  console.log("[APPLE CALLBACK] POST", { hasCode: !!code, state, error });

  const appURL = buildAppRedirectURL({ code, state, error });

  return NextResponse.redirect(appURL, { status: 303 });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code") || "";
  const state = searchParams.get("state") || "";
  const error = searchParams.get("error") || "";

  console.log("[APPLE CALLBACK] GET", { hasCode: !!code, state, error });

  const appURL = buildAppRedirectURL({ code, state, error });
  return NextResponse.redirect(appURL, { status: 303 });
}
