import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import AddTransactionForm from "@/components/AddTransactionform";

export default async function AddTransactionPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");

  return (
    <div className="p-8 min-h-screen bg-gray-100 dark:bg-neutral-950 md:ml-64 mt-15 md:mt-0">
      <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
        Add Transaction
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 mb-6">
        Log a new income or expense
      </p>

      <div className="max-w-md">
        <AddTransactionForm />
      </div>
    </div>
  );
}
