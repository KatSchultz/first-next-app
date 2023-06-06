import Link from "next/link";

const Page = () => (
  <>
    <h1>Hello Dashboard Page!</h1>
    <Link href="/dashboard/settings">Check out the Settings Page</Link>
    <p>OR</p>
    <Link href="/">Return Home</Link>
  </>
);

export default Page;
