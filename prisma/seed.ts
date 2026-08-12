import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const categories = {
  expense: ["Food", "Rent", "Transport", "Shopping", "Utilities", "Entertainment"],
  income: ["Salary", "Freelance", "Investment"],
};

async function main() {
  // Replace with your actual GitHub-login email after signing in once
  const user = await prisma.user.findFirst();

  if (!user) {
    console.error("No user found — sign in with GitHub first, then re-run this seed.");
    return;
  }

  const transactions = [];

  for (let i = 0; i < 40; i++) {
    const isIncome = Math.random() < 0.2; // ~20% income, 80% expense
    const type = isIncome ? "income" : "expense";
    const categoryList = categories[type];
    const category = categoryList[Math.floor(Math.random() * categoryList.length)];
    const amount = isIncome
      ? Math.floor(Math.random() * 40000) + 10000 // ₹10k–50k
      : Math.floor(Math.random() * 3000) + 100;    // ₹100–3100

    const daysAgo = Math.floor(Math.random() * 60); // spread over last 60 days
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);

    transactions.push({
      userId: user.id,
      amount,
      type,
      category,
      date,
    });
  }

  await prisma.transaction.createMany({ data: transactions });
  console.log(`Seeded ${transactions.length} transactions for ${user.email}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());