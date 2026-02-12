import Navbar from "@/components/custom/Navbar";
import { cookies } from "next/headers";
import UserProvider from "@/components/providers/UserProvider";

export default async function MasterLayout({ children }) {
  const cookieStore = await cookies();
  const session = cookieStore.get("session_user");
  const user = session ? JSON.parse(session.value) : null;

  return (
    <>
      <UserProvider currentUser={user} />
      <Navbar />
      <div className="pt-16">
        {children}
      </div>
    </>
  );
}
