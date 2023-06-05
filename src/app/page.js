import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Hello Home Page!</h1>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </main>
  );
}
