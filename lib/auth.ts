import type { NextAuthOptions } from "next-auth";
import type { AdapterAccount } from "next-auth/adapters";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";

const adapter = PrismaAdapter(prisma);

// GitHub sometimes returns `refresh_token_expires_in`, which isn't a field
// in the standard NextAuth Prisma Account model — strip it before saving.
adapter.linkAccount = async (account: AdapterAccount) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
const { refresh_token_expires_in, ...cleanAccount } = account as AdapterAccount & {
  refresh_token_expires_in?: number;
};
  await prisma.account.create({ data: cleanAccount });
};

export const authOptions: NextAuthOptions = {
  adapter,
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  session: {
    strategy: "database",
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        const sessionUser = session.user as typeof session.user & { id?: string };
        sessionUser.id = user.id;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};