import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const formData = await request.formData();

  const code = formData.get("code")?.toString();
  const state = formData.get("state")?.toString();

  if (!code || !state) {
    return redirect("/");
  }

  const redirectURL = `oasis://apple/callback?code=${encodeURIComponent(code)}&state=${encodeURIComponent(state)}`;

  return redirect(redirectURL);
}

export default function Page() {
  return null;
}