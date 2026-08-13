import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

import Image from "next/image";
import LightDark from "@/components/ui/LightDark";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/api/auth/signin");

  type SessionUser = {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };

  const userId = (session.user as SessionUser | undefined)?.id;
  if (!userId) redirect("/api/auth/signin");

  const transactions = await prisma.transaction.findMany({
    where: { userId },
    orderBy: { date: "desc" },
  });

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-neutral-950">
      <div className="flex-1 ml-64 dark:bg-neutral-950">
        <div className="relative p-4 bg-gray-100 dark:bg-neutral-950 border-b border-neutral-300 dark:border-neutral-700">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-roboto">
            Dashboard
          </h1>
          <p className="text-neutral-900 dark:text-neutral-100 font-roboto">
            Welcome, {session.user?.name}
          </p>
          <LightDark />
          <div className="absolute top-6 right-4 rounded-full overflow-hidden w-8 h-8 cursor-pointer border border-neutral-300 dark:border-neutral-700">
            <Image
              src={session.user?.image || "/default-avatar.png"}
              alt="Logo"
              width={100}
              height={50}
              className="object-cover"
            />
          </div>
        </div>
        <div className="p-8 grid grid-cols-4 grid-rows-2 gap-8">
          <div className="flex flex-col border rounded-lg p-6 gap-4 bg-gray-100 dark:bg-neutral-950 dark:border-neutral-700 border-neutral-300 h-50">
            <h2 className="text-xl font-roboto">Total Income</h2>
            <p className="text-4xl font-bold font-roboto text-green-600">
              ₹{totalIncome}
            </p>
          </div>
          <div className="flex flex-col border rounded-lg p-6 gap-4 bg-gray-100 dark:bg-neutral-950 dark:border-neutral-700 border-neutral-300 h-50">
            <h2 className="text-xl font-roboto">Total Expense</h2>
            <p className="text-4xl font-bold font-roboto text-red-600">
              ₹{totalExpense}
            </p>
          </div>
          <div className="flex flex-col border rounded-lg p-6 gap-4 bg-gray-100 dark:bg-neutral-950 dark:border-neutral-700 border-neutral-300 h-50">
            <h2 className="text-xl font-roboto">Net Balance</h2>
            <p className="text-4xl font-bold font-roboto text-blue-600">
              ₹{totalIncome - totalExpense}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
