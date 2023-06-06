import Link from "next/link";

const SettingsPage = () => (
  <>
    <h2>This is the Settings Page</h2>
    <p>It is a leaf of the Dashboard Page</p>
    <p>
      It shows the dashboard header because it is nested inside the dashboard
      route
    </p>
    <Link href="/dashboard">Return to the Dashobard</Link>
  </>
);
export default SettingsPage;
