"use client";
import { signInAction } from "@/actions/auth-action";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={signInAction}>
        <button>Log in</button>
      </form>
    </main>
  );
}
