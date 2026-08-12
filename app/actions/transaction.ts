"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addTransaction(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session?.user) throw new Error("Not authenticated");

  type SessionUser = {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };

  const userId = (session.user as SessionUser).id;
  if (!userId) throw new Error("User not found");

  const amount = parseFloat(formData.get("amount") as string);
  const type = formData.get("type") as string;
  const category = formData.get("category") as string;
  const note = formData.get("note") as string;

  if (!amount || !type || !category) {
    throw new Error("Missing required fields");
  }

  await prisma.transaction.create({
    data: {
      userId,
      amount,
      type,
      category,
      note: note || null,
    },
  });

  revalidatePath("/dashboard"); // refreshes the dashboard with new data
}