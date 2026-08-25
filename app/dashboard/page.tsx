import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import {
  MoveUpRight,
  IndianRupee,
  MoveDownLeft,
  WalletMinimal,
} from "lucide-react";
import { CategoryBreakdown, SpendingTrend } from "@/components/DashboardChart";
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

  // Category breakdown (expenses only)
  const categoryMap = new Map<string, number>();
  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      categoryMap.set(
        t.category,
        (categoryMap.get(t.category) || 0) + t.amount,
      );
    });
  const categoryData = Array.from(categoryMap, ([name, value]) => ({
    name,
    value,
  }));

  // Daily trend (last 14 days)
  const dayMap = new Map<string, { income: number; expense: number }>();
  const today = new Date();
  for (let i = 13; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    });
    dayMap.set(key, { income: 0, expense: 0 });
  }
  transactions.forEach((t) => {
    const key = new Date(t.date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    });
    if (dayMap.has(key)) {
      const entry = dayMap.get(key)!;
      if (t.type === "income") entry.income += t.amount;
      else entry.expense += t.amount;
    }
  });
  const trendData = Array.from(dayMap, ([date, values]) => ({
    date,
    ...values,
  }));

  return (
    <div className="flex min-h-screen bg-gray-200 dark:bg-neutral-950 duration-300">
      <div className="flex-1 ml-64 dark:bg-neutral-950">
        <div className="relative p-4">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-roboto">
            Overview
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
        <div className="px-8 py-2 grid grid-cols-3 grid-rows-1 gap-8">
          <div className="flex rounded-lg p-6 justify-between bg-neutral-50 dark:bg-neutral-950 h-40">
            <div className="flex flex-col justify-center gap-10">
              <h2 className="font-roboto font-medium text-neutral-500">
                Total Income
              </h2>
              <p className="flex text-3xl font-bold items-center">
                <span className="scale-80 ">
                  <IndianRupee />
                </span>{" "}
                {totalIncome}
              </p>
            </div>
            <div className="p-1 bg-green-200 rounded-xl h-12 w-12 text-green-500 flex justify-center items-center">
              <MoveUpRight />
            </div>
          </div>
          <div className="flex rounded-lg p-6 justify-between bg-neutral-50 dark:bg-neutral-950 h-40">
            <div className="flex flex-col justify-center gap-10">
              <h2 className="font-roboto font-medium text-neutral-500">
                Total expense
              </h2>
              <p className="flex text-3xl font-bold items-center">
                <span className="scale-80 ">
                  <IndianRupee />
                </span>{" "}
                {totalExpense}
              </p>
            </div>
            <div className="p-1 bg-red-200 rounded-xl h-12 w-12 text-red-500 flex justify-center items-center">
              <MoveDownLeft />
            </div>
          </div>
          <div className="flex rounded-lg p-6 justify-between bg-neutral-50 dark:bg-neutral-950 h-40">
            <div className="flex flex-col justify-center gap-10">
              <h2 className="font-roboto font-medium text-neutral-500">
                Net balance
              </h2>
              <p className="flex text-3xl font-bold items-center">
                <span className="scale-80 ">
                  <IndianRupee />
                </span>{" "}
                {totalIncome - totalExpense}
              </p>
            </div>
            <div className="p-1 bg-purple-200 rounded-xl h-12 w-12 text-purple-500 flex justify-center items-center">
              <WalletMinimal />
            </div>
          </div>
        </div>
        <div className="px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg p-6 bg-neutral-50 dark:bg-neutral-950">
            <h2 className="font-roboto font-medium text-neutral-500 mb-2">
              Spending by category
            </h2>
            <CategoryBreakdown data={categoryData} />
          </div>

          <div className="rounded-lg p-6 bg-neutral-50 dark:bg-neutral-950">
            <h2 className="font-roboto font-medium text-neutral-500 mb-2">
              Last 14 days
            </h2>
            <SpendingTrend data={trendData} />
          </div>
        </div>
      </div>
    </div>
  );
}
