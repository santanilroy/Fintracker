import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/api/auth/signin");

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 p-4 ml-64 backdrop:blur-sm bg-white/30 dark:bg-gray-800/30 border-b border-neutral-300 h-20">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome, {session.user?.name}</p>
        <div className="absolute top-6 right-4 rounded-full overflow-hidden w-8 h-8">
          <Image
            src={session.user?.image || "/default-avatar.png"}
            alt="Logo"
            width={100}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}
