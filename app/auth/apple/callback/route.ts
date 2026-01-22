import { NextResponse } from "next/server";

function buildAppRedirectURL(params: {
  code?: string;
  state?: string;
  error?: string;
  idToken?: string;
  user?: string;
}) {
  const url = new URL("oasis://apple/callback");

  if (params.code) url.searchParams.set("code", params.code);
  if (params.state) url.searchParams.set("state", params.state);
  if (params.error) url.searchParams.set("error", params.error);

  // Apple uses id_token as the key name
  if (params.idToken) url.searchParams.set("id_token", params.idToken);

  // Apple sends "user" only on first auth and only when name/email scope is requested.
  // It's JSON as a string.
  if (params.user) url.searchParams.set("user", params.user);

  return url.toString();
}

export async function POST(req: Request) {
  const form = await req.formData();

  const code = (form.get("code") as string) || "";
  const state = (form.get("state") as string) || "";
  const error = (form.get("error") as string) || "";
  const idToken = (form.get("id_token") as string) || "";
  const user = (form.get("user") as string) || "";

  let parsedUser: any = null;
  if (user) {
    try {
      parsedUser = JSON.parse(user);
    } catch {
      parsedUser = { raw: user };
    }
  }

  console.log("[APPLE CALLBACK] POST", {
    hasCode: !!code,
    stateLen: state.length,
    error,
    hasIdToken: !!idToken,
    idTokenLen: idToken.length,
    hasUser: !!user,
    userParsed: parsedUser,
  });

  const appURL = buildAppRedirectURL({ code, state, error, idToken, user });
  return NextResponse.redirect(appURL, { status: 303 });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const code = searchParams.get("code") || "";
  const state = searchParams.get("state") || "";
  const error = searchParams.get("error") || "";
  const idToken = searchParams.get("id_token") || "";
  const user = searchParams.get("user") || "";

  let parsedUser: any = null;
  if (user) {
    try {
      parsedUser = JSON.parse(user);
    } catch {
      parsedUser = { raw: user };
    }
  }

  console.log("[APPLE CALLBACK] GET", {
    hasCode: !!code,
    stateLen: state.length,
    error,
    hasIdToken: !!idToken,
    idTokenLen: idToken.length,
    hasUser: !!user,
    userParsed: parsedUser,
  });

  const appURL = buildAppRedirectURL({ code, state, error, idToken, user });
  return NextResponse.redirect(appURL, { status: 303 });
}