import { NextResponse } from "next/server";

function buildAppRedirectURL(params: {
  code?: string;
  state?: string;
  error?: string;
  idToken?: string;
}) {
  const url = new URL("oasis://apple/callback");
  if (params.code) url.searchParams.set("code", params.code);
  if (params.state) url.searchParams.set("state", params.state);
  if (params.error) url.searchParams.set("error", params.error);
  if (params.idToken) url.searchParams.set("id_token", params.idToken);
  return url.toString();
}

// Apple uses form_post for name/email and for id_token when you request it
export async function POST(req: Request) {
  const form = await req.formData();

  const code = (form.get("code") as string) || "";
  const state = (form.get("state") as string) || "";
  const error = (form.get("error") as string) || "";
  const idToken = (form.get("id_token") as string) || "";

  console.log("[APPLE CALLBACK] POST", {
    hasCode: !!code,
    stateLen: state.length,
    error,
    hasIdToken: !!idToken,
    idTokenLen: idToken.length,
  });

  const appURL = buildAppRedirectURL({ code, state, error, idToken });
  return NextResponse.redirect(appURL, { status: 303 });
}

// If someone hits it in a browser with query params
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const code = searchParams.get("code") || "";
  const state = searchParams.get("state") || "";
  const error = searchParams.get("error") || "";
  const idToken = searchParams.get("id_token") || "";

  console.log("[APPLE CALLBACK] GET", {
    hasCode: !!code,
    stateLen: state.length,
    error,
    hasIdToken: !!idToken,
    idTokenLen: idToken.length,
  });

  const appURL = buildAppRedirectURL({ code, state, error, idToken });
  return NextResponse.redirect(appURL, { status: 303 });
}