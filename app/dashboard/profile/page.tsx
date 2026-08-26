import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");

  type SessionUser = {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100 dark:bg-neutral-950 md:ml-64 mt-15 md:mt-0">
      <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
        Profile
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 mb-6">
        Your account details
      </p>

      <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm max-w-md flex flex-col items-center gap-4">
        {session.user.image && (
          <Image
            src={session.user.image}
            alt={session.user.name || "Profile picture"}
            width={80}
            height={80}
            className="rounded-full"
          />
        )}

        <div className="text-center">
          <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {session.user.name}
          </p>
          <p className="text-neutral-500 text-sm">{session.user.email}</p>
        </div>

        <div className="w-full border-t border-neutral-200 pt-4 mt-2 text-sm text-neutral-600">
          <p>
            <span className="font-medium">User ID:</span>{" "}
            {(session.user as SessionUser).id}
          </p>
        </div>
      </div>
    </div>
  );
}
